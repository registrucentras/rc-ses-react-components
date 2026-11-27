export interface AccordionState {
  canToggle?: boolean | undefined
  disabled?: boolean | undefined
  expanded: boolean | undefined
  state: 'active' | 'completed' | 'pending'
  title: string
  description?: string
}

export type AccordionControllerState = Record<string, AccordionState>
