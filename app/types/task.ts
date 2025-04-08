
export type TaskPriority = 'low' | 'medium' | 'high'
export type TaskStatus = 'pending' | 'in-progress' | 'completed'

export type Task = {
  id: string
  name: string
  description?: string
  start_date?: string
  end_date?: string
  status: TaskStatus
  priority: TaskPriority
  projectId?: string
  parentId?: string | null
  baselineStartDate?: string
  baselineEndDate?: string
  createdAt?: string
  updatedAt?: string
}

export interface TaskAssignee {
  taskId: string
  assigneeId: string
}

export interface TaskDependency {
  taskId: string
  dependsOnTaskId: string
  dependencyType: string
}

export type TaskUI = Task & {
  assignees?: { name: string; avatar?: string }[]
  children?: TaskUI[]
  hasChildren?: boolean
  duration?: string
  timeSpent?: string
}

export type RawTaskWithAssignees = Task & {
  task_assignees: {
    assignees: {
      name: string
      avatar?: string
    }
  }[]
}


