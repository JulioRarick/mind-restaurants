import { expect, test } from '@playwright/test'

test('sign in success login', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu e-mail').fill('juliorarick@example.com')
  await page.getByRole('button', { name: 'Acessar Painel' }).click()

  const toastSignIn = page.getByText(
    'Enviamos um link de autenticação para o seu e-mail.',
  )
  expect(toastSignIn).toBeVisible()
})

test('sign in unsuccess login', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu e-mail').fill('wrong@example.com')
  await page.getByRole('button', { name: 'Acessar Painel' }).click()

  const toastSignIn = page.getByText('Credenciais inválidas, tente novamente.')
  expect(toastSignIn).toBeVisible()
})

test('navigate to create account restaurant', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Novo estabelecimento' }).click()

  const navigateToCreateAccount = page.url()

  expect(navigateToCreateAccount).toContain('/sign-up')
})
