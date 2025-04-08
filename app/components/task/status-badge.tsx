'use client'

import { Badge } from "@/components/ui/badge"

type TaskStatus = 'pending' | 'in-progress' | 'completed'

const statusMap: Record<TaskStatus, { label: string; variant: "default" | "secondary" | "destructive" }> = {
  pending: { label: "Pendiente", variant: "default" },
  "in-progress": { label: "En progreso", variant: "secondary" },
  completed: { label: "Completada", variant: "destructive" },
}

export function StatusBadge({ status }: { status: TaskStatus }) {
  const { label, variant } = statusMap[status]

  return <Badge variant={variant}>{label}</Badge>
}
