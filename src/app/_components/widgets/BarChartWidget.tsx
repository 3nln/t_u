import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { chartData } from '@/constants/constants'
import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    XAxis,
    YAxis,
  } from 'recharts'
  
  export function BarChartWidget() {
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
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="value" fill="var(--chart-2)" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    )
  }
  