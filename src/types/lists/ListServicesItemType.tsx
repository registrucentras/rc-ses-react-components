import React from 'react'

export type ListServicesItemType = {
  title: string
  Icon?: React.FC | undefined
  limit?: number | undefined
  items: Array<string>
}
