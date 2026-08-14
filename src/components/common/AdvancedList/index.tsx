import { Box, Container } from '@mui/material'
import { ReactNode, useState } from 'react'

import DataPagination from '@/components/common/DataPagination'

import AdvancedListItem, {
  type AdvancedListItemProps,
} from './components/AdvancedListItem'

export type AdvancedListItemData = AdvancedListItemProps & { id: string }

export interface AdvancedListProps {
  items: AdvancedListItemData[]
  error?: ReactNode
}

const PAGE_SIZE = 5

const AdvancedList = ({ items, error }: AdvancedListProps) => {
  const [page, setPage] = useState(1)

  if (error != null) {
    return (
      <Container disableGutters sx={{ display: 'flex', justifyContent: 'center' }}>
        {error}
      </Container>
    )
  }

  const totalPages = Math.ceil(items.length / PAGE_SIZE)
  const currentPage = totalPages > 0 ? Math.min(page, totalPages) : 1
  const startIndex = (currentPage - 1) * PAGE_SIZE
  const pagedItems = items.slice(startIndex, startIndex + PAGE_SIZE)

  return (
    <Container
      disableGutters
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', width: '100%' }}
      >
        {pagedItems.map(({ id, ...itemProps }) => (
          <AdvancedListItem key={id} {...itemProps} />
        ))}
      </Box>
      <DataPagination count={totalPages} page={currentPage} onChange={setPage} />
    </Container>
  )
}

export default AdvancedList
