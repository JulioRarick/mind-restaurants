import { useQuery } from '@tanstack/react-query'
import { subDays } from 'date-fns'
import { useMemo, useState } from 'react'
import { DateRange } from 'react-day-picker'
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

import { getDailyRevenueInPeriod } from '@/api/get-daily-revenue-in-period'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { DatePickerWithRange } from '@/components/ui/date-range-picker'
import { Label } from '@/components/ui/label'

export function RevenueChart() {
  const [stateDateRange, setStateDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  })

  const { data: dailyRevenueInPeriodData } = useQuery({
    queryKey: ['metrics', 'daily-revenue-in-period', stateDateRange],
    queryFn: () =>
      getDailyRevenueInPeriod({
        from: stateDateRange?.from,
        to: stateDateRange?.to,
      }),
  })

  const chartDataValues = useMemo(() => {
    return dailyRevenueInPeriodData?.map((item) => {
      return {
        date: item.date,
        receipt: item.receipt / 100,
      }
    })
  }, [dailyRevenueInPeriodData])

  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
        <div className="flex items-center gap-3">
          <Label>Período</Label>
          <DatePickerWithRange
            date={stateDateRange}
            onDateChange={setStateDateRange}
          />
        </div>
      </CardHeader>
      <CardContent>
        {chartDataValues && (
          <ResponsiveContainer width="100%" height={240}>
            <LineChart style={{ fontSize: 12 }} data={chartDataValues}>
              <Line
                type="linear"
                strokeWidth={3}
                dataKey="receipt"
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
        )}
      </CardContent>
    </Card>
  )
}
