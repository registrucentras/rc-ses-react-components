import { ThemeProvider } from '@mui/material/styles'
import { fireEvent, render, screen } from '@testing-library/react'
import { type ReactElement } from 'react'
import { describe, expect, test } from 'vitest'

import theme from '@/theme/light'
import { secondary } from '@/theme/palette'

import ListWithIcons from '.'

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

  test('applies the DS Text token color for the given textColor tone name', () => {
    renderListWithIcons(
      <ListWithIcons
        items={[
          { text: 'Default text', textColor: 'default' },
          { text: 'Secondary text', textColor: 'secondary' },
          { text: 'Muted text', textColor: 'muted' },
          { text: 'Disabled text', textColor: 'disabled' },
          { text: 'Link text', textColor: 'link' },
          { text: 'Link hover text', textColor: 'linkHover' },
        ]}
      />,
    )

    expect(screen.getByText('Default text')).toBeInTheDocument()
    expect(screen.getByText('Secondary text')).toBeInTheDocument()
    expect(screen.getByText('Muted text')).toBeInTheDocument()
    expect(screen.getByText('Disabled text')).toBeInTheDocument()
    expect(screen.getByText('Link text')).toBeInTheDocument()
    expect(screen.getByText('Link hover text')).toBeInTheDocument()
  })

  test('accepts a raw palette color value for textColor, not just a named tone', () => {
    renderListWithIcons(
      <ListWithIcons items={[{ text: 'Custom colored', textColor: secondary['700'] }]} />,
    )

    expect(screen.getByText('Custom colored')).toHaveStyle({ color: secondary['700'] })
  })
})
