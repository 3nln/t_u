import { widgetTypes } from '@/constants/constants'
import { useRef, useState } from 'react'
import { Layout, Responsive, WidthProvider } from 'react-grid-layout'
import { WidgetWrapper } from './WidgetWrapper'
import { WidgetContent } from './WidgetContent'
import {  Inbox } from 'lucide-react'

const ResponsiveGridLayout = WidthProvider(Responsive)

interface Widget {
  id: string
  type: keyof typeof widgetTypes
}

interface DashboardGridProps {
  items: Widget[]
  layout: Layout[]
  selectedWidgetId: string | null
  setSelectedWidgetId: (id: string | null) => void
  onLayoutChange: (newLayout: Layout[]) => void
  onDeleteItem: (id: string, e: React.MouseEvent) => void
  onDuplicateItem: (id: string, e: React.MouseEvent) => void
  onDrop: (e: DragEvent, x: number, y: number) => void
}

export function DashboardGrid({
  items,
  layout,
  selectedWidgetId,
  setSelectedWidgetId,
  onLayoutChange,
  onDeleteItem,
  onDuplicateItem,
  onDrop,
}: DashboardGridProps) {
  const gridRef = useRef<HTMLDivElement | null>(null)
  const [, setForceRender] = useState({}) // State to force re-render

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    const type = e?.dataTransfer?.getData('widgetType') as keyof typeof widgetTypes
    if (!type) return

    const gridRect = gridRef.current?.getBoundingClientRect()
    if (!gridRect) return

    const offsetX = e.clientX - gridRect.left
    const offsetY = e.clientY - gridRect.top

    const gridWidth = gridRect.width
    const colWidth = gridWidth / 12
    const x = Math.floor(offsetX / colWidth)
    const y = Math.floor(offsetY / 100)

    onDrop(e, Math.max(0, Math.min(x, 12 - 4)), y)
  }

  const handleResizeStop = () => {
    setForceRender({}) // Force re-render to ensure charts update to new container size
  }

  const handleWidgetClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedWidgetId(id)
  }

  return (
    <div
      className="p-6 flex-1 overflow-auto"
      onDrop={handleDrop as any}
      onDragOver={handleDragOver as any}
      ref={gridRef}
      onClick={() => setSelectedWidgetId(null)}
    >
      {items.length === 0 ? (
        <div className="h-full flex items-center justify-center">
          <div className="text-center text-gray-500">
          <Inbox size={100} className='mx-auto text-gray-700'/>
            <p className="text-lg">No widgets added yet</p>
            <p>Drag and drop widgets from the sidebar to start building your dashboard</p>
          </div>
        </div>
      ) : (
        <ResponsiveGridLayout
          className="layout"
          layouts={{ lg: layout }}
          onLayoutChange={onLayoutChange}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          isResizable
          isDraggable
          onResizeStop={handleResizeStop}
        >
          {items.map(({ id, type }) => (
            <div key={id}>
              <WidgetWrapper
                id={id}
                type={type}
                isSelected={selectedWidgetId === id}
                onSelect={handleWidgetClick}
                onDuplicate={onDuplicateItem}
                onDelete={onDeleteItem}
              >
                <WidgetContent type={type} />
              </WidgetWrapper>
            </div>
          ))}
        </ResponsiveGridLayout>
      )}
    </div>
  )
}