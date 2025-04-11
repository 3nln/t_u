import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { chartData } from '@/constants/constants'
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    XAxis,
    YAxis,
  } from 'recharts'
  
  export function AreaChartWidget() {
    return (
      <ChartContainer
        config={{
          value: {
            label: 'Value',
          },
        }}
        className="h-full w-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--chart-2))" /> 
            <XAxis dataKey="month" stroke="hsl(var(--chart-2))" /> {/* Updated axis color */}
            <YAxis stroke="hsl(var(--chart-2))" /> {/* Updated axis color */}
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="hsl(var(--chart-2))" // Updated stroke color
              fill="hsl(var(--chart-2))" // Updated fill color
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    )
  }