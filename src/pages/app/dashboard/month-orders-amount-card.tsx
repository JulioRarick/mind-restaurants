import { ChefHat } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
        <ChefHat className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">187</span>
        <p className="text-sm text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">+ 08%</span>{' '}
          em relação ao mês anterior
        </p>
      </CardContent>
    </Card>
  )
}
