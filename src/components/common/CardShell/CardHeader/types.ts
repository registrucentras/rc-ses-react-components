import { ReactNode } from 'react'

export type CardHeadingLevel = 2 | 3 | 4 | 5 | 6

export type RcSesCardHeaderTestIds = {
  root?: string
  icon?: string
  heading?: string
  badge?: string
  description?: string
  actions?: string
}

export type RcSesCardHeaderProps = {
  title: ReactNode
  headingLevel?: CardHeadingLevel
  /**
   * Decorative leading visual, `Icon-tile` once SAV-6476 lands. Rendered
   * `aria-hidden`, so it never contributes to the heading's accessible name.
   */
  icon?: ReactNode
  /**
   * Count rendered as a Neutral/Small `Badge` inside the heading, so it is
   * announced together with the title. Intended for short section headings.
   */
  count?: number
  description?: ReactNode
  /**
   * Up to two CTAs, rendered at the end of the header row. A trailing
   * affordance such as the Category-tile chevron is not a CTA and will need its
   * own slot.
   */
  actions?: ReactNode
  className?: string
  testIds?: RcSesCardHeaderTestIds
}
