import { Pagination, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'

import ArrowLeftIcon from '@/assets/icons/ArrowLeftIcon'
import ArrowRightIcon from '@/assets/icons/ArrowRightIcon'

import DataPaginationSkeleton from './components/DataPaginationSkeleton'
import PaginationButton from './components/PaginationButton'

export interface DataPaginationProps {
  count: number
  page?: number
  defaultPage?: number
  onChange?: (page: number) => void
  prevLabel?: string
  nextLabel?: string
  isLoading?: boolean
}

const DataPagination = ({
  count,
  page,
  defaultPage = 1,
  onChange,
  prevLabel = 'Atgal',
  nextLabel = 'Kitas',
  isLoading = false,
}: DataPaginationProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const isControlled = page !== undefined
  const [internalPage, setInternalPage] = useState(defaultPage)

  const currentPage = isControlled ? page : internalPage

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > count) return

    if (!isControlled) {
      setInternalPage(newPage)
    }

    onChange?.(newPage)
  }

  if (isLoading) {
    return (
      <Box display='flex' alignItems='center' gap={1}>
        <DataPaginationSkeleton isMobile={isMobile} />
      </Box>
    )
  }

  const hidePagination = count <= 1

  if (hidePagination) {
    return null
  }

  return (
    <Box display='flex' alignItems='center' gap={1}>
      <>
        <PaginationButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          label={prevLabel}
          icon={<ArrowLeftIcon size={16} />}
        />
        <Pagination
          count={count}
          page={currentPage}
          siblingCount={isMobile ? 0 : 1}
          boundaryCount={1}
          onChange={(_, p) => handlePageChange(p)}
        />
        <PaginationButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === count}
          label={nextLabel}
          icon={<ArrowRightIcon size={16} />}
          iconPosition='end'
        />
      </>
    </Box>
  )
}

export default DataPagination
