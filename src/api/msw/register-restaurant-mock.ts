import { http, HttpResponse } from 'msw'

import { RegisterRestaurantBody } from '../sign-up'

export const registerRestaurantMockMSW = http.post<
  never,
  RegisterRestaurantBody
>('/restaurants', async ({ request }) => {
  const { restaurantName } = await request.json()

  if (restaurantName === 'Mind Pizza') {
    return new HttpResponse(null, {
      status: 200,
      headers: {
        'Set-Cookie': 'auth=sample-jwt',
      },
    })
  }

  return new HttpResponse(null, { status: 401 })
})
