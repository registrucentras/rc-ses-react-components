import { OrderStateStatusType } from '@/types/order/OrderStateStatusType'

export type AccordionState = {
  canToggle?: boolean | undefined
  disabled?: boolean | undefined
  expanded: boolean | undefined
  state: OrderStateStatusType
  title: string
}

export type AccordionControllerState = Record<string, AccordionState>
