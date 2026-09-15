import Box from '@mui/material/Box'
import React from 'react'
import { List } from 'react-window'

import RowComponent from './RowComponent'

const ROW_HEIGHT = 44

/**
 * react-window 2 replaced VariableSizeList with List: itemCount/itemSize/itemData
 * became rowCount/rowHeight/rowProps, the row renderer moved from `children` to
 * `rowComponent`, and innerElementType/outerElementType were dropped in favour of
 * a single element whose tag comes from `tagName` and which receives rest props
 * directly.
 *
 * That removes two helpers:
 * - OuterElementType existed only to forward Autocomplete's listbox props onto the
 *   outer element through a context; List spreads them itself now.
 * - useResetCache called resetAfterIndex on every data change; rows are a fixed
 *   height and v2 has no such cache.
 */
const ListboxComponent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLElement>
>((props, ref) => {
  const { children, ...other } = props
  const items: React.ReactElement<unknown>[] = []
  ;(children as React.ReactElement<unknown>[]).forEach(
    (
      item: React.ReactElement<unknown> & {
        children?: React.ReactElement<unknown>[]
      },
    ) => {
      items.push(item)
      items.push(...(item.children || []))
    },
  )

  return (
    <Box lang='en' ref={ref} sx={{ m: 0.75, ul: { m: 0, p: 0, width: 'auto' } }}>
      <List
        {...other}
        overscanCount={5}
        rowComponent={RowComponent}
        rowCount={items.length}
        rowHeight={ROW_HEIGHT}
        rowProps={{ items }}
        tagName='ul'
        // Height tracks the content, as it did under v1, leaving the surrounding
        // Autocomplete popper responsible for clipping and scrolling.
        style={{ height: items.length * ROW_HEIGHT, overflow: 'hidden auto' }}
      />
    </Box>
  )
})

export default ListboxComponent
