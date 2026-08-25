import { ThemeProvider } from '@mui/material/styles'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { type ReactElement } from 'react'
import { describe, expect, test } from 'vitest'

import theme from '@/theme/light'

import RcSesTitleBlock from '.'

const renderTitleBlock = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('RcSesTitleBlock', () => {
  test('renders title and description', () => {
    renderTitleBlock(
      <RcSesTitleBlock title='Test Title' description='Test description' />,
    )

    expect(
      screen.getByRole('heading', { level: 3, name: 'Test Title' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Test description')).toBeInTheDocument()
  })

  test('uses default heading level 3 when not provided', () => {
    renderTitleBlock(<RcSesTitleBlock title='Test Title' />)

    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
  })

  test('respects custom headingLevel prop', () => {
    renderTitleBlock(<RcSesTitleBlock title='Test Title' headingLevel={2} />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Test Title' }),
    ).toBeInTheDocument()
  })

  test('omits description when not provided', () => {
    renderTitleBlock(
      <RcSesTitleBlock title='Test Title' testIds={{ description: 'description' }} />,
    )

    expect(screen.queryByTestId('description')).not.toBeInTheDocument()
  })

  test('applies testIds correctly', () => {
    renderTitleBlock(
      <RcSesTitleBlock
        description='Test description'
        testIds={{
          root: 'header-root',
          heading: 'header-heading',
          description: 'header-desc',
        }}
        title='Test Title'
      />,
    )

    expect(screen.getByTestId('header-root')).toBeInTheDocument()
    expect(screen.getByTestId('header-heading')).toBeInTheDocument()
    expect(screen.getByTestId('header-desc')).toBeInTheDocument()
  })

  test('handles ReactNode as title', () => {
    renderTitleBlock(
      <RcSesTitleBlock
        title={
          <span>
            Complex <strong>Title</strong>
          </span>
        }
      />,
    )

    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
    expect(screen.getByText('Complex')).toBeInTheDocument()
    expect(screen.getByText('Title')).toBeInTheDocument()
  })

  test('handles ReactNode as description', () => {
    renderTitleBlock(
      <RcSesTitleBlock
        description={
          <span>
            Description with <em>emphasis</em>
          </span>
        }
        title='Test Title'
      />,
    )

    expect(screen.getByText('Description with')).toBeInTheDocument()
    expect(screen.getByText('emphasis')).toBeInTheDocument()
  })

  test('heading levels 2 through 6 render correctly', () => {
    const levels = [2, 3, 4, 5, 6] as const

    levels.forEach((level) => {
      const { unmount } = renderTitleBlock(
        <RcSesTitleBlock headingLevel={level} title={`Level ${level} Title`} />,
      )

      expect(
        screen.getByRole('heading', { level, name: `Level ${level} Title` }),
      ).toBeInTheDocument()
      unmount()
    })
  })

  test('title and description keep the design type ramp', () => {
    renderTitleBlock(
      <RcSesTitleBlock
        description='Test description'
        testIds={{ description: 'description' }}
        title='Test Title'
      />,
    )

    expect(screen.getByText('Test Title')).toHaveStyle({
      fontSize: '1.125rem',
      fontWeight: '600',
      lineHeight: '1.5rem',
    })
    expect(screen.getByTestId('description')).toHaveStyle({
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    })
  })

  test('count renders a badge inside the heading accessible name', () => {
    renderTitleBlock(<RcSesTitleBlock count={4} title='Pasirinktos teisės' />)

    expect(
      screen.getByRole('heading', { level: 3, name: 'Pasirinktos teisės 4' }),
    ).toBeInTheDocument()
  })

  test('count of zero still renders the badge', () => {
    renderTitleBlock(
      <RcSesTitleBlock
        count={0}
        testIds={{ badge: 'badge' }}
        title='Pasirinktos teisės'
      />,
    )

    expect(screen.getByTestId('badge')).toHaveTextContent('0')
  })

  test('omits the badge when count is not provided', () => {
    renderTitleBlock(<RcSesTitleBlock testIds={{ badge: 'badge' }} title='Test Title' />)

    expect(screen.queryByTestId('badge')).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Test Title' }),
    ).toBeInTheDocument()
  })

  test('icon is decorative and stays out of the accessible name', () => {
    renderTitleBlock(
      <RcSesTitleBlock
        icon={<span>dekoracija</span>}
        testIds={{ icon: 'icon' }}
        title='Test Title'
      />,
    )

    expect(screen.getByTestId('icon')).toHaveAttribute('aria-hidden', 'true')
    expect(
      screen.getByRole('heading', { level: 3, name: 'Test Title' }),
    ).toBeInTheDocument()
  })

  test('renders up to two actions in the actions slot', () => {
    renderTitleBlock(
      <RcSesTitleBlock
        actions={
          <>
            <button type='button'>Atšaukti</button>
            <button type='button'>Tęsti</button>
          </>
        }
        testIds={{ actions: 'actions' }}
        title='Test Title'
      />,
    )

    const actions = screen.getByTestId('actions')
    expect(actions).toContainElement(screen.getByRole('button', { name: 'Atšaukti' }))
    expect(actions).toContainElement(screen.getByRole('button', { name: 'Tęsti' }))
  })

  test('omits the icon and actions slots when not provided', () => {
    renderTitleBlock(
      <RcSesTitleBlock
        testIds={{ actions: 'actions', icon: 'icon' }}
        title='Test Title'
      />,
    )

    expect(screen.queryByTestId('icon')).not.toBeInTheDocument()
    expect(screen.queryByTestId('actions')).not.toBeInTheDocument()
  })

  test('titleColor overrides the default title color', () => {
    renderTitleBlock(<RcSesTitleBlock title='Test Title' titleColor='rgb(1, 2, 3)' />)

    expect(screen.getByText('Test Title')).toHaveStyle({ color: 'rgb(1, 2, 3)' })
  })

  test('horizontal orientation glues icon and text into one group, separate from actions', () => {
    renderTitleBlock(
      <RcSesTitleBlock
        actions={<button type='button'>Redaguoti</button>}
        icon={<span>ikona</span>}
        testIds={{ root: 'root', icon: 'icon', actions: 'actions' }}
        title='Test Title'
      />,
    )

    const root = screen.getByTestId('root')
    // Two direct groups on horizontal: (icon + text) and (actions).
    expect(root.children).toHaveLength(2)
    const [textGroup, actionsGroup] = Array.from(root.children)
    expect(textGroup).toContainElement(screen.getByTestId('icon'))
    expect(textGroup).toContainElement(
      screen.getByRole('heading', { level: 3, name: 'Test Title' }),
    )
    expect(actionsGroup).toContainElement(
      screen.getByRole('button', { name: 'Redaguoti' }),
    )
  })

  describe('orientation', () => {
    test('defaults to horizontal layout', () => {
      renderTitleBlock(
        <RcSesTitleBlock
          description='Test description'
          icon={<span>ikona</span>}
          testIds={{ root: 'root', icon: 'icon' }}
          title='Test Title'
        />,
      )

      // Icon precedes the heading in DOM order and lives in the same group.
      const iconWrapper = screen.getByTestId('icon').parentElement
      const heading = screen.getByRole('heading', { level: 3, name: 'Test Title' })
      expect(iconWrapper).toContainElement(heading)
    })

    test('vertical orientation stacks children in a column', () => {
      renderTitleBlock(
        <RcSesTitleBlock
          description='Test description'
          icon={<span>ikona</span>}
          orientation='vertical'
          testIds={{ root: 'root' }}
          title='Test Title'
        />,
      )

      expect(screen.getByTestId('root')).toHaveStyle({ flexDirection: 'column' })
    })

    test('vertical orientation renders the icon before the text column', () => {
      renderTitleBlock(
        <RcSesTitleBlock
          icon={<span>ikona</span>}
          orientation='vertical'
          testIds={{ root: 'root', icon: 'icon' }}
          title='Test Title'
        />,
      )

      const root = screen.getByTestId('root')
      const iconWrapper = screen.getByTestId('icon')
      const heading = screen.getByRole('heading', { level: 3, name: 'Test Title' })
      // Icon and text column are siblings under root, icon comes first.
      expect(iconWrapper.parentElement).toBe(root)
      expect(root.children[0]).toBe(iconWrapper)
      expect(root).toContainElement(heading)
    })

    test('vertical orientation omits the actions slot even when provided', () => {
      renderTitleBlock(
        <RcSesTitleBlock
          actions={<button type='button'>Redaguoti</button>}
          orientation='vertical'
          testIds={{ actions: 'actions' }}
          title='Test Title'
        />,
      )

      expect(screen.queryByTestId('actions')).not.toBeInTheDocument()
      expect(screen.queryByRole('button', { name: 'Redaguoti' })).not.toBeInTheDocument()
    })

    test('horizontal orientation renders the actions slot when provided', () => {
      renderTitleBlock(
        <RcSesTitleBlock
          actions={<button type='button'>Redaguoti</button>}
          orientation='horizontal'
          testIds={{ actions: 'actions' }}
          title='Test Title'
        />,
      )

      expect(screen.getByTestId('actions')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Redaguoti' })).toBeInTheDocument()
    })
  })
})
