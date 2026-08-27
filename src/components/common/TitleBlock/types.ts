import { ReactNode } from 'react'

export type TitleBlockHeadingLevel = 2 | 3 | 4 | 5 | 6

export type TitleBlockTitleVariant = 'h4' | 'h5' | 'h6'

export type TitleBlockOrientation = 'horizontal' | 'vertical'

export type RcSesTitleBlockTestIds = {
  root?: string
  icon?: string
  heading?: string
  badge?: string
  description?: string
  actions?: string
}

export type RcSesTitleBlockBaseProps = {
  title: ReactNode
  headingLevel?: TitleBlockHeadingLevel
  /**
   * Visual size of the title, independent of `headingLevel`. The semantic tag
   * (`headingLevel`) sets document structure; this sets the type scale.
   * Defaults to `h6` (18px).
   */
  titleVariant?: TitleBlockTitleVariant
  /**
   * Named tone applied to the title. Closed set so consumers cannot paint an
   * arbitrary colour into the DS component.
   * - `default` (default): `palette.grey[900]`, for non-branded rows.
   * - `brand`: `palette.primary[700]`, for branded rows (catalogue tiles,
   *   card headers). Does not imply the row is clickable — use a link tone
   *   on the CTA, not the heading, if that signal is needed.
   */
  titleTone?: 'default' | 'brand'
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
   * DOM id assigned to the heading element. Lets a consumer point
   * `aria-labelledby` at the row title from an external element (e.g. an
   * action CTA in a card grid) without duplicating the title string.
   */
  headingId?: string
  className?: string
  testIds?: RcSesTitleBlockTestIds
}

/**
 * Horizontal layout: icon on the left, text on the right, actions on the far
 * right. Up to two trailing CTAs are allowed in the `actions` slot.
 */
export type RcSesTitleBlockHorizontalProps = RcSesTitleBlockBaseProps & {
  orientation?: 'horizontal'
  /**
   * Up to two CTAs, rendered at the end of the header row. A trailing
   * affordance such as the Category-tile chevron is not a CTA and will need
   * its own slot.
   */
  actions?: ReactNode
}

/**
 * Vertical layout: icon on top, text below. There is no header-level actions
 * slot — put any CTA in the surrounding `CardShell`'s `footer` slot instead.
 * Passing `actions` here is a compile error.
 */
export type RcSesTitleBlockVerticalProps = RcSesTitleBlockBaseProps & {
  orientation: 'vertical'
  actions?: never
}

export type RcSesTitleBlockProps =
  | RcSesTitleBlockHorizontalProps
  | RcSesTitleBlockVerticalProps
