'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'board', label: 'Board' },
  { id: 'files', label: 'Files' }
]

export function ProjectTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="w-full grid grid-cols-1 sm:grid-cols-3">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="overview">Overview content</TabsContent>
      <TabsContent value="board">Board content</TabsContent>
      <TabsContent value="files">Files content</TabsContent>
    </Tabs>
  )
}
