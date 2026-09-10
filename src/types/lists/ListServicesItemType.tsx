import React from 'react'

export interface ListServicesItemType {
  title: string
  Icon?: React.FC | undefined
  limit?: number | undefined
  items: string[]
}
