// Calcula la duración entre fecha de inicio y fin
export function calculateDuration(start?: string, end?: string): string {
  if (!start || !end) return "-"
  const startDate = new Date(start)
  const endDate = new Date(end)
  const diff = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
  return `${diff}d`
}

// Calcula el tiempo desde que inició la tarea hasta hoy
export function calculateTimeSpent(start?: string): string {
  if (!start) return "-"
  const startDate = new Date(start)
  const now = new Date()
  const diff = Math.ceil((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
  return `${diff}d`
}