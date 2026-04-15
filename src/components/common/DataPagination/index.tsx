import { Button, Pagination } from '@mui/material'
import { Box } from '@mui/system'
import { ArrowLeftIcon } from '@phosphor-icons/react'
import { useState } from 'react'

import { ArrowRightIcon } from '@/library'
import palette from '@/theme/palette'

export interface DataPaginationProps {
  count: number
  page?: number
  defaultPage?: number
  onChange?: (page: number) => void
  prevLabel?: string
  nextLabel?: string
}

const baseButtonSx = {
  '&&': {
    minWidth: 40,
    height: 40,
    px: 1.5,
    borderRadius: 2,
    fontSize: 14,
    fontWeight: 300,
    textTransform: 'none',
    backgroundColor: 'transparent',
    color: palette.grey[800],

    display: 'flex',
    alignItems: 'center',
    gap: 0.5,

    '&:hover': {
      backgroundColor: palette.grey[200],
    },

    '&:active': {
      backgroundColor: palette.grey[300],
    },

    '&.Mui-focusVisible': {
      border: `2px solid ${palette.grey[950]}`,
      backgroundColor: palette.grey[50],
    },

    '&.Mui-disabled': {
      backgroundColor: palette.grey[100],
      color: palette.grey[500],
    },
  },
}

const DataPagination = ({
  count,
  page,
  defaultPage = 1,
  onChange,
  prevLabel = 'Atgal',
  nextLabel = 'Kitas',
}: DataPaginationProps) => {
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

  return (
    <Box display='flex' alignItems='center' gap={1}>
      <Button
        variant='text'
        color='inherit'
        disableRipple
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        sx={baseButtonSx}
        aria-label='Previous page'
      >
        <ArrowLeftIcon size={16} />
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>{prevLabel}</Box>
      </Button>
      <Pagination
        count={count}
        page={currentPage}
        onChange={(_, p) => handlePageChange(p)}
      />
      <Button
        variant='text'
        color='inherit'
        disableRipple
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === count}
        sx={baseButtonSx}
        aria-label='Next page'
      >
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>{nextLabel}</Box>
        <ArrowRightIcon size={16} />
      </Button>
    </Box>
  )
}

export default DataPagination
