import {
    ImageIcon,
    BarChart as BarChartIcon,
    VideoIcon,
    MusicIcon,
    Globe2,
    Table2,
    LineChart as LineChartIcon,
    AreaChart as AreaChartIcon,
    PieChart as PieChartIcon,
  } from 'lucide-react'
  
  export const widgetTypes = {
    image: { icon: ImageIcon, label: 'Image' },
    table: { icon: Table2, label: 'Table' },
    barChart: { icon: BarChartIcon, label: 'Bar Chart' },
    lineChart: { icon: LineChartIcon, label: 'Line Chart' },
    areaChart: { icon: AreaChartIcon, label: 'Area Chart' },
    pieChart: { icon: PieChartIcon, label: 'Pie Chart' },
    video: { icon: VideoIcon, label: 'Video' },
    audio: { icon: MusicIcon, label: 'Audio' },
    iframe: { icon: Globe2, label: 'Iframe' },
  }
  
  // Sample data for table
  export const tableData = [
    { id: '1', name: 'Odamov Odamjon', email: 'neo@odam.com', role: 'Admin' },
    { id: '2', name: 'Insonbek Odamov', email: 'neo@odam.com', role: 'User' },
    { id: '3', name: 'Mixenner', email: 'neo@odam.com', role: 'Editor' },
  ]
  
  // Sample data for charts
  export const chartData = [
    { month: 'Jan', value: 400 },
    { month: 'Feb', value: 300 },
    { month: 'Mar', value: 500 },
    { month: 'Apr', value: 200 },
    { month: 'May', value: 600 },
  ]
  
  // Sample data for pie chart
  export const pieChartData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 200 },
  ]
  