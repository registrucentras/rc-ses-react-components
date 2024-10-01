import React from 'react'

import { ColorType } from '@/types/common/ColorType'

export type CardServiceProps = {
  title: string
  Icon: React.FunctionComponent
  iconColor?: ColorType
}
