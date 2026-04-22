import { Skeleton } from '@mui/material'
import { Box } from '@mui/system'

interface DataPaginationSkeletonProps {
  isMobile: boolean
}

const DataPaginationSkeleton = ({ isMobile }: DataPaginationSkeletonProps) => {
  const buttonWidth = isMobile ? 40 : 77
  const itemSize = 40
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
        {Array.from({ length: 5 }).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Skeleton key={index} variant='rounded' width={itemSize} height={itemSize} />
        ))}
      </Box>
      <Skeleton variant='rounded' width={buttonWidth} height={itemSize} />
    </>
  )
}

export default DataPaginationSkeleton
