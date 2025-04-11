import { useState, useEffect } from "react"
import { widgetTypes } from "@/constants/constants"
import { AreaChartWidget } from "./widgets/AreaChartWidget"
import { AudioWidget } from "./widgets/AudioWidget"
import { BarChartWidget } from "./widgets/BarChartWidget"
import { IframeWidget } from "./widgets/IframeWidget"
import { ImageWidget } from "./widgets/ImageWidget"
import { LineChartWidget } from "./widgets/LineChartWidget"
import { PieChartWidget } from "./widgets/PieChartWidget"
import { TableWidget } from "./widgets/TableWidget"
import { VideoWidget } from "./widgets/VideoWidget"
import { Skeleton } from "@/components/ui/skeleton" 

interface WidgetContentProps {
  type: keyof typeof widgetTypes
}

export function WidgetContent({ type }: WidgetContentProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4">
        <Skeleton className="h-48 w-full" />
      </div>
    )
  }

  switch (type) {
    case 'image':
      return <ImageWidget />
    case 'table':
      return <TableWidget />
    case 'barChart':
      return <BarChartWidget />
    case 'lineChart':
      return <LineChartWidget />
    case 'areaChart':
      return <AreaChartWidget />
    case 'pieChart':
      return <PieChartWidget />
    case 'video':
      return <VideoWidget />
    case 'audio':
      return <AudioWidget />
    case 'iframe':
      return <IframeWidget />
    default:
      return <div>Unknown Widget</div>
  }
}