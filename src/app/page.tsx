import { Button } from "@/components/ui/button"
import { RotateCcw, Save } from "lucide-react"
import { DashboardGrid } from './_components/DashboardGrid'
import { Sidebar } from './_components/Sidebar'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useDashboard } from "@/hooks/useDashboard"

export default function AdminDashboardBuilder() {
  const {
    layout,
    items,
    selectedWidgetId,
    setSelectedWidgetId,
    setLayout,
    addItem,
    deleteItem,
    duplicateItem,
    handleDragStart,
    handleDrop,
    saveLayout,
    resetLayout
  } = useDashboard()

  return (
    <div className="flex h-screen">
      <Sidebar onAddItem={addItem} onDragStart={handleDragStart as any} />
      <div className="flex flex-col flex-1">
        <div className="flex gap-2 fixed bottom-20 right-5 md:bottom-10 md:right-10 z-50">
          <Button
            variant="outline"
            size="sm"
            onClick={resetLayout}
            className="flex items-center gap-1"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <RotateCcw className="h-4 w-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Reset storage</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={saveLayout}
            className="flex items-center gap-1"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Save className="h-4 w-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Save</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Button>
        </div>
        <DashboardGrid
          items={items}
          layout={layout}
          selectedWidgetId={selectedWidgetId}
          setSelectedWidgetId={setSelectedWidgetId}
          onLayoutChange={setLayout}
          onDeleteItem={deleteItem}
          onDuplicateItem={duplicateItem}
          onDrop={handleDrop as any}
        />
      </div>
    </div>
  )
}