import { expect, test } from '@playwright/test'

test('show on the dashboard day orders amount state', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('205', { exact: true })).toBeVisible()
  await expect(page.getByText('-15 % em relação a ontem')).toBeVisible()
})

test('show on the dashboard month orders amount state', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('5.344', { exact: true })).toBeVisible()
  await expect(
    page.getByText('+ 20 % em relação ao mês anterior'),
  ).toBeVisible()
})

test('show on the dashboard month canceled orders amount state', async ({
  page,
}) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('300', { exact: true })).toBeVisible()
  await expect(page.getByText('+ 3 % em relação ao mês anterior')).toBeVisible()
})

test('show on the dashboard month revenue state', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('R$ 14.978,00')).toBeVisible()
  await expect(page.getByText('+ 33% em relação ao mês anterior')).toBeVisible()
})
