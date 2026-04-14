type StepState = 'active' | 'completed' | 'pending'

export interface StepItem {
  id: string
  title: string
  state: StepState
}
