import { ThemeProvider } from '@mui/material/styles'
import { composeStories } from '@storybook/react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import theme from '@/theme/light'

import * as stories from './Card.stories'

const { Main } = composeStories(stories)

test('reuses args from composed card story', () => {
  render(<ThemeProvider theme={theme}>{Main()}</ThemeProvider>)

  expect(screen.getByText(Main.args.title as string)).toBeInTheDocument()
  expect(screen.getByText(Main.args.description as string)).toBeInTheDocument()
  expect(screen.getByText('Vidinis paslaugu front-end sprendimas')).toBeInTheDocument()
  expect(screen.getAllByRole('button', { name: 'Button' })).toHaveLength(3)
})
