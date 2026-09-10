import React from 'react'

import { ColorType } from '@/types/common/ColorType'

export interface CardServiceProps {
  title: string
  Icon: React.FunctionComponent
  iconColor?: ColorType
}
