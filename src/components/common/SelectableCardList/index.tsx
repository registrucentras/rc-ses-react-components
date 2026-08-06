import { Box, Container, useMediaQuery, useTheme } from '@mui/material'
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

const MOBILE_PAGE_SIZE = 3
const DESKTOP_PAGE_SIZE = 5
type SelectableCardListPagedProps = SelectableCardListProps & {
  pageSize: number
}

const SelectableCardListPaged = ({
  items,
  selectedId,
  onSelect,
  error,
  pageSize,
}: SelectableCardListPagedProps) => {
  const [page, setPage] = useState(1)

  const totalPages = items ? Math.ceil(items.length / pageSize) : 0
  const currentPage = totalPages > 0 ? Math.min(page, totalPages) : 1
  const pagedItems = useMemo(() => {
    if (!items) {
      return []
    }

    const startIndex = (currentPage - 1) * pageSize
    return items.slice(startIndex, startIndex + pageSize)
  }, [currentPage, items, pageSize])

  const renderSkeletons = () =>
    Array.from({ length: pageSize }).map((_, i) => (
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
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
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

const SelectableCardList = (props: SelectableCardListProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const pageSize = isMobile ? MOBILE_PAGE_SIZE : DESKTOP_PAGE_SIZE

  return <SelectableCardListPaged key={pageSize} {...props} pageSize={pageSize} />
}

export default SelectableCardList
