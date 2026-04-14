type StepState = 'active' | 'completed' | 'pending'

export interface StepItem {
  title: string
  state: StepState
}
