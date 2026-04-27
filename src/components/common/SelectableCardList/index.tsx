import { Box, Container } from '@mui/material'
import { ReactNode, useMemo, useState } from 'react'

import DataPagination from '../DataPagination'
import { ListWithIconsItemData } from '../ListWithIcons/ListWithIcons.types'
import SelectableCardListItem from './components/SelectableCardListItem'

export type SelectableCardListItemData = {
  id: string
  title: string
  subtitle?: string
  listItems?: ListWithIconsItemData[]
}
export interface SelectableCardListProps {
  items?: SelectableCardListItemData[]
  selectedId?: string | null
  onSelect: (id: string) => void
  error?: ReactNode
}

const SKELETON_COUNT = 5
const PAGE_SIZE = 5
const SelectableCardList = ({
  items,
  selectedId,
  onSelect,
  error,
}: SelectableCardListProps) => {
  const [page, setPage] = useState(1)

  const totalPages = items ? Math.ceil(items.length / PAGE_SIZE) : 0
  const currentPage = totalPages > 0 ? Math.min(page, totalPages) : 1
  const pagedItems = useMemo(() => {
    if (!items) {
      return []
    }

    const startIndex = (currentPage - 1) * PAGE_SIZE
    return items.slice(startIndex, startIndex + PAGE_SIZE)
  }, [currentPage, items])

  const renderSkeletons = () =>
    Array.from({ length: SKELETON_COUNT }).map((_, i) => (
      <SelectableCardListItem
        // eslint-disable-next-line react/no-array-index-key
        key={i}
        title=''
        subtitle=''
        selected={false}
        onSelect={() => {}}
        listItems={[]}
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
      }}
    >
      {error != null ? (
        error
      ) : (
        <>
          <Box
            data-testid={!items ? 'selectable-card-list-skeleton' : undefined}
            sx={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}
          >
            {!items
              ? renderSkeletons()
              : pagedItems.map((item) => (
                  <SelectableCardListItem
                    key={item.id}
                    title={item.title}
                    subtitle={item.subtitle}
                    listItems={item.listItems || []}
                    selected={selectedId === item.id}
                    onSelect={() => onSelect(item.id)}
                  />
                ))}
          </Box>
          <DataPagination
            count={totalPages}
            page={currentPage}
            onChange={setPage}
            isLoading={!items}
          />
        </>
      )}
    </Container>
  )
}

export default SelectableCardList
