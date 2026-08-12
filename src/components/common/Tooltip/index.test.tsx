import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, test, vi } from 'vitest'

import RcSesTooltip from '.'

describe('RcSesTooltip', () => {
  test('renders default trigger button', () => {
    render(<RcSesTooltip title='Help text' />)

    expect(screen.getByRole('button', { name: 'Paaiškinimas' })).toBeInTheDocument()
  })

  test('opens tooltip on trigger click', async () => {
    render(<RcSesTooltip title='Text' />)

    fireEvent.click(screen.getByRole('button'))

    expect(await screen.findByRole('tooltip')).toHaveTextContent('Text')
  })

  test('closes on pointerdown outside', async () => {
    render(<RcSesTooltip title='Text' />)

    fireEvent.click(screen.getByRole('button'))
    await screen.findByRole('tooltip')

    fireEvent.pointerDown(document.body)

    await waitFor(() => {
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })
  })

  test('keeps only one tooltip open at a time', async () => {
    render(
      <>
        <RcSesTooltip title='A' />
        <RcSesTooltip title='B' />
      </>,
    )

    const [first, second] = screen.getAllByRole('button')

    fireEvent.click(first)
    await screen.findByRole('tooltip')

    fireEvent.click(second)

    await waitFor(() => {
      const tooltips = screen.getAllByRole('tooltip')
      expect(tooltips).toHaveLength(1)
      expect(tooltips[0]).toHaveTextContent('B')
    })
  })

  test('passes trigger slotProps to the default button', () => {
    render(
      <RcSesTooltip title='Text' slotProps={{ trigger: { 'aria-label': 'Custom' } }} />,
    )

    expect(screen.getByRole('button', { name: 'Custom' })).toBeInTheDocument()
  })

  test('custom children trigger opens tooltip, chains onClick and forwards ref', async () => {
    const onClick = vi.fn()
    const ref = createRef<HTMLButtonElement>()

    render(
      <RcSesTooltip title='Text'>
        <button type='button' ref={ref} onClick={onClick}>
          Custom trigger
        </button>
      </RcSesTooltip>,
    )

    const trigger = screen.getByRole('button', { name: 'Custom trigger' })
    expect(ref.current).toBe(trigger)

    fireEvent.click(trigger)

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(await screen.findByRole('tooltip')).toHaveTextContent('Text')
  })
})
