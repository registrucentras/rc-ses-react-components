import { Skeleton } from '@mui/material'
import { Box } from '@mui/system'

interface DataPaginationSkeletonProps {
  isMobile: boolean
}

const DataPaginationSkeleton = ({ isMobile }: DataPaginationSkeletonProps) => {
  const buttonWidth = isMobile ? 40 : 77
  const itemSize = 40
  const itemKeys = Array.from({ length: isMobile ? 5 : 7 }, (_, i) => i)
  return (
    <>
      <Skeleton variant='rounded' width={buttonWidth} height={itemSize} />
      <Box
        sx={{
          display: 'flex',
          gap: '6px',
          px: '3px',
          borderRadius: '8px',
        }}
      >
        {itemKeys.map((itemKey) => (
          <Skeleton key={itemKey} variant='rounded' width={itemSize} height={itemSize} />
        ))}
      </Box>
      <Skeleton variant='rounded' width={buttonWidth} height={itemSize} />
    </>
  )
}

export default DataPaginationSkeleton
