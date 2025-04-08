'use client'

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Sidebar from "./sidebar"

export default function MobileSidebar() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger className="p-2">
          <Menu className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  )
}