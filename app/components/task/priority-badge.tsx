'use client'

import { Circle } from "lucide-react"
import type { TaskPriority } from "../../types/task" 

export function PriorityBadge({ priority }: { priority: TaskPriority }) {
  const colors: Record<TaskPriority, string> = {
    high: "text-red-500",
    medium: "text-yellow-500",
    low: "text-green-500",
  }

  const labels: Record<TaskPriority, string> = {
    high: "Alta",
    medium: "Media",
    low: "Baja",
  }

  return (
    <div className="flex items-center gap-2">
      <Circle className={`h-3 w-3 ${colors[priority]}`} fill="currentColor" />
      <span className="text-sm font-medium">{labels[priority]}</span>
    </div>
  )
}
