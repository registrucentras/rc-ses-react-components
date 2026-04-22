import { Box } from '@mui/material'

import ListWithIconsItem from './components/ListWithIconsItem'

export interface ListWithIconsItemData {
  id: string
  icon?: React.ReactNode
  text?: string
  disabled?: boolean
  tooltip?: string
}

export interface ListWithIconsProps {
  items?: ListWithIconsItemData[]
  layout?: 'horizontal' | 'vertical'
  isLoading?: boolean
  skeletonCount?: number
}

const ListWithIcons = ({
  items,
  layout = 'vertical',
  isLoading = false,
  skeletonCount = 4,
}: ListWithIconsProps) => {
  const shouldShowSkeleton = isLoading && !items

  return (
    <Box
      component='ul'
      sx={{
        p: 0,
        m: 0,
        width: '100%',
        minWidth: { md: 120 },
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: layout === 'horizontal' ? 'row' : 'column',
        },
        flexWrap: layout === 'horizontal' ? 'wrap' : 'nowrap',
        gap: {
          xs: '4px',
          md: layout === 'horizontal' ? '16px' : '8px',
        },
      }}
    >
      {shouldShowSkeleton ? (
        <>
          {Array.from({ length: skeletonCount }).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <ListWithIconsItem key={index} isLoading />
          ))}
        </>
      ) : (
        items?.map((item) => <ListWithIconsItem key={item.id} {...item} />)
      )}
    </Box>
  )
}

export default ListWithIcons
