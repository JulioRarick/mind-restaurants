import { expect, test } from '@playwright/test'

test('sign up success register account', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Mind Pizza')
  await page.getByLabel('Seu nome').fill('Julio Rarick')
  await page.getByLabel('Seu e-mail').fill('juliorarick@example.com')
  await page.getByLabel('Seu telefone').fill('61999991111')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toastSignUp = page.getByText('Restaurante cadastrado com sucesso!')
  expect(toastSignUp).toBeVisible()
})

test('sign up unsuccess register account', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Mind Super Pizza')
  await page.getByLabel('Seu nome').fill('Julio Rarick')
  await page.getByLabel('Seu e-mail').fill('juliorarick@example.com')
  await page.getByLabel('Seu telefone').fill('61999991111')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toastSignUp = page.getByText(
    'Erro ao cadastrar restaurante, tente novamente',
  )
  expect(toastSignUp).toBeVisible()
})

test('navigate to sign in restaurant page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  const navigateToSignInPage = page.url()

  expect(navigateToSignInPage).toContain('/sign-in')
})
