// @ts-nocheck
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('app testing', () => {
  test('renders learn react link', () => {
    render(<App />)
    const header = screen.getByText(/карточка пользователя/i)
    // const btn = screen.getByRole('button')
    const input = screen.getByPlaceholderText('Добавить комментарий...')
    expect(header).toBeInTheDocument()
    expect(header).toHaveStyle({ color: 'green' })
    // expect(btn).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })

  test('using find method', async () => {
    render(<App />)
    const info = await screen.findByTestId('h4-id')
    expect(info).toBeInTheDocument()
  })

  test('testing detail btn toogle', async () => {
    render(<App />)
    const btn = screen.getByTestId('btn-toggle')
    expect(screen.queryByTestId('block-toggle')).toBeNull()
    fireEvent.click(btn)
    expect(screen.queryByTestId('block-toggle')).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.queryByTestId('block-toggle')).toBeNull()
  })
  test('testing input element', async () => {
    render(<App />)
    const input = screen.getByTestId('input-elem')
    expect(screen.queryByTestId('value-elem')).toContainHTML('')
    fireEvent.input(input, { target: { value: 'qwert' } })
    expect(screen.queryByTestId('value-elem')).toContainHTML('qwert')
  })
})
