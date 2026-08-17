import { ThemeProvider } from '@mui/material/styles'
import { render, screen } from '@testing-library/react'
import { ReactElement } from 'react'

import theme from '@/theme/light'

import RcSesStepCard from '.'

const renderWithTheme = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('RcSesStepCard', () => {
  test('renders title', () => {
    renderWithTheme(<RcSesStepCard title='Step title' />)

    expect(screen.getByText('Step title')).toBeInTheDocument()
  })

  test('renders title as h2 by default', () => {
    renderWithTheme(<RcSesStepCard title='Default heading' />)

    const heading = screen.getByText('Default heading')
    expect(heading.tagName).toBe('H2')
  })

  test('renders with description', () => {
    renderWithTheme(<RcSesStepCard title='Step title' description='Step description' />)

    expect(screen.getByText('Step description')).toBeInTheDocument()
  })

  test('renders children content', () => {
    renderWithTheme(
      <RcSesStepCard title='Step title'>
        <div>Step content</div>
      </RcSesStepCard>,
    )

    expect(screen.getByText('Step content')).toBeInTheDocument()
  })

  test('renders footer', () => {
    renderWithTheme(
      <RcSesStepCard title='Step title' footer={<button type='button'>Next</button>}>
        <div>Content</div>
      </RcSesStepCard>,
    )

    expect(screen.getByText('Next')).toBeInTheDocument()
  })

  test('renders custom heading level', () => {
    renderWithTheme(<RcSesStepCard title='Title' headingLevel={3} />)

    const heading = screen.getByText('Title')
    expect(heading.tagName).toBe('H3')
  })

  test('renders with white background', () => {
    const { container } = renderWithTheme(<RcSesStepCard title='Step title' />)

    const box = container.firstChild
    expect(box).toHaveStyle({ backgroundColor: 'rgb(255, 255, 255)' })
  })
})
