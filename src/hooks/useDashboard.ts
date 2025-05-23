import { useState, useEffect, DragEvent } from 'react'
import { Layout } from 'react-grid-layout'
import { widgetTypes } from '@/constants/constants'
import { toast } from "sonner"

export interface Widget {
  id: string
  type: keyof typeof widgetTypes
}

const STORAGE_KEY = 'dashboard-layout'

export function useDashboard() {
  const [layout, setLayout] = useState<Layout[]>([])
  const [items, setItems] = useState<Widget[]>([])
  const [selectedWidgetId, setSelectedWidgetId] = useState<string | null>(null)

  // Load layout from localStorage on initial render
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY)

    if (savedData) {
      try {
        const { savedLayout, savedItems } = JSON.parse(savedData)
        setLayout(savedLayout)
        setItems(savedItems)
      } catch (error) {
        console.error('Error loading dashboard layout:', error)
        setLayout([])
        setItems([])
      }
    } else {
      // If no saved data, start with an empty dashboard
      setLayout([])
      setItems([])
    }
  }, [])

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

  const deleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
    setLayout(layout.filter((item) => item.i !== id))
    setSelectedWidgetId(null)
  }

  const duplicateItem = (id: string) => {
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

  const saveLayout = () => {
    const dataToSave = {
      savedLayout: layout,
      savedItems: items
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave))
    toast.success("Dashboard saved", {
      description: "Your dashboard layout has been saved successfully."
    })
  }

  const resetLayout = () => {
    setLayout([])
    setItems([])
    localStorage.removeItem(STORAGE_KEY)
    toast.info("Dashboard reset", {
      description: "Your dashboard has been reset to empty state."
    })
  }

  return {
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
  }
}