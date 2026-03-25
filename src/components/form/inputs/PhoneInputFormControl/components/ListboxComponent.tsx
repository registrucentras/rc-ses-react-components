import Box from '@mui/material/Box'
import React from 'react'
import { List } from 'react-window'

import type Country from '../types/Country'
import RowComponent from './RowComponent'

export type ListItemData = [
  React.HTMLAttributes<HTMLLIElement> & { key: React.Key },
  Country,
]

const ListboxComponent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLElement>
>((props, ref) => {
  const { children, ...other } = props
  const itemData: ListItemData[] = []

  const collectItems = (node: unknown) => {
    if (Array.isArray(node)) {
      const isTuple =
        node.length === 2 &&
        typeof node[0] === 'object' &&
        node[0] !== null &&
        typeof node[1] === 'object' &&
        node[1] !== null

      if (isTuple) {
        itemData.push(node as ListItemData)
        return
      }

      node.forEach((item) => collectItems(item))
      return
    }

    if (
      React.isValidElement<{ children?: unknown }>(node) &&
      node.props.children != null
    ) {
      collectItems(node.props.children)
    }
  }

  collectItems(children)

  const itemCount = itemData.length
  const itemSize = 44
  const visibleRows = 8
  const listHeight = Math.min(itemCount, visibleRows) * itemSize

  return (
    <Box lang='en' ref={ref} sx={{ m: 0.75, ul: { m: 0, p: 0, width: 'auto' } }}>
      <List
        {...other}
        overscanCount={5}
        rowComponent={RowComponent}
        rowCount={itemCount}
        rowHeight={itemSize}
        rowProps={{ itemData }}
        style={{ height: listHeight, overflow: 'hidden auto', width: '100%' }}
        tagName='ul'
      />
    </Box>
  )
})

export default ListboxComponent
