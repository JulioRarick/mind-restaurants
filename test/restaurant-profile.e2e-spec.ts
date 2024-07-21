import { expect, test } from '@playwright/test'

test('restaurant profile update in success', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Mind Pizza' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da Loja' }).click()
  await page.getByLabel('Nome').fill('Mind Super Pizza')
  await page.getByLabel('Descrição').fill('The best pizza in the planet')
  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const successToast = await page.getByText('Perfil atualizado com sucesso!')
  await expect(successToast).toBeVisible()

  await page.getByRole('button', { name: 'Cancelar' }).click()

  await expect(
    page.getByRole('button', { name: 'Mind Super Pizza' }),
  ).toBeVisible()
})

test('restaurant profile update in unsuccess', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Mind Pizza' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da Loja' }).click()
  await page.getByLabel('Nome').fill('Mind Sushi')
  await page.getByLabel('Descrição').fill('The best sushi in the planet')
  await page.getByRole('button', { name: 'Salvar' }).click()

  const unsuccessToast = await page.getByText(
    'Erro ao atualizar perfil, tente novamente.',
  )

  await expect(unsuccessToast).toBeVisible()
})
