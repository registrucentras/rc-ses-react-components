import { OrderStateStatusType } from '../order/OrderStateStatusType'

export type StepItem = {
  id: string
  label: string
  state: OrderStateStatusType
}
