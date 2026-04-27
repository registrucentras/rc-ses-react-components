import { Box, Skeleton } from '@mui/material'

interface DataPaginationSkeletonProps {
  isMobile: boolean
}

const SIZES = {
  item: '2.5rem',
  buttonDesktop: '4.8125rem',
  gap: '0.375rem',
  paddingX: '0.1875rem',
  radius: '0.5rem',
}

const ITEMS_COUNT = 5

const DataPaginationSkeleton = ({ isMobile }: DataPaginationSkeletonProps) => {
  const buttonWidth = isMobile ? SIZES.item : SIZES.buttonDesktop

  return (
    <>
      <Skeleton variant='rounded' width={buttonWidth} height={SIZES.item} />

      <Box
        sx={{
          display: 'flex',
          gap: SIZES.gap,
          px: SIZES.paddingX,
          borderRadius: SIZES.radius,
        }}
      >
        {Array.from({ length: ITEMS_COUNT }).map((_, index) => (
          <Skeleton
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            variant='rounded'
            width={SIZES.item}
            height={SIZES.item}
          />
        ))}
      </Box>

      <Skeleton variant='rounded' width={buttonWidth} height={SIZES.item} />
    </>
  )
}

export default DataPaginationSkeleton
