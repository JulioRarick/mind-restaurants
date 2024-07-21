import { http, HttpResponse } from 'msw'

import { GetMonthOrdersAmountResponse } from '../get-mouth-orders-amout'

export const getMonthOrdersAmountMockMSW = http.get<
  never,
  never,
  GetMonthOrdersAmountResponse
>('/metrics/month-orders-amount', () => {
  return HttpResponse.json({
    amount: 5344,
    diffFromLastMonth: 20,
  })
})
