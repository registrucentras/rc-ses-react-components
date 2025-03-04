import Box from '@mui/material/Box'
import React from 'react'
import { VariableSizeList } from 'react-window'

import useResetCache from '../hooks/useResetCache'
import OuterElementType, { OuterElementContext } from './OuterElementType'
import RowComponent from './RowComponent'

const ListboxComponent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLElement>
>((props, ref) => {
  const { children, ...other } = props
  const itemData: React.ReactElement<unknown>[] = []
  ;(children as React.ReactElement<unknown>[]).forEach(
    (
      item: React.ReactElement<unknown> & {
        children?: React.ReactElement<unknown>[]
      },
    ) => {
      itemData.push(item)
      itemData.push(...(item.children || []))
    },
  )

  const itemCount = itemData.length
  const itemSize = 44

  const gridRef = useResetCache(itemCount)

  return (
    <Box ref={ref} sx={{ m: 0.75, ul: { m: 0, p: 0, width: 'auto' } }}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          height={itemCount * itemSize}
          innerElementType='ul'
          itemCount={itemCount}
          itemData={itemData}
          itemSize={() => itemSize}
          outerElementType={OuterElementType}
          overscanCount={5}
          ref={gridRef}
          style={{ overflow: 'hidden auto' }}
          width='100%'
        >
          {RowComponent}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </Box>
  )
})

export default ListboxComponent
