import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { App } from './App'

describe('Portfolio', () => {
  beforeEach(() => {
    window.location.hash = ''
  })

  it('renders the professional positioning and projects', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /olá, eu sou lindembergue frank/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /chamados ipem\/rn/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /navegação principal/i })).toBeInTheDocument()
  })

  it('opens the compact navigation', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /abrir menu/i })
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('renders an individual case from the hash route', () => {
    window.location.hash = '#/cases/netwatch-rn'
    render(<App />)
    expect(screen.getByRole('heading', { name: 'NetWatch RN', level: 1 })).toBeInTheDocument()
    expect(screen.getByText(/37 testes aprovados na CI/i)).toBeInTheDocument()
  })
})
