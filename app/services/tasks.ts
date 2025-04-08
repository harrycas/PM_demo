'use client'

import { supabase } from "@/lib/supabase-client"
import { Task, TaskDependency, TaskUI, RawTaskWithAssignees } from "@/app/types/task"
import { mapRawTaskToUI } from "@/lib/mappers"

// ✅ Crear una nueva tarea
export async function createTask(task: Partial<Task>): Promise<Task> {
  const { data, error } = await supabase
    .from("tasks")
    .insert(task)
    .select()
    .single()

  if (error) throw new Error(error.message)
  return data
}

// ✅ Obtener todas las tareas de un proyecto y enriquecerlas con asignados
export async function getTasksUIByProject(projectId: string): Promise<TaskUI[]> {
  const { data, error } = await supabase
    .from("tasks")
    .select(`
      *,
      task_assignees (
        assignees (
          name,
          avatar
        )
      )
    `)
    .eq("project_id", projectId)

  if (error) throw new Error(error.message)

  const rawTasks = data as RawTaskWithAssignees[]
  return rawTasks.map(mapRawTaskToUI)
}

// ✅ Obtener una tarea por ID
export async function getTaskById(taskId: string): Promise<Task | null> {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("id", taskId)
    .single()

  if (error) return null
  return data
}

// ✅ Actualizar tarea
export async function updateTask(task: Partial<Task>): Promise<Task> {
  const { id, ...updates } = task
  const { data, error } = await supabase
    .from("tasks")
    .update(updates)
    .eq("id", id)
    .select()
    .single()

  if (error) throw new Error(error.message)
  return data
}

// ✅ Eliminar tarea
export async function deleteTask(taskId: string): Promise<void> {
  const { error } = await supabase
    .from("tasks")
    .delete()
    .eq("id", taskId)

  if (error) throw new Error(error.message)
}

// ✅ Asignar un usuario a una tarea
export async function assignUserToTask(taskId: string, assigneeId: string) {
  const { error } = await supabase
    .from("task_assignees")
    .insert({ task_id: taskId, assignee_id: assigneeId })

  if (error) throw new Error(error.message)
}

// ✅ Remover un usuario de una tarea
export async function removeUserFromTask(taskId: string, assigneeId: string) {
  const { error } = await supabase
    .from("task_assignees")
    .delete()
    .eq("task_id", taskId)
    .eq("assignee_id", assigneeId)

  if (error) throw new Error(error.message)
}

// ✅ Obtener todas las dependencias de una tarea
export async function getDependenciesForTask(taskId: string): Promise<TaskDependency[]> {
  const { data, error } = await supabase
    .from("task_dependencies")
    .select("*")
    .eq("task_id", taskId)

  if (error) throw new Error(error.message)
  return data
}

// ✅ Agregar dependencia entre tareas
export async function addDependency(
  taskId: string,
  dependsOnTaskId: string,
  dependencyType: string
): Promise<TaskDependency> {
  const { data, error } = await supabase
    .from("task_dependencies")
    .insert({
      task_id: taskId,
      depends_on_task_id: dependsOnTaskId,
      dependency_type: dependencyType
    })
    .select()
    .single()

  if (error) throw new Error(error.message)
  return data
}

// ✅ Eliminar dependencia
export async function removeDependency(taskId: string, dependsOnTaskId: string): Promise<void> {
  const { error } = await supabase
    .from("task_dependencies")
    .delete()
    .eq("task_id", taskId)
    .eq("depends_on_task_id", dependsOnTaskId)

  if (error) throw new Error(error.message)
}
