import { ReactNode } from 'react'

import { RcSesTitleBlockBaseProps } from '@/components/common/TitleBlock/types'

export interface RcSesStepCardTestIds {
  root?: string
  header?: string
  content?: string
  footer?: string
}

export interface RcSesStepCardProps extends Pick<
  RcSesTitleBlockBaseProps,
  'title' | 'description'
> {
  /**
   * Zero-based index of the currently active step. Drives the step-position
   * variant of the default footer (first / middle / last).
   */
  activeStep: number
  /** Total number of steps in the wizard. Drives last-step detection. */
  stepCount: number
  /**
   * Fired when the trailing CTA is clicked ("Tęsti" on first / middle,
   * "Į krepšelį" on the last step). The parent decides what "next" means.
   */
  onNext?: () => void
  /** Fired when the leading "Atgal" button is clicked (middle + last step). */
  onBack?: () => void
  /** Fired when the leading "Atšaukti" button is clicked (first step). */
  onCancel?: () => void
  /**
   * Total price shown next to the trailing CTA on the last step, rendered as
   * `Suma be PVM: {totalPrice}`. Pass a preformatted string ("4,01 €") so
   * locale + currency stay a consumer concern.
   */
  totalPrice?: string
  /**
   * Replaces the whole default footer, including the step-position variants.
   * Use when a step needs an entirely custom action row.
   */
  footer?: ReactNode
  children?: ReactNode
  testIds?: RcSesStepCardTestIds
}
