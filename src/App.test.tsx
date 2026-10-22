import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { App } from './App'

describe('Portfolio', () => {
  beforeEach(() => {
    window.location.hash = ''
  })

  it('renders the professional positioning, education and projects', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /olá, eu sou lindembergue frank/i })).toBeInTheDocument()
    expect(screen.getByText(/segurança digital · full stack cloud computing/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /chamados corporativos/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /api‑investimentos/i })).toBeInTheDocument()
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

  it('presents the verified API investment case and its public repository', () => {
    window.location.hash = '#/cases/api-investimentos'
    render(<App />)
    expect(screen.getByRole('heading', { name: 'API de Investimentos', level: 1 })).toBeInTheDocument()
    expect(screen.getByText(/59 testes backend, 2 benchmarks e 20 testes frontend/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /ver código no github/i })).toHaveAttribute(
      'href',
      'https://github.com/LindembergueFrank/API-Investimentos',
    )
  })
})
