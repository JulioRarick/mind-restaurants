import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  { date: '2021-01-01', revenue: 400 },
  { date: '2021-01-02', revenue: 3000 },
  { date: '2021-01-03', revenue: 2000 },
  { date: '2021-01-04', revenue: 278 },
  { date: '2021-01-05', revenue: 1890 },
  { date: '2021-01-06', revenue: 2390 },
  { date: '2021-01-07', revenue: 3490 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart style={{ fontSize: 12 }} data={data}>
            <Line
              type="linear"
              strokeWidth={3}
              dataKey="revenue"
              stroke={colors.yellow[700]}
            />
            <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={90}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />
            <Tooltip />
            <CartesianGrid vertical={false} className="stroke-muted" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
