"use client"

import type { BurndownPoint } from "@/redux/selectors"
import { css } from "@/styled/css"
import { styled } from "@/styled/jsx"
import { token } from "@/styled/tokens"

import { AreaChart } from "./area-chart"
import { StatusesSummary } from "./statuses-summary"

// ─── Sub-components ───────────────────────────────────────────────────────────

const Card = styled("div", {
  base: {
    borderRadius: "xl",
    border: "tertiary",
    backgroundColor: "background.secondary",
    padding: "3",
    display: "flex",
    flexDirection: "column",
    gap: "2",
    width: "full",
  },
})

const Header = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "2",
  },
})

const Title = styled("p", {
  base: {
    textStyle: "heading.md",
    color: "text.primary",
  },
})

const ChartWrapper = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "1",
    width: "full",
    maxWidth: "lg",
  },
})

const ChartDateLabels = styled("div", {
  base: {
    display: "flex",
    justifyContent: "space-between",
    textStyle: "body.sm",
    color: "text.secondary",
  },
})

// ─── Types ────────────────────────────────────────────────────────────────────

export interface TaskStatusCounts {
  TODO: number
  IN_PROGRESS: number
  BLOCKED: number
  DONE: number
}

export interface ProgressCardProps {
  statusCounts: TaskStatusCounts
  burndown: BurndownPoint[]
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ProgressCard({ statusCounts, burndown }: ProgressCardProps) {
  const startLabel = burndown.at(0)?.date ?? ""
  const endLabel = burndown.at(-1)?.date ?? ""
  const remaining = burndown.at(-1)?.remaining ?? 0

  const chartSeries = [
    {
      dataKey: "ideal" as const,
      color: token("colors.border.secondary"),
      strokeWidth: 1,
      gradient: true,
      fillOpacity: 0.6,
    },
    {
      dataKey: "remaining" as const,
      color: token("colors.text.info"),
      strokeWidth: 1.5,
      gradient: false,
      fillOpacity: 0,
    },
  ]

  return (
    <Card>
      <Header>
        <Title>Progress</Title>
        <StatusesSummary statusCounts={statusCounts} />
      </Header>

      <ChartWrapper>
        {burndown.length > 0 && (
          <ChartDateLabels>
            <span>{startLabel}</span>
            <span>{endLabel}</span>
          </ChartDateLabels>
        )}

        <div
          className={css({
            position: "relative",
            width: "full",
          })}
        >
          <AreaChart
            data={burndown}
            xAxisKey="date"
            series={chartSeries}
            height={72}
            showXAxis={false}
            showYAxis={false}
            showGrid={false}
            showTooltip={true}
          />

          {burndown.length > 0 && (
            <span
              className={css({
                position: "absolute",
                bottom: "1",
                right: "0",
                textStyle: "body.sm",
                color: "text.info",
                pointerEvents: "none",
                whiteSpace: "nowrap",
              })}
            >
              {remaining} remaining
            </span>
          )}
        </div>
      </ChartWrapper>
    </Card>
  )
}
