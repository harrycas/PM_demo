'use client'

import { Home, Bell, Clock, Star, Folder, List, } from "lucide-react"
//import { cn } from "@/lib/utils"

export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 flex-col border-r bg-muted/40 px-4 py-6">
      <div className="mb-10 flex justify-center">
        <div className="h-10 w-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">
          in
        </div>
      </div>

      <nav className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Home className="h-4 w-4" /> Mis tareas
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Bell className="h-4 w-4" /> Notificaciones
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Clock className="h-4 w-4" /> TimeSheet
        </div>

        <div className="text-xs font-semibold text-muted-foreground pt-4">Espacios</div>

        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Star className="h-4 w-4" /> Tareas sin proyecto asignado
        </div>

        <div className="mt-2 space-y-1 pl-2">
          <div className="flex items-center gap-2 text-sm font-medium text-purple-700">
            <div className="h-5 w-5 rounded bg-purple-500 text-white text-xs font-bold flex items-center justify-center">
              E
            </div>
            Equipo de Desarrollo
          </div>

          <div className="ml-6 flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Folder className="h-4 w-4" /> Portafolio 1
          </div>

          <div className="ml-10 flex flex-col gap-1">
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <List className="h-4 w-4" /> Proyecto 1A
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <List className="h-4 w-4" /> Proyecto 1B
            </div>
          </div>
        </div>
      </nav>
    </aside>
  )
}
