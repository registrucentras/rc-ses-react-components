import { SxProps, Theme } from '@mui/material'
import { ReactNode } from 'react'

export type StepCardHeadingLevel = 2 | 3 | 4 | 5 | 6

export type RcSesStepCardTestIds = {
  root?: string
  header?: string
  title?: string
  description?: string
  content?: string
  footer?: string
}

export type RcSesStepCardProps = {
  title: ReactNode
  description?: ReactNode
  headingLevel?: StepCardHeadingLevel
  children?: ReactNode
  footer?: ReactNode
  className?: string
  testIds?: RcSesStepCardTestIds
  sx?: SxProps<Theme>
}
