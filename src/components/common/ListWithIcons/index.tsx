import { Box } from '@mui/material'

import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { spacingTokens } from '@/theme/spacingTokens'

import { ListWithIconsItemData } from './ListWithIcons.types'
import ListWithIconsItem from './components/ListWithIconsItem'

export interface ListWithIconsProps {
  items: ListWithIconsItemData[]
  layout?: 'horizontal' | 'vertical'
  isLoading?: boolean
  skeletonCount?: number
}

const ListWithIcons = ({
  items,
  layout = 'vertical',
  isLoading = false,
  skeletonCount = 3,
}: ListWithIconsProps) => (
  <Box
    component='ul'
    sx={{
      p: spacingRoleBasedTokens['space-0'],
      m: spacingRoleBasedTokens['space-0'],
      width: '100%',
      minWidth: { md: '7.5rem' },
      display: 'flex',
      flexDirection: {
        xs: 'column',
        md: layout === 'horizontal' ? 'row' : 'column',
      },
      flexWrap: layout === 'horizontal' ? 'wrap' : 'nowrap',
      gap: spacingTokens['spacing-aliases-meta-item-gap'],
    }}
  >
    {isLoading ? (
      <>
        {Array.from({ length: skeletonCount }).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ListWithIconsItem key={index} isLoading />
        ))}
      </>
    ) : (
      // eslint-disable-next-line react/no-array-index-key
      items?.map((item, index) => <ListWithIconsItem key={index} {...item} />)
    )}
  </Box>
)

export default ListWithIcons
