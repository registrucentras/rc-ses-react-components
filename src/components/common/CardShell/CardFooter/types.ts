import { ReactNode } from 'react'

export type CardFooterAlign = 'start' | 'between' | 'end'

export interface RcSesCardFooterTestIds {
  root?: string
}

export interface RcSesCardFooterProps {
  children?: ReactNode
  /**
   * Horizontal distribution of the row. `between` pushes the first and last
   * child apart, which is the cancel/continue pattern; `end` is the single
   * primary action; `start` is a lone link such as "Žiūrėti visas".
   */
  align?: CardFooterAlign
  /**
   * Whether direct children stretch to the full width once the row stacks.
   * Right for buttons, wrong for a text link, which is why it is a prop.
   */
  className?: string
  testIds?: RcSesCardFooterTestIds
}
