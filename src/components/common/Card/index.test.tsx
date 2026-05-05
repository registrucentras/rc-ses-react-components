import { ThemeProvider } from '@mui/material/styles'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { type ReactElement } from 'react'
import { describe, expect, test } from 'vitest'

import theme from '../../../theme/light'
import RcSesCard from './index'

const renderCard = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('RcSesCard', () => {
  test('renders title, description, children, and actions', () => {
    renderCard(
      <RcSesCard
        title='Card title'
        description='Card description'
        headerAction={<button type='button'>Edit</button>}
        leadingActions={<button type='button'>Back</button>}
        trailingActions={<button type='button'>Continue</button>}
      >
        <div>Card content</div>
      </RcSesCard>,
    )

    expect(screen.getByText('Card title')).toBeInTheDocument()
    expect(screen.getByText('Card description')).toBeInTheDocument()
    expect(screen.getByText('Card content')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Edit' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Continue' })).toBeInTheDocument()
  })

  test('omits optional description and actions when they are not provided', () => {
    renderCard(
      <RcSesCard title='Only title'>
        <div>Only content</div>
      </RcSesCard>,
    )

    expect(screen.getByText('Only title')).toBeInTheDocument()
    expect(screen.getByText('Only content')).toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  test('forwards slot props to internal sections', () => {
    const { container } = renderCard(
      <RcSesCard
        title='Slotted title'
        description='Slotted description'
        headerAction={<button type='button'>Edit</button>}
        leadingActions={<button type='button'>Leading</button>}
        trailingActions={<button type='button'>Trailing</button>}
        slotProps={{
          actions: { className: 'actions-slot' },
          content: { className: 'content-slot' },
          description: { className: 'description-slot' },
          header: { className: 'header-slot' },
          headerAction: { className: 'header-action-slot' },
          leadingActions: { className: 'leading-actions-slot' },
          title: { className: 'title-slot' },
          trailingActions: { className: 'trailing-actions-slot' },
        }}
      >
        <div>Slotted content</div>
      </RcSesCard>,
    )

    expect(container.querySelector('.header-slot')).toBeInTheDocument()
    expect(container.querySelector('.header-action-slot')).toBeInTheDocument()
    expect(container.querySelector('.title-slot')).toBeInTheDocument()
    expect(container.querySelector('.description-slot')).toBeInTheDocument()
    expect(container.querySelector('.content-slot')).toBeInTheDocument()
    expect(container.querySelector('.actions-slot')).toBeInTheDocument()
    expect(container.querySelector('.leading-actions-slot')).toBeInTheDocument()
    expect(container.querySelector('.trailing-actions-slot')).toBeInTheDocument()
  })

  test('forwards testIds to internal sections', () => {
    renderCard(
      <RcSesCard
        title='Test id title'
        description='Test id description'
        headerAction={<button type='button'>Edit</button>}
        leadingActions={<button type='button'>Leading</button>}
        trailingActions={<button type='button'>Trailing</button>}
        testIds={{
          root: 'card-root',
          header: 'card-header',
          headerAction: 'card-header-action',
          title: 'card-title',
          description: 'card-description',
          content: 'card-content',
          actions: 'card-actions',
          leadingActions: 'card-leading-actions',
          trailingActions: 'card-trailing-actions',
        }}
      >
        <div>Test id content</div>
      </RcSesCard>,
    )

    expect(screen.getByTestId('card-root')).toBeInTheDocument()
    expect(screen.getByTestId('card-header')).toBeInTheDocument()
    expect(screen.getByTestId('card-header-action')).toBeInTheDocument()
    expect(screen.getByTestId('card-title')).toBeInTheDocument()
    expect(screen.getByTestId('card-description')).toBeInTheDocument()
    expect(screen.getByTestId('card-content')).toBeInTheDocument()
    expect(screen.getByTestId('card-actions')).toBeInTheDocument()
    expect(screen.getByTestId('card-leading-actions')).toBeInTheDocument()
    expect(screen.getByTestId('card-trailing-actions')).toBeInTheDocument()
  })

  test('accepts a plain sx object on the card root', () => {
    const { container } = renderCard(
      <RcSesCard title='Root sx object' sx={{ borderStyle: 'dashed' }}>
        <div>Content</div>
      </RcSesCard>,
    )

    expect(container.querySelector('.MuiCard-root')).toBeInTheDocument()
    expect(screen.getByText('Root sx object')).toBeInTheDocument()
  })

  test('accepts an sx array in slot props', () => {
    const { container } = renderCard(
      <RcSesCard
        title='Array sx'
        slotProps={{
          title: {
            className: 'array-sx-title',
            sx: [{ letterSpacing: '0.01em' }, { textTransform: 'uppercase' }],
          },
        }}
      >
        <div>Content</div>
      </RcSesCard>,
    )

    expect(container.querySelector('.array-sx-title')).toBeInTheDocument()
    expect(screen.getByText('Array sx')).toBeInTheDocument()
  })

  test('renders image slot when provided', () => {
    renderCard(
      <RcSesCard title='Card with image' image={<img src='test.png' alt='test' />}>
        <div>Content</div>
      </RcSesCard>,
    )

    expect(screen.getByRole('img', { name: 'test' })).toBeInTheDocument()
  })

  test('omits image slot when not provided', () => {
    const { container } = renderCard(
      <RcSesCard title='No image' testIds={{ image: 'card-image' }}>
        <div>Content</div>
      </RcSesCard>,
    )

    expect(container.querySelector('[data-testid="card-image"]')).not.toBeInTheDocument()
  })

  test('forwards image slot props and testId', () => {
    renderCard(
      <RcSesCard
        title='Image slot props'
        image={<img src='test.png' alt='test' />}
        testIds={{ image: 'card-image' }}
        slotProps={{ image: { className: 'image-slot' } }}
      >
        <div>Content</div>
      </RcSesCard>,
    )

    expect(screen.getByTestId('card-image')).toBeInTheDocument()
    expect(screen.getByTestId('card-image')).toHaveClass('image-slot')
  })
})
