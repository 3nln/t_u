import { widgetTypes } from '@/constants/constants'
import { DragEvent, useState } from 'react'
import { Layout } from 'react-grid-layout'
import { Sidebar } from './_components/Sidebar'
import { Header } from '@/components/custom/Header'
import { DashboardGrid } from './_components/DashboardGrid'

interface Widget {
  id: string
  type: keyof typeof widgetTypes
}

const initialLayout: Layout[] = [
  { i: 'a', x: 0, y: 0, w: 4, h: 2 },
  { i: 'b', x: 4, y: 0, w: 4, h: 2 },
  { i: 'c', x: 8, y: 0, w: 4, h: 2 },
]

export default function AdminDashboardBuilder() {
  const [layout, setLayout] = useState<Layout[]>(initialLayout)
  const [items, setItems] = useState<Widget[]>([])
  const [selectedWidgetId, setSelectedWidgetId] = useState<string | null>(null)

  const addItem = (type: keyof typeof widgetTypes, x = (items.length * 2) % 12, y = Infinity) => {
    const newKey = `item-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
    const newItem: Layout = {
      i: newKey,
      x,
      y,
      w: type === 'table' ? 6 : 4,
      h: type === 'table' ? 3 : 2,
    }
    setLayout([...layout, newItem])
    setItems([...items, { id: newKey, type }])
  }

  const deleteItem = (id: string, e: React.MouseEvent) => {
    setItems(items.filter((item) => item.id !== id))
    setLayout(layout.filter((item) => item.i !== id))
    setSelectedWidgetId(null)
  }

  const duplicateItem = (id: string, e: React.MouseEvent) => {
    const itemToDuplicate = items.find((item) => item.id === id)
    const layoutToDuplicate = layout.find((item) => item.i === id)
    if (itemToDuplicate && layoutToDuplicate) {
      const newKey = `item-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
      const newItem: Layout = {
        ...layoutToDuplicate,
        i: newKey,
        x: (layoutToDuplicate.x + 2) % 12,
        y: layoutToDuplicate.y,
      }
      setLayout([...layout, newItem])
      setItems([...items, { id: newKey, type: itemToDuplicate.type }])
    }
    setSelectedWidgetId(null)
  }

  const handleDragStart = (e: DragEvent, type: keyof typeof widgetTypes) => {
    e.dataTransfer.setData('widgetType', type)
  }

  const handleDrop = (e: DragEvent, x: number, y: number) => {
    const type = e.dataTransfer.getData('widgetType') as keyof typeof widgetTypes
    if (type) {
      addItem(type, x, y)
    }
  }

  return (
    <div className="flex h-screen">
      <Sidebar onAddItem={addItem} onDragStart={handleDragStart as any} />
      
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
  )
}