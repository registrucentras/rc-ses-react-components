import { BriefcaseIcon as Briefcase } from '@phosphor-icons/react'
import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import createIcon from './createIcon'

const renderSvg = (element: React.ReactElement) =>
  render(element).container.querySelector('svg') as SVGSVGElement

describe('createIcon', () => {
  it('renders at 24px in the icon color by default', () => {
    const Icon = createIcon(Briefcase)
    const svg = renderSvg(<Icon fillColor='#06a0d4' />)

    expect(svg).toHaveAttribute('width', '24')
    expect(svg).toHaveAttribute('height', '24')
    expect(svg).toHaveAttribute('fill', '#06a0d4')
  })

  it('uses the given defaults and still lets callers override them', () => {
    const Icon = createIcon(Briefcase, { size: 16, weight: 'bold' })
    const withDefaults = renderSvg(<Icon />)
    const boldPaths = withDefaults.innerHTML
    const overridden = renderSvg(<Icon size={32} weight='regular' />)

    expect(withDefaults).toHaveAttribute('width', '16')
    expect(overridden).toHaveAttribute('width', '32')
    expect(overridden.innerHTML).not.toBe(boldPaths)
  })

  it('passes other SVG props through', () => {
    const Icon = createIcon(Briefcase)
    const svg = renderSvg(<Icon className='custom' aria-hidden='true' />)

    expect(svg).toHaveClass('custom')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('names the component after the Phosphor icon', () => {
    expect(createIcon(Briefcase).displayName).toBe('BriefcaseIcon')
  })
})
