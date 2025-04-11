import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { widgetTypes } from '@/constants/constants'
import { Copy, Trash2 } from 'lucide-react'
import { ReactNode } from 'react'

interface WidgetWrapperProps {
  id: string
  type: keyof typeof widgetTypes
  isSelected: boolean
  onSelect: (id: string, e: React.MouseEvent) => void
  onDuplicate: (id: string, e: React.MouseEvent) => void
  onDelete: (id: string, e: React.MouseEvent) => void
  children: ReactNode
}

export function WidgetWrapper({
  id,
  type,
  isSelected,
  onSelect,
  onDuplicate,
  onDelete,
  children,
}: WidgetWrapperProps) {
  return (
    <Card
      className={`relative h-full ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
      onClick={(e) => onSelect(id, e)}
    >
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{widgetTypes[type]?.label || 'Unknown'}</CardTitle>
        <div className="flex gap-2" onMouseDown={(e) => e.stopPropagation()}>
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
              onDuplicate(id, e)
            }}
            title="Duplicate"
            draggable={false}
          >
            <Copy className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
              onDelete(id, e)
            }}
            title="Delete"
            draggable={false}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="h-[calc(100%-4rem)] w-full">{children}</CardContent>
    </Card>
  )
}