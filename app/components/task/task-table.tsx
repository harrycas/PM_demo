'use client'

import { useEffect, useState, Fragment } from 'react'
import { ChevronDown, ChevronRight, FileText } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { PriorityBadge } from './priority-badge'
import { StatusBadge } from './status-badge'
import { TaskUI } from '@/app/types/task'
import { getTasksUIByProject } from '@/app/services/tasks'

export function TaskTable() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})
  const [tasks, setTasks] = useState<TaskUI[]>([])

  const loadTasks = async () => {
    const data = await getTasksUIByProject("6ac5ffb5-d0b0-45c2-84fa-03f60c5332d6") // reemplaza con el id real
    setTasks(data)
  }

  useEffect(() => {
    loadTasks()
  }, [])

  const toggleExpand = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50 border-b">
            <TableHead className="w-[300px]">Nombre</TableHead>
            <TableHead>Inicio</TableHead>
            <TableHead>Vencimiento</TableHead>
            <TableHead>Duración</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Prioridad</TableHead>
            <TableHead>Asignado</TableHead>
            <TableHead>Tiempo empleado</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map(task => (
            <Fragment key={task.id}>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {task.children?.length ? (
                      <button onClick={() => toggleExpand(task.id)}>
                        {expanded[task.id] ? <ChevronDown /> : <ChevronRight />}
                      </button>
                    ) : <div className="w-5" />}
                    <FileText className="h-4 w-4 text-gray-400" />
                    <span className="font-medium">{task.name}</span>
                  </div>
                </TableCell>
                <TableCell>{task.start_date}</TableCell>
                <TableCell>{task.end_date}</TableCell>
                <TableCell>{task.duration}</TableCell>
                <TableCell><StatusBadge status={task.status} /></TableCell>
                <TableCell><PriorityBadge priority={task.priority} /></TableCell>
                <TableCell>
                  {task.assignees?.map(a => (
                    <div key={a.name} className="flex items-center gap-2">
                      <div className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                        {a.name[0]}
                      </div>
                      <span className="text-sm">{a.name}</span>
                    </div>
                  ))}
                </TableCell>
                <TableCell>{task.timeSpent}</TableCell>
              </TableRow>

              {/* Renderizar hijos si están expandidos */}
              {task.children && expanded[task.id] && task.children.map(child => (
                <TableRow key={child.id} className="bg-gray-50">
                  <TableCell className="pl-10">{child.name}</TableCell>
                  <TableCell>{child.start_date}</TableCell>
                  <TableCell>{child.end_date}</TableCell>
                  <TableCell>{child.duration}</TableCell>
                  <TableCell><StatusBadge status={child.status} /></TableCell>
                  <TableCell><PriorityBadge priority={child.priority} /></TableCell>
                  <TableCell>
                    {child.assignees?.map(a => (
                      <div key={a.name} className="flex items-center gap-2">
                        <div className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                          {a.name[0]}
                        </div>
                        <span className="text-sm">{a.name}</span>
                      </div>
                    ))}
                  </TableCell>
                  <TableCell>{child.timeSpent}</TableCell>
                </TableRow>
              ))}
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
