import { http, HttpResponse } from 'msw'

import { GetOrdersResponse } from '../get-orders'

type FakeOrders = GetOrdersResponse['orders']
type FakeOrdersStatus = GetOrdersResponse['orders'][number]['status']

const fakeStatuses: FakeOrdersStatus[] = [
  'pending',
  'canceled',
  'processing',
  'delivering',
  'delivered',
]

const fakeOrders: FakeOrders = Array.from({ length: 100 }).map((_, index) => {
  return {
    orderId: `order-${index + 1}`,
    createdAt: new Date().toISOString(),
    status: fakeStatuses[index % fakeStatuses.length],
    customerName: `customer-${index + 1}`,
    total: 3900,
  }
})

export const getOrdersMockMSW = http.get<never, never, GetOrdersResponse>(
  '/orders',
  async ({ request }) => {
    const { searchParams } = new URL(request.url)

    const pageIndex = searchParams.get('pageIndex')
      ? Number(searchParams.get('pageIndex'))
      : 0

    const orderId = searchParams.get('orderId')
    const customerName = searchParams.get('customerName')
    const status = searchParams.get('status')

    let filteredFakeOrders = fakeOrders

    if (orderId) {
      filteredFakeOrders = filteredFakeOrders.filter((order) =>
        order.orderId.includes(orderId),
      )
    }
    if (customerName) {
      filteredFakeOrders = filteredFakeOrders.filter((order) =>
        order.customerName.includes(customerName),
      )
    }
    if (status) {
      filteredFakeOrders = filteredFakeOrders.filter(
        (order) => order.status === status,
      )
    }

    const paginatedFakeOrders = filteredFakeOrders.slice(
      pageIndex * 10,
      pageIndex * 10 + 10,
    )

    return HttpResponse.json({
      orders: paginatedFakeOrders,
      meta: {
        pageIndex,
        perPage: 10,
        totalCount: filteredFakeOrders.length,
      },
    })
  },
)
