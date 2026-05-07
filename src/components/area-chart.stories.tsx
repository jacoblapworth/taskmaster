import preview from "@/storybook/preview"
import { token } from "@/styled/tokens"

import { AreaChart } from "./area-chart"

const sampleData = [
  { date: "Jan 1", remaining: 11, ideal: 11 },
  { date: "Jan 15", remaining: 10, ideal: 9 },
  { date: "Feb 1", remaining: 9, ideal: 7 },
  { date: "Feb 15", remaining: 7, ideal: 6 },
  { date: "Mar 1", remaining: 6, ideal: 5 },
  { date: "Mar 15", remaining: 5, ideal: 4 },
  { date: "Apr 1", remaining: 5, ideal: 3 },
  { date: "Apr 15", remaining: 4, ideal: 2 },
  { date: "May 1", remaining: 3, ideal: 1 },
  { date: "May 7", remaining: 3, ideal: 0 },
]

const meta = preview.meta({
  title: "Components/AreaChart",
  component: AreaChart,
  args: {
    data: sampleData,
    xAxisKey: "date",
    series: [
      {
        dataKey: "ideal",
        color: token("colors.border.secondary"),
        strokeWidth: 1,
        gradient: true,
      },
      {
        dataKey: "remaining",
        color: token("colors.text.info"),
        strokeWidth: 1.5,
        gradient: false,
        fillOpacity: 0,
      },
    ],
    height: 120,
  },
})

export const Default = meta.story({})

export const WithAxes = meta.story({
  args: {
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    showTooltip: true,
    height: 160,
  },
})

export const SingleSeries = meta.story({
  args: {
    series: [
      {
        dataKey: "remaining",
        color: token("colors.text.info"),
        strokeWidth: 2,
        gradient: true,
      },
    ],
    showXAxis: true,
    height: 140,
  },
})
