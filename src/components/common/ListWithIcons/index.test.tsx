import { ThemeProvider } from '@mui/material/styles'
import { fireEvent, render, screen } from '@testing-library/react'
import { type ReactElement } from 'react'
import { describe, expect, test } from 'vitest'

import theme from '@/theme/light'

import ListWithIcons from './index'

const renderListWithIcons = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('ListWithIcons', () => {
  test('renders all provided items with their text and icon', () => {
    renderListWithIcons(
      <ListWithIcons
        items={[
          {
            icon: () => <span data-testid='first-icon'>I1</span>,
            text: 'First item',
            tooltip: 'First tooltip',
          },
          {
            icon: () => <span data-testid='second-icon'>I2</span>,
            text: 'Second item',
            tooltip: 'Second tooltip',
          },
        ]}
      />,
    )

    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
    expect(screen.getByText('First item')).toBeInTheDocument()
    expect(screen.getByText('Second item')).toBeInTheDocument()
    expect(screen.getByTestId('first-icon')).toBeInTheDocument()
    expect(screen.getByTestId('second-icon')).toBeInTheDocument()
  })

  test('renders one loading skeleton per item when isLoading is true', () => {
    const { container } = renderListWithIcons(
      <ListWithIcons isLoading skeletonCount={3} items={[]} />,
    )

    expect(container.querySelectorAll('.MuiSkeleton-root')).toHaveLength(3)
    expect(screen.queryByText('First item')).not.toBeInTheDocument()
  })

  test('shows tooltip content on hover when tooltip is provided', async () => {
    renderListWithIcons(
      <ListWithIcons
        items={[
          {
            text: 'Hover me',
            tooltip: 'Helpful tooltip text',
          },
        ]}
      />,
    )

    fireEvent.mouseOver(screen.getByText('Hover me'))

    expect(await screen.findByRole('tooltip')).toHaveTextContent('Helpful tooltip text')
  })
})
