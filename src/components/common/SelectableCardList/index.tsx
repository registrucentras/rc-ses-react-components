import { Box, Container } from '@mui/system'
import { useState } from 'react'

import DataPagination from '../DataPagination'
import { ListWithIconsItemData } from '../ListWithIcons'
import SelectableCardListItem from './components/SelectableCardListItem'

export type SelectableCardListItemData = {
  id: string
  name: string
  matchedName?: string
  listItems?: ListWithIconsItemData[]
}
export interface SelectableCardListProps {
  items?: SelectableCardListItemData[]
  isLoading?: boolean
}

const SKELETON_COUNT = 5

const SelectableCardList = ({ items, isLoading }: SelectableCardListProps) => {
  const [page, setPage] = useState(1)
  const [selectedId, setSelectedId] = useState<string | null>('1')

  const renderSkeletons = () =>
    Array.from({ length: SKELETON_COUNT }).map((_, i) => (
      <SelectableCardListItem
        // eslint-disable-next-line react/no-array-index-key
        key={i}
        title=''
        subtitle=''
        selected={false}
        onSelect={() => {}}
        isLoading
      />
    ))
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        paddingBottom: '64px',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
        {isLoading && !items
          ? renderSkeletons()
          : items?.map((item) => (
              <SelectableCardListItem
                key={item.id}
                title={item.name}
                subtitle={item.matchedName}
                listItems={item.listItems}
                selected={selectedId === item.id}
                onSelect={() => setSelectedId(item.id)}
              />
            ))}
      </Box>
      <DataPagination count={10} page={page} onChange={setPage} isLoading={isLoading} />
    </Container>
  )
}

export default SelectableCardList
