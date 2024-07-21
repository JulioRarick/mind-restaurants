import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMockMSW = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'Julio César',
      phone: '11999999999',
      email: 'juliocesar@example.com',
    },
    createdAt: new Date().toISOString(),
    status: 'delivered',
    orderItems: [
      {
        id: 'order-item-1',
        product: {
          name: 'Pizza Calabresa',
        },
        quantity: 2,
        priceInCents: 5000,
      },
      {
        id: 'order-item-2',
        product: {
          name: 'Coca-Cola',
        },
        priceInCents: 590,
        quantity: 2,
      },
    ],
    totalInCents: 11180,
  })
})
