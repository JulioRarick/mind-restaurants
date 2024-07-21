import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMockMSW = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    {
      product: 'Coca-Cola',
      amount: 100,
    },
    {
      product: 'Pepsi',
      amount: 1627,
    },
    {
      product: 'Fanta',
      amount: 1262,
    },
    {
      product: 'Sprite',
      amount: 2832,
    },
    {
      product: 'Guaraná',
      amount: 2666,
    },
    {
      product: 'Água',
      amount: 1234,
    },
    {
      product: 'Suco',
      amount: 322,
    },
  ])
})
