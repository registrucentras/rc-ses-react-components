import { Box, Skeleton } from '@mui/material'

import { borderTokens } from '@/theme/borderTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { spacingTokens } from '@/theme/spacingTokens'

interface DataPaginationSkeletonProps {
  isMobile: boolean
}

const SIZES = {
  item: spacingRoleBasedTokens['space-40'],
  buttonDesktop: spacingRoleBasedTokens['space-80'],
  gap: spacingTokens['spacing-aliases-pagination-button-gap'],
  radius: borderTokens['radius-button'],
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
