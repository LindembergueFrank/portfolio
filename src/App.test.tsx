import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('presents the main portfolio sections', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /Construindo software/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Trabalho que gera/i })).toBeInTheDocument()
    expect(screen.getByText('NetWatch RN')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /Navegação principal/i })).toBeInTheDocument()
  })
})
