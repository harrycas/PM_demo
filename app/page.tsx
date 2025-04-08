'use client'

import { Button } from '@/components/ui/button'
import { Plus, Search, Filter, Settings } from 'lucide-react'

import Sidebar from './components/layout/sidebar'
import ProjectHeader from './components/layout/project-header'
import { ProjectTabs } from './components/layout/project-tabs'
import { TaskTable } from './components/task/task-table'

export default function ProjectPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <ProjectHeader />
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">Tareas</h2>
          <div className="flex items-center gap-2 flex-wrap">
            <Button variant="outline" className="gap-2">
              <Search className="h-4 w-4" />
              Buscar
            </Button>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filtrar
            </Button>
            <Button variant="outline" className="gap-2">
              <Settings className="h-4 w-4" />
              Opciones
            </Button>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Agregar tarea
            </Button>
          </div>
        </div>
        <ProjectTabs />
        <div className="p-6 overflow-auto">
          <TaskTable />
        </div>
      </div>
    </div>
  )
}
