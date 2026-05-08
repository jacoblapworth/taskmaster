"use client"

import { Paperclip, UserCircle2 } from "lucide-react"
import { useRouter } from "next/navigation"
import {
  type FormEvent,
  type MouseEvent,
  useEffect,
  useMemo,
  useState,
} from "react"

import { Button } from "@/components/button"
import { Dialog } from "@/components/dialog"
import {
  Menu,
  MenuButton,
  MenuItemCheck,
  MenuItemRadio,
  MenuProvider,
} from "@/components/menu"
import { Pill } from "@/components/pill"
import { StatusPillMenu } from "@/components/status-pill-menu"
import { createTask, type TaskStatus } from "@/models/types"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { projectSelectors, userSelectors } from "@/redux/selectors"
import { taskAdded } from "@/redux/slices/tasks.slice"
import { Box, HStack, VStack, styled } from "@/styled/jsx"

const Form = styled("form", {
  base: {
    padding: "4",
  },
})

const TextInput = styled("input", {
  base: {
    width: "full",
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    color: "text.primary",
    textStyle: "heading.lg",
    fontWeight: "medium",
    _placeholder: {
      color: "text.placeholder",
    },
  },
})

const DescriptionInput = styled("textarea", {
  base: {
    width: "full",
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    color: "text.primary",
    minHeight: "20",
    resize: "vertical",
    textStyle: "body.lg",
    _placeholder: {
      color: "text.placeholder",
    },
  },
})

const IconButton = styled("button", {
  base: {
    width: "8",
    height: "8",
    borderRadius: "md",
    border: "secondary",
    backgroundColor: "surface.tertiary",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "icon.primary",
    cursor: "pointer",
  },
})

const AvatarButton = styled(MenuButton, {
  base: {
    width: "6",
    height: "6",
    borderRadius: "full",
    border: "secondary",
    backgroundColor: "surface.tertiary",
    color: "icon.tertiary",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
})

export default function Page() {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const projects = useAppSelector(projectSelectors.selectAll)
  const users = useAppSelector(userSelectors.selectAll)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState<TaskStatus>("TODO")
  const [projectId, setProjectId] = useState<string>(projects[0]?.id ?? "")
  const [assigneeId, setAssigneeId] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (!projectId && projects[0]) {
      setProjectId(projects[0].id)
    }
  }, [projectId, projects])

  const project = useAppSelector((state) =>
    projectId ? projectSelectors.selectById(state, projectId) : undefined,
  )

  const assignableUsers = useMemo(() => {
    if (!project) {
      return []
    }

    return users.filter((user) => user.teamId === project.teamId)
  }, [project, users])

  function updateProject(nextProjectId: string) {
    setProjectId(nextProjectId)

    const nextProject = projects.find(
      (candidate) => candidate.id === nextProjectId,
    )
    if (!nextProject) {
      setAssigneeId(undefined)
      return
    }

    const isAssigneeInTeam = users.some(
      (candidate) =>
        candidate.id === assigneeId && candidate.teamId === nextProject.teamId,
    )

    if (!isAssigneeInTeam) {
      setAssigneeId(undefined)
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!projectId || !title.trim()) {
      return
    }

    const task = createTask({
      projectId,
      title: title.trim(),
      description: description.trim() || undefined,
      status,
      assigneeId,
      dueDate: undefined,
      completedAt: status === "DONE" ? new Date().toISOString() : undefined,
      order: undefined,
    })

    dispatch(taskAdded(task))
    router.push(`/tasks/${task.id}`)
  }

  function preventSubmit(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
  }

  return (
    <Dialog open onClose={() => router.back()} size="md">
      <VStack position="relative" alignItems="stretch">
        <Form onSubmit={onSubmit}>
          <VStack alignItems="stretch" gap="3" flexGrow="1">
            <HStack justifyContent="space-between" alignItems="center">
              <HStack gap="2">
                <StatusPillMenu status={status} onChange={setStatus} />

                <MenuProvider>
                  <MenuButton render={<Pill isInteractive />}>
                    {project?.name ?? "Project"}
                  </MenuButton>
                  <Menu>
                    {projects.map((candidate) => (
                      <MenuItemRadio
                        key={candidate.id}
                        name="project"
                        value={candidate.id}
                        checked={candidate.id === projectId}
                        onChange={() => updateProject(candidate.id)}
                      >
                        {candidate.name}
                        <MenuItemCheck />
                      </MenuItemRadio>
                    ))}
                  </Menu>
                </MenuProvider>
              </HStack>

              <MenuProvider>
                <AvatarButton>
                  <UserCircle2 size={16} />
                </AvatarButton>
                <Menu>
                  <MenuItemRadio
                    name="assignee"
                    value=""
                    checked={!assigneeId}
                    onChange={() => setAssigneeId(undefined)}
                  >
                    Unassigned
                    <MenuItemCheck />
                  </MenuItemRadio>
                  {assignableUsers.map((candidate) => (
                    <MenuItemRadio
                      key={candidate.id}
                      name="assignee"
                      value={candidate.id}
                      checked={candidate.id === assigneeId}
                      onChange={() => setAssigneeId(candidate.id)}
                    >
                      {candidate.name}
                      <MenuItemCheck />
                    </MenuItemRadio>
                  ))}
                </Menu>
              </MenuProvider>
            </HStack>

            <Box>
              <TextInput
                required
                value={title}
                onChange={(event) => setTitle(event.currentTarget.value)}
                placeholder="Task title"
                aria-label="Task title"
              />
              <DescriptionInput
                value={description}
                onChange={(event) => setDescription(event.currentTarget.value)}
                placeholder="Add a description..."
                aria-label="Task description"
              />
            </Box>
          </VStack>

          <HStack justifyContent="space-between" alignItems="center">
            <IconButton
              type="button"
              onClick={preventSubmit}
              aria-label="Attach file"
            >
              <Paperclip size={16} />
            </IconButton>

            <Button
              type="submit"
              variant="primary"
              disabled={!title.trim() || !projectId}
            >
              Add task
            </Button>
          </HStack>
        </Form>
      </VStack>
    </Dialog>
  )
}
