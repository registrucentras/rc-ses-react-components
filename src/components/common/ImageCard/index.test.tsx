import { ThemeProvider } from '@mui/material/styles'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { type ReactElement } from 'react'
import { describe, expect, test } from 'vitest'

import theme from '../../../theme/light'
import RcSesImageCard from './index'

const renderCard = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('RcSesImageCard', () => {
  test('renders image, title, description and button', () => {
    renderCard(
      <RcSesImageCard
        image={<img src='test.png' alt='icon' />}
        title='Heading text'
        description='Description text'
        button={<button type='button'>Click me</button>}
      />,
    )

    expect(screen.getByRole('img', { name: 'icon' })).toBeInTheDocument()
    expect(screen.getByText('Heading text')).toBeInTheDocument()
    expect(screen.getByText('Description text')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  test('renders without description and button', () => {
    renderCard(
      <RcSesImageCard image={<img src='test.png' alt='icon' />} title='Title only' />,
    )

    expect(screen.getByRole('img', { name: 'icon' })).toBeInTheDocument()
    expect(screen.getByText('Title only')).toBeInTheDocument()
    expect(screen.queryByText('Description text')).not.toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  test('hides button when not provided', () => {
    renderCard(
      <RcSesImageCard
        image={<img src='test.png' alt='icon' />}
        title='No button'
        description='Some description'
      />,
    )

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  test('forwards testIds to internal sections', () => {
    renderCard(
      <RcSesImageCard
        image={<img src='test.png' alt='icon' />}
        title='Test ids'
        description='Description'
        button={<button type='button'>Action</button>}
        testIds={{
          root: 'image-card-root',
          image: 'image-card-image',
          header: 'image-card-header',
          title: 'image-card-title',
          description: 'image-card-description',
          content: 'image-card-content',
        }}
      />,
    )

    expect(screen.getByTestId('image-card-root')).toBeInTheDocument()
    expect(screen.getByTestId('image-card-image')).toBeInTheDocument()
    expect(screen.getByTestId('image-card-header')).toBeInTheDocument()
    expect(screen.getByTestId('image-card-title')).toBeInTheDocument()
    expect(screen.getByTestId('image-card-description')).toBeInTheDocument()
    expect(screen.getByTestId('image-card-content')).toBeInTheDocument()
  })
})
