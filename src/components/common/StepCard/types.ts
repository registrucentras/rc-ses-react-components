import { ReactNode } from 'react'

import { RcSesTitleBlockBaseProps } from '@/components/common/TitleBlock/types'

export interface RcSesStepCardTestIds {
  root?: string
  header?: string
  content?: string
  footer?: string
}

export interface RcSesStepCardAction {
  label?: string
  /**
   * `undefined` keeps the default icon (arrows, or the cart on the last step),
   * `null` renders none, a node replaces the icon.
   */
  icon?: ReactNode
  /**
   * Id of a `<form>` rendered elsewhere. The button becomes that form's submit
   * button (`type="submit" form={id}`). The click handler still fires.
   */
  form?: string
  /** Shows a spinner in the icon's place and disables the button. */
  loading?: boolean
  disabled?: boolean
}

export interface RcSesStepCardActions {
  /** The trailing CTA on every step, including the last. */
  next?: RcSesStepCardAction
  /** The leading "Atgal" button (middle + last step). */
  back?: RcSesStepCardAction
  /** The leading "Atšaukti" button (first step). `false` removes it. */
  cancel?: RcSesStepCardAction | false
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
   * Overrides for the default footer: label, icon, form submit,
   * loading and disabled. Ignored when `footer` is set.
   */
  actions?: RcSesStepCardActions
  /**
   * Replaces the whole default footer, including the step-position variants.
   * Use when a step needs an entirely custom action row.
   */
  footer?: ReactNode
  children?: ReactNode
  testIds?: RcSesStepCardTestIds
}
