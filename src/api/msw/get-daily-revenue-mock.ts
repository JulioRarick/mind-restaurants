import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMockMSW = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    {
      date: '2021-10-01',
      receipt: 100000,
    },
    {
      date: '2021-10-02',
      receipt: 162700,
    },
    {
      date: '2021-10-03',
      receipt: 126200,
    },
    {
      date: '2021-10-04',
      receipt: 283200,
    },
    {
      date: '2021-10-05',
      receipt: 266600,
    },
    {
      date: '2021-10-06',
      receipt: 123400,
    },
    {
      date: '2021-10-07',
      receipt: 32200,
    },
  ])
})
