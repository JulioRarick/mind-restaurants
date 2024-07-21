import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMockMSW = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: '1',
      name: 'Julio Rarick',
      email: 'juliorarick@example.com',
      phone: '11999999999',
      role: 'manager',
      createdAt: new Date('2021-07-01T00:00:00Z'),
      updatedAt: new Date('2021-07-01T00:00:00Z'),
    })
  },
)
