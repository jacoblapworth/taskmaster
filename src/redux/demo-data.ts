import type { TodoHierarchy } from "@/models/types"

const timestamp = "2026-05-02T09:00:00.000Z"

const organisationId = "10f8d2b8-3f91-4f27-8b8d-3f4c1a6f2d10"
const platformTeamId = "8a5d7e1a-1f4e-4ac7-9f3d-2d69f6f0e201"
const designOpsTeamId = "f4b16db5-b6f1-41ab-8a86-d0b6e53d2f02"
const infraTeamId = "c3a2b1d4-5e6f-4a7b-8c9d-0e1f2a3b4c05"
const taskmasterProjectId = "a6f3d8e9-5f5a-4a80-9079-8c5b8ff4c303"
const designSystemProjectId = "b2f4e6c1-8b59-41f7-b9d0-5a4d9a7c5404"
const authProjectId = "c3d5e7f9-1a2b-4c3d-8e9f-0a1b2c3d4e06"
const docsProjectId = "d4e6f8a0-2b3c-4d5e-9f0a-1b2c3d4e5f07"
const avaUserId = "a64e5f10-1234-4cb1-9a12-0ff7f0b99111"
const miloUserId = "b75f6a21-2345-4dc2-8b23-1aa8e1c88222"
const rinUserId = "c86a7b32-3456-4ed3-9c34-2bb9d2d77333"

