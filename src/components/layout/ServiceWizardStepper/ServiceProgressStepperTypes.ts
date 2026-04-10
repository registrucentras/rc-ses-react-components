export type ProgressStep = {
  id: string
  label: string
}

export type ServiceProgressStepperProps = {
  className?: string
  steps: ProgressStep[]
  activeStep: number
  handleBack?: () => void
  onStepClick?: (index: number) => void
  orientation?: 'horizontal' | 'vertical'
}
