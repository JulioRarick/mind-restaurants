import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { approveOrderMockMSW } from './approve-order-mock'
import { cancelOrderMockMSW } from './cancel-order-mock'
import { deliverOrderMockMSW } from './deliver-order-mock'
import { dispatchOrderMockMSW } from './dispatch-order-mock'
import { getDailyRevenueInPeriodMockMSW } from './get-daily-revenue-mock'
import { getDayOrdersAmountMockMSW } from './get-day-orders-amount-mock'
import { getManagedRestaurantMockMSW } from './get-managed-restaurant-mock'
import { getMonthCanceledOrdersAmountMockMSW } from './get-month-canceled-amount-mock'
import { getMonthOrdersAmountMockMSW } from './get-month-orders-amount-mock'
import { getMonthRevenueMockMSW } from './get-month-revenue-mock'
import { getOrderDetailsMockMSW } from './get-order-details-mock'
import { getOrdersMockMSW } from './get-orders-mock'
import { getPopularProductsMockMSW } from './get-popular-products-mock'
import { getProfileMockMSW } from './get-profile-mock'
import { registerRestaurantMockMSW } from './register-restaurant-mock'
import { signInMockMSW } from './sign-in-mock'
import { updateProfileMockMSW } from './update-profile-mock'

const workerSetup = setupWorker(
  signInMockMSW,
  registerRestaurantMockMSW,
  getDayOrdersAmountMockMSW,
  getMonthOrdersAmountMockMSW,
  getMonthCanceledOrdersAmountMockMSW,
  getMonthRevenueMockMSW,
  getDailyRevenueInPeriodMockMSW,
  getPopularProductsMockMSW,
  getProfileMockMSW,
  getProfileMockMSW,
  getManagedRestaurantMockMSW,
  updateProfileMockMSW,
  getOrdersMockMSW,
  getOrderDetailsMockMSW,
  approveOrderMockMSW,
  cancelOrderMockMSW,
  deliverOrderMockMSW,
  dispatchOrderMockMSW,
)

export async function startWorkerMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await workerSetup.start()
}