export const demoHierarchy: TodoHierarchy = {
  organisations: [
    {
      id: organisationId,
      name: "Product Studio",
      description: "Cross-functional product delivery for client work.",
    },
  ],
  teams: [
    {
      id: platformTeamId,
      organisationId,
      name: "Platform",
    },
    {
      id: designOpsTeamId,
      organisationId,
      name: "Design Ops",
    },
    {
      id: infraTeamId,
      organisationId,
      name: "Infrastructure",
    },
  ],
  users: [
    {
      id: avaUserId,
      teamId: platformTeamId,
      name: "Ava",
      email: "ava@taskmaster.dev",
    },
    {
      id: miloUserId,
      teamId: infraTeamId,
      name: "Milo",
      email: "milo@taskmaster.dev",
    },
    {
      id: rinUserId,
      teamId: designOpsTeamId,
      name: "Rin",
      email: "rin@taskmaster.dev",
    },
  ],
  projects: [
    {
      id: taskmasterProjectId,
      teamId: platformTeamId,
      name: "Taskmaster App",
      description:
        "Build the initial task hierarchy and state layer. Covers Redux slice architecture, persisted storage, typed selectors, and the core CRUD flows for organisations, teams, projects, and tasks.",
    },
    {
      id: designSystemProjectId,
      teamId: designOpsTeamId,
      name: "Design System Refresh",
      description:
        "Align reusable UI primitives and tokens across the product suite. Includes audit of existing components, new Panda CSS token definitions, updated Storybook stories, and documentation.",
    },
    {
      id: authProjectId,
      teamId: infraTeamId,
      name: "Auth & Access Control",
      description:
        "Implement authentication and role-based access control. Covers session management, OAuth provider integration, middleware protection, and permission-aware UI rendering.",
    },
    {
      id: docsProjectId,
      teamId: platformTeamId,
      name: "Developer Documentation",
      description:
        "Write and publish internal developer docs for the Platform team's shared libraries, conventions, and onboarding guides.",
    },
  ],
  tasks: [
    // ── Taskmaster App ────────────────────────────────────────────────────────
    {
      id: "c9e1a9d2-90df-43d1-81b6-6c4e12f6a505",
      projectId: taskmasterProjectId,
      title: "Wire the persisted Redux store",
      description:
        "Set up redux-persist with localStorage as the storage engine. Configure the root reducer to persist organisation, team, project, and task slices. Ensure rehydration happens before the first render using PersistGate so the UI never flashes with an empty state.",
      status: "DONE",
      assigneeId: avaUserId,
      dueDate: "2026-05-05",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: "d0b6f2a7-2b27-4f2e-9d88-b73d9a2e9606",
      projectId: taskmasterProjectId,
      title: "Add shared cascade thunks",
      description:
        "Extract cross-slice delete orchestration into reusable async thunks. When a project is deleted, the thunk should dispatch removal of all child tasks in the same transaction. When a team is deleted, it should cascade to its projects and their tasks. Keep reducers pure — no cross-slice awareness inside slice files.",
      status: "IN_PROGRESS",
      assigneeId: miloUserId,
      dueDate: "2026-05-07",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: "e1a2b3c4-d5e6-4f7a-8b9c-0d1e2f3a4b08",
      projectId: taskmasterProjectId,
      title: "Build typed selectors for task board",
      description:
        "Write memoised createSelector factories that derive per-project task lists grouped by status column. Selectors should accept a projectId parameter and return tasks in a stable column order: TODO, IN_PROGRESS, DONE. Export selector hooks from redux/hooks.tsx for use in board components.",
      status: "DONE",
      assigneeId: avaUserId,
      dueDate: "2026-05-04",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: "f2b3c4d5-e6f7-4a8b-9c0d-1e2f3a4b5c09",
      projectId: taskmasterProjectId,
      title: "Implement optimistic task status updates",
      description:
        "When a user drags a task to a new column, immediately update the store status and fire the async persistence call in the background. On failure, revert to the previous status and surface a toast notification. Include a loading indicator on the card during the in-flight period.",
      status: "IN_PROGRESS",
      assigneeId: miloUserId,
      dueDate: "2026-05-09",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: "a3c4d5e6-f7a8-4b9c-0d1e-2f3a4b5c6d10",
      projectId: taskmasterProjectId,
      title: "Add task creation modal",
      description:
        "Design and implement a modal form for creating new tasks within a project. Fields: title (required), description, assignee (dropdown from team members), due date (date picker), and status. On submit, dispatch the createTask thunk and close the modal. Validate with Zod before dispatch.",
      status: "TODO",
      assigneeId: rinUserId,
      dueDate: "2026-05-12",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: "b4d5e6f7-a8b9-4c0d-1e2f-3a4b5c6d7e11",
      projectId: taskmasterProjectId,
      title: "Wire drag-and-drop between columns",
      description:
        "Integrate @dnd-kit/core to allow cards to be dragged between status columns. Each column is a droppable container; each task card is a draggable item. On drop, dispatch the status update thunk. Preserve keyboard accessibility — draggable items must be operable via arrow keys.",
      status: "TODO",
      assigneeId: miloUserId,
      dueDate: "2026-05-14",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: "c5e6f7a8-b9c0-4d1e-2f3a-4b5c6d7e8f12",
      projectId: taskmasterProjectId,
      title: "Add project detail page",
      description:
        "Build the /projects/[id] route. Fetch the project and its tasks from the Redux store using the projectId param. Render the project header (name, description, team badge, due date) above the task board. Handle the case where the project ID is not found with a graceful 404 state.",
      status: "DONE",
      assigneeId: avaUserId,
      dueDate: "2026-05-03",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: "d6f7a8b9-c0d1-4e2f-3a4b-5c6d7e8f9a13",
      projectId: taskmasterProjectId,
      title: "Write unit tests for Redux slices",
      description:
        "Add Vitest test suites for the tasks, projects, teams, and organisations slices. Test every reducer case: add, update, remove, and edge cases like removing a non-existent ID. Also test cascade thunks with mocked dispatch to confirm correct child deletion ordering.",
      status: "TODO",
      assigneeId: rinUserId,
      dueDate: "2026-05-16",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: "e7a8b9c0-d1e2-4f3a-4b5c-6d7e8f9a0b14",
      projectId: taskmasterProjectId,
      title: "Implement task search and filter",
      description:
        "Add a search bar and filter panel to the project board. Support filtering by assignee, status, and due-date range. Implement search over task title and description using a client-side derived selector. Debounce the search input at 200 ms to avoid excessive re-renders.",
      status: "TODO",
      assigneeId: avaUserId,
      dueDate: "2026-05-19",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: "f8b9c0d1-e2f3-4a4b-5c6d-7e8f9a0b1c15",
      projectId: taskmasterProjectId,
      title: "Set up Storybook for task components",
      description:
        "Initialise Storybook 8 with the Next.js framework plugin. Write stories for TaskCard, TasksColumn, and TasksBoard covering all status variants, empty states, and drag-active states. Add a11y addon and ensure zero violations in automated checks.",
      status: "DONE",
      assigneeId: rinUserId,
      dueDate: "2026-05-02",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    // ── Design System Refresh ─────────────────────────────────────────────────
    {
      id: "e7c5a4b1-6d8c-4d95-b9a7-1c3e4f5a8707",
      projectId: designSystemProjectId,
      title: "Audit component states",
      description:
        "Systematically review every interactive component — Button, Input, Select, Checkbox, Toggle — and document their hover, focus, active, disabled, and error states. Cross-reference against the Figma source file and flag any discrepancies. Produce a spreadsheet of gaps to drive the refresh backlog.",
      status: "TODO",
      assigneeId: rinUserId,
      dueDate: "2026-05-10",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c16",
      projectId: designSystemProjectId,
      title: "Define Panda CSS semantic tokens",
      description:
        "Create the semantic token layer in panda.config.ts that maps primitive colour scales to role-based names (e.g. color.text.primary, color.surface.default, color.border.subtle). Include light and dark theme conditionality. Tokens should cover colour, spacing, radius, shadow, and typography.",
      status: "IN_PROGRESS",
      assigneeId: rinUserId,
      dueDate: "2026-05-08",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: "b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d17",
      projectId: designSystemProjectId,
      title: "Rebuild Button component",
      description:
        "Rewrite Button using the new semantic tokens. Support variants: primary, secondary, ghost, and destructive. Support sizes: sm, md, lg. Expose an asChild prop powered by Radix Slot for polymorphic rendering. Ensure all variants meet WCAG 2.1 AA contrast ratios in both themes.",
      status: "TODO",
      assigneeId: avaUserId,
      dueDate: "2026-05-13",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: "c3d4e5f6-a7b8-4c9d-0e1f-2a3b4c5d6e18",
      projectId: designSystemProjectId,
      title: "Create Icon component and sprite system",
      description:
        "Build an Icon component that renders SVG symbols from an inline sprite sheet. Generate the sprite at build time from the icons/ directory using a Turbo task. The component should accept a name prop with TypeScript autocomplete derived from the sprite manifest. Support size and color props via CSS variables.",
      status: "TODO",
      assigneeId: miloUserId,
      dueDate: "2026-05-15",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: "d4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f19",
      projectId: designSystemProjectId,
      title: "Write Storybook stories for all primitives",
      description:
        "Document every primitive component in Storybook with a Default story plus one story per significant prop variant. Include an a11y audit story that exercises focus management and screen-reader labels. Deploy Storybook to a Chromatic project for visual regression diffing on every PR.",
      status: "TODO",
      assigneeId: rinUserId,
      dueDate: "2026-05-20",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: "e5f6a7b8-c9d0-4e1f-2a3b-4c5d6e7f8a20",
      projectId: designSystemProjectId,
      title: "Publish design system to internal registry",
      description:
        "Package the design system as a scoped npm package (@studio/ui) and publish to the organisation's private Verdaccio registry. Set up a Changesets release workflow with automated CHANGELOG generation. Document the installation and theming guide in the repo README.",
      status: "TODO",
      assigneeId: avaUserId,
      dueDate: "2026-05-23",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: "f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b21",
      projectId: designSystemProjectId,
      title: "Implement dark mode token switching",
      description:
        "Add a ThemeProvider that applies the correct Panda CSS condition class to the root element based on system preference and user override. Persist the user's override in localStorage. Wire the existing ThemeToggle component to dispatch through the provider. Verify no FOUC on initial load.",
      status: "DONE",
      assigneeId: miloUserId,
      dueDate: "2026-05-04",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: "a7b8c9d0-e1f2-4a3b-4c5d-6e7f8a9b0c22",
      projectId: designSystemProjectId,
      title: "Update Nav component for new token system",
      description:
        "Migrate Nav, NavL1Item, and NavL2Item to consume semantic tokens instead of hardcoded CSS values. Ensure active, hover, and focus states use the correct role-based colour tokens. Update all associated Storybook stories to reflect the new API. Check visual output in both light and dark modes.",
      status: "IN_PROGRESS",
      assigneeId: rinUserId,
      dueDate: "2026-05-11",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    // ── Auth & Access Control ─────────────────────────────────────────────────
    {
      id: "b8c9d0e1-f2a3-4b4c-5d6e-7f8a9b0c1d23",
      projectId: authProjectId,
      title: "Integrate NextAuth with GitHub OAuth",
      description:
        "Configure NextAuth.js v5 with the GitHub provider. Set up the auth.ts config at the project root, add the /api/auth/[...nextauth] route handler, and wire the session provider into the app layout. Store sessions in a Redis adapter to support multi-instance deployments without sticky sessions.",
      status: "DONE",
      assigneeId: miloUserId,
      dueDate: "2026-05-03",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: "c9d0e1f2-a3b4-4c5d-6e7f-8a9b0c1d2e24",
      projectId: authProjectId,
      title: "Define RBAC permission model",
      description:
        "Design the role hierarchy: Owner, Admin, Member, Viewer. Document which actions each role may perform on organisations, teams, projects, and tasks. Implement a can(role, action, resource) utility function and export it from a shared permissions module. Include exhaustive unit tests.",
      status: "IN_PROGRESS",
      assigneeId: avaUserId,
      dueDate: "2026-05-09",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: "d0e1f2a3-b4c5-4d6e-7f8a-9b0c1d2e3f25",
      projectId: authProjectId,
      title: "Protect routes with middleware",
      description:
        "Add a Next.js middleware.ts at the root that checks for a valid session on all routes under /app. Redirect unauthenticated users to /login. For authenticated users without the required role, return a 403 page. Ensure public routes (/login, /api/auth) are excluded from the matcher.",
      status: "TODO",
      assigneeId: miloUserId,
      dueDate: "2026-05-12",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: "e1f2a3b4-c5d6-4e7f-8a9b-0c1d2e3f4a26",
      projectId: authProjectId,
      title: "Build permission-aware UI components",
      description:
        "Create a <Can> component that accepts action and resource props and conditionally renders its children based on the current user's role. Use React context to provide the session role without prop-drilling. Apply <Can> gates to destructive actions: delete buttons, project settings, member management.",
      status: "TODO",
      assigneeId: rinUserId,
      dueDate: "2026-05-14",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: "f2a3b4c5-d6e7-4f8a-9b0c-1d2e3f4a5b27",
      projectId: authProjectId,
      title: "Add member invite flow",
      description:
        "Implement an invitation system where Owners and Admins can invite new members by email. Generate a signed JWT invite token with a 48-hour expiry. Send the invite email via Resend. When the recipient clicks the link, exchange the token for a session and prompt them to choose a display name.",
      status: "TODO",
      assigneeId: avaUserId,
      dueDate: "2026-05-17",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: "a3b4c5d6-e7f8-4a9b-0c1d-2e3f4a5b6c28",
      projectId: authProjectId,
      title: "Audit session token security",
      description:
        "Review the session token lifecycle: signing algorithm (ensure RS256 or EdDSA, not HS256 with a weak secret), expiry policy (access token 15 min, refresh 7 days), CSRF protection, and secure/httpOnly cookie flags. Document findings and open follow-up tasks for any gaps identified.",
      status: "TODO",
      assigneeId: miloUserId,
      dueDate: "2026-05-19",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    // ── Developer Documentation ───────────────────────────────────────────────
    {
      id: "b4c5d6e7-f8a9-4b0c-1d2e-3f4a5b6c7d29",
      projectId: docsProjectId,
      title: "Document Redux slice conventions",
      description:
        "Write a guide explaining the team's entity-adapter pattern, how to add a new slice (file location, naming, export conventions), how cascade thunks work, and how to write selector hooks. Include a worked example of adding a hypothetical Comments slice end-to-end.",
      status: "IN_PROGRESS",
      assigneeId: avaUserId,
      dueDate: "2026-05-10",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: "c5d6e7f8-a9b0-4c1d-2e3f-4a5b6c7d8e30",
      projectId: docsProjectId,
      title: "Write onboarding guide for new engineers",
      description:
        "Create a start-here.md that covers: cloning the repo, installing prerequisites (Node, pnpm, Docker), running the dev server, running tests, and making your first commit through the pre-commit hook pipeline. Include a troubleshooting FAQ for common first-day issues.",
      status: "TODO",
      assigneeId: rinUserId,
      dueDate: "2026-05-15",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: "d6e7f8a9-b0c1-4d2e-3f4a-5b6c7d8e9f31",
      projectId: docsProjectId,
      title: "Document component library usage",
      description:
        "Write usage documentation for every component exported from src/components. Cover required and optional props, composition patterns, accessibility requirements, and common gotchas. Embed live Storybook iframes for interactive examples. Publish as a Nextra site under /docs.",
      status: "TODO",
      assigneeId: miloUserId,
      dueDate: "2026-05-18",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: "e7f8a9b0-c1d2-4e3f-4a5b-6c7d8e9f0a32",
      projectId: docsProjectId,
      title: "Create ADR template and first three records",
      description:
        "Set up an Architecture Decision Records directory at docs/adr/. Write a template following the MADR format. Backfill the three most consequential decisions already made: choice of Redux Toolkit over Zustand, Panda CSS over Tailwind, and NextAuth over custom auth. Each ADR should document context, options considered, decision, and consequences.",
      status: "TODO",
      assigneeId: avaUserId,
      dueDate: "2026-05-20",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  ],
}
