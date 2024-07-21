import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMockMSW = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: '1',
    name: 'Mind Pizza',
    description: 'The best pizza in the world',
    managerId: '1',
    createdAt: new Date('2021-07-01T00:00:00Z'),
    updatedAt: new Date('2021-07-01T00:00:00Z'),
  })
})
