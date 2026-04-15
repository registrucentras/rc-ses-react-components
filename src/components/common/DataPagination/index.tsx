import { Pagination, PaginationItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { ArrowRightIcon } from '@mui/x-date-pickers'
import { useState } from 'react'

export interface DataPaginationProps {
  count: number
  page?: number
  defaultPage?: number
  onChange?: (page: number) => void
  hidePrevOnFirst?: boolean
  hideNextButton?: boolean
  showNextShortcut?: boolean
  nextLabel?: string
}

const DataPagination = ({
  count,
  page,
  defaultPage = 1,
  onChange,
  hidePrevOnFirst = true,
  hideNextButton = true,
  showNextShortcut = true,
  nextLabel = 'Kitas',
}: DataPaginationProps) => {
  const isControlled = page !== undefined

  const [internalPage, setInternalPage] = useState(defaultPage)

  const currentPage = isControlled ? page : internalPage

  const handleStepClick = (_: React.ChangeEvent<unknown>, newPage: number) => {
    if (!isControlled) {
      setInternalPage(newPage)
    }
    onChange?.(newPage)
  }

  const handleNextClick = () => {
    if (currentPage >= count) return
    handleStepClick({} as any, currentPage + 1)
  }

  return (
    <Box display='flex' alignItems='center' gap={2}>
      <Pagination
        count={count}
        page={currentPage}
        onChange={handleStepClick}
        renderItem={(item) => {
          if (item.type === 'previous' && hidePrevOnFirst && currentPage === 1)
            return null

          if (item.type === 'next' && hideNextButton) return null

          return <PaginationItem {...item} />
        }}
      />

      {showNextShortcut && currentPage < count && (
        <Box
          onClick={handleNextClick}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            cursor: 'pointer',
            px: 1,
          }}
        >
          <Typography variant='caption'>{nextLabel}</Typography>
          <ArrowRightIcon />
        </Box>
      )}
    </Box>
  )
}

export default DataPagination
