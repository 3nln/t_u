import {
    Pie,
    PieChart,
    ResponsiveContainer,
  } from 'recharts'
  import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { pieChartData } from '@/constants/constants'
  
  export function PieChartWidget() {
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
          <PieChart>
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius="80%"
              fill="var(--chart-2)"
              label
            />
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
    )
  }