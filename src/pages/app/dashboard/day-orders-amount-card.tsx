import { useQuery } from '@tanstack/react-query'
import { CookingPot } from 'lucide-react'

import { getDayOrdersAmount } from '@/api/get-day-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DayOrdersAmountCard() {
  const { data: dayOrdersAmountValue } = useQuery({
    queryKey: ['metrics', 'day-orders-amount'],
    queryFn: getDayOrdersAmount,
  })
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <CookingPot className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {dayOrdersAmountValue && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {dayOrdersAmountValue.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-sm text-muted-foreground">
              {dayOrdersAmountValue.diffFromYesterday >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    + {dayOrdersAmountValue.diffFromYesterday} %
                  </span>{' '}
                  em relação a ontem.
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {dayOrdersAmountValue.diffFromYesterday} %
                  </span>{' '}
                  em relação a ontem.
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
