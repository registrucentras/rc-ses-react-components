import { ReactNode } from 'react'

export type CardHeadingLevel = 2 | 3 | 4 | 5 | 6

export type RcSesCardHeaderTestIds = {
  root?: string
  heading?: string
  description?: string
}

export type RcSesCardHeaderProps = {
  title: ReactNode
  headingLevel?: CardHeadingLevel
  description?: ReactNode
  className?: string
  testIds?: RcSesCardHeaderTestIds
}
