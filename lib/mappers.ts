import { TaskUI, TaskStatus, TaskPriority } from "@/app/types/task"
import { calculateDuration, calculateTimeSpent } from "./date-utils"

type RawTaskFromSupabase = {
  id: string
  name: string
  priority: string // viene como string plano
  status: string // viene como string plano
  start_date?: string
  end_date?: string
  parentId?: string | null
  projectId?: string
  description?: string
  createdAt?: string
  updatedAt?: string
  task_assignees?: {
    assignees: {
      name: string
      avatar?: string
    }
  }[]
}

export function mapRawTaskToUI(task: RawTaskFromSupabase): TaskUI {
  return {
    ...task,
    status: task.status as TaskStatus, // 👈 casteo explícito
    priority: task.priority as TaskPriority, // 👈 casteo explícito
    assignees: task.task_assignees?.map(t => t.assignees) || [],
    duration: calculateDuration(task.start_date, task.end_date),
    timeSpent: calculateTimeSpent(task.start_date),
    hasChildren: false,
  }
}
