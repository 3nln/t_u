import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { chartData } from '@/constants/constants'
import {
  CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
  } from 'recharts'
  
  export function LineChartWidget() {
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
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line type="monotone" dataKey="value" stroke="var(--chart-2)" />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    )
  }