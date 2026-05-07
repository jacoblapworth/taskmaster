"use client"

import {
  Area,
  AreaChart as RechartsAreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { token } from "@/styled/tokens"

export interface AreaChartSeries {
  dataKey: string
  color: string
  fillOpacity?: number
  strokeWidth?: number
  /** Whether to use a gradient fill. Defaults to true. */
  gradient?: boolean
  /** Stack id for stacked area charts. */
  stackId?: string
}

export interface AreaChartProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[]
  xAxisKey: string
  series: AreaChartSeries[]
  height?: number
  showXAxis?: boolean
  showYAxis?: boolean
  showGrid?: boolean
  showTooltip?: boolean
  /** X-axis tick values to show labels for (first and last by default) */
  xAxisTicks?: string[]
}

export function AreaChart({
  data,
  xAxisKey,
  series,
  height = 84,
  showXAxis = true,
  showYAxis = false,
  showGrid = false,
  showTooltip = false,
}: AreaChartProps) {
  const gradientIds = series.map((s) => `gradient-${s.dataKey}`)

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsAreaChart
        data={data}
        margin={{ top: 2, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          {series.map((s, i) =>
            s.gradient !== false ? (
              <linearGradient
                key={gradientIds[i]}
                id={gradientIds[i]}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor={s.color} stopOpacity={0.25} />
                <stop offset="95%" stopColor={s.color} stopOpacity={0.02} />
              </linearGradient>
            ) : null,
          )}
        </defs>

        {showGrid && (
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={token("colors.border.secondary")}
            vertical={false}
          />
        )}

        {showXAxis && (
          <XAxis
            dataKey={xAxisKey}
            tick={{
              fontSize: 11,
              fill: token("colors.text.secondary"),
              fontFamily: "Inter, sans-serif",
            }}
            tickLine={false}
            axisLine={false}
            interval="preserveStartEnd"
          />
        )}

        {showYAxis && (
          <YAxis
            tick={{
              fontSize: 11,
              fill: token("colors.text.secondary"),
              fontFamily: "Inter, sans-serif",
            }}
            tickLine={false}
            axisLine={false}
            width={28}
          />
        )}

        {showTooltip && (
          <Tooltip
            contentStyle={{
              backgroundColor: token("colors.surface.secondary"),
              border: `1px solid ${token("colors.border.secondary")}`,
              borderRadius: "8px",
              fontSize: 12,
              fontFamily: "Inter, sans-serif",
            }}
            cursor={{
              stroke: token("colors.border.secondary"),
              strokeWidth: 1,
            }}
          />
        )}

        {series.map((s, i) => (
          <Area
            key={s.dataKey}
            type="monotone"
            dataKey={s.dataKey}
            stroke={s.color}
            strokeWidth={s.strokeWidth ?? 1.5}
            fill={s.gradient !== false ? `url(#${gradientIds[i]})` : s.color}
            fillOpacity={s.gradient !== false ? 1 : (s.fillOpacity ?? 0.15)}
            stackId={s.stackId}
            dot={false}
            activeDot={showTooltip ? { r: 4 } : false}
            isAnimationActive={false}
          />
        ))}
      </RechartsAreaChart>
    </ResponsiveContainer>
  )
}
