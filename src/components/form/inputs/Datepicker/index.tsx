import React from 'react'

import RangeDatepicker, { RangeDatepickerProps } from './RangeDatepicker'
import SingleDatepicker, { SingleDatepickerProps } from './SingleDatepicker'

export type { DateRangeValue } from './rangeModel'
export type { RangeDatepickerProps }
export type DatepickerProps =
  | (SingleDatepickerProps & { selection?: 'single' })
  | (RangeDatepickerProps & { selection: 'range' })

const RcSesDatepicker = React.forwardRef<HTMLInputElement, DatepickerProps>(
  (props, ref) => {
    if (props.selection === 'range') {
      const { selection, ...rangeProps } = props
      return <RangeDatepicker {...rangeProps} ref={ref} />
    }
    const { selection, ...singleProps } = props
    return <SingleDatepicker {...singleProps} ref={ref} />
  },
)

export default RcSesDatepicker
