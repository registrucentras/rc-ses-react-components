import { ThemeProvider } from '@mui/material/styles'
import { fireEvent, render, screen } from '@testing-library/react'
import { type ReactElement } from 'react'
import { describe, expect, test } from 'vitest'

import { colorTokens as color } from '@/theme/colorTokens'
import theme from '@/theme/light'

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
          { text: 'Link text', textColor: 'link' },
        ]}
      />,
    )

    expect(screen.getByText('Default text')).toHaveStyle({ color: color['text-default'] })
    expect(screen.getByText('Secondary text')).toHaveStyle({
      color: color['text-secondary'],
    })
    expect(screen.getByText('Muted text')).toHaveStyle({ color: color['text-muted'] })
    expect(screen.getByText('Link text')).toHaveStyle({ color: color['text-link'] })
  })

  test('falls back to the secondary tone color/icon fill when textColor is omitted', () => {
    const StubIcon = ({ fillColor }: { fillColor?: string }) => (
      <span data-testid='stub-icon' data-fill-color={fillColor}>
        icon
      </span>
    )

    renderListWithIcons(
      <ListWithIcons items={[{ icon: StubIcon, text: 'No explicit color' }]} />,
    )

    expect(screen.getByText('No explicit color')).toHaveStyle({
      color: color['text-secondary'],
    })
    expect(screen.getByTestId('stub-icon')).toHaveAttribute(
      'data-fill-color',
      color['text-secondary'],
    )
  })

  test('accepts a raw palette color value for textColor, not just a named tone', () => {
    renderListWithIcons(
      <ListWithIcons items={[{ text: 'Custom colored', textColor: '#008561' }]} />,
    )

    expect(screen.getByText('Custom colored')).toHaveStyle({ color: '#008561' })
  })
})
