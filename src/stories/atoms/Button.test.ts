import { composeStories } from '@storybook/react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import * as stories from './Button.stories'

const { PrimaryContained } = composeStories(stories)

test('reuses args from composed story', () => {
  render(PrimaryContained())

  const buttonElement = screen.getByRole('button')
  // Testing against values coming from the story itself! No need for duplication
  expect(buttonElement.textContent).toEqual(PrimaryContained.args.children)
  expect(buttonElement).toBeInTheDocument()
  // expect(buttonElement).toHaveAttribute('id')
})
