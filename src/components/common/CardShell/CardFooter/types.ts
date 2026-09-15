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
  className?: string
  testIds?: RcSesCardFooterTestIds
}
