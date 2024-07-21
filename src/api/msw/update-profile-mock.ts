import { http, HttpResponse } from 'msw'

import { UpdateProfileBody } from '../update-profile'

export const updateProfileMockMSW = http.put<never, UpdateProfileBody>(
  '/profile',
  async ({ request }) => {
    const { name, description } = await request.json()

    if (
      name === 'Mind Super Pizza' &&
      description === 'The best pizza in the planet'
    ) {
      return new HttpResponse(null, {
        status: 204,
      })
    }

    return new HttpResponse(null, { status: 400 })
  },
)
