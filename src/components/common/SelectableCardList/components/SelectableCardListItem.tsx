import { Box, Radio, Skeleton, Stack, Typography } from '@mui/material'

import RcSesCard from '@/components/common/Card'
import ListWithIcons from '@/components/common/ListWithIcons'
import palette from '@/theme/palette'

import { ListWithIconsItemData } from '../../ListWithIcons/ListWithIcons.types'

type Props = {
  title: string
  subtitle?: string
  listItems: ListWithIconsItemData[]
  selected: boolean
  onSelect: () => void
  isLoading?: boolean
}

const SelectableCardListItem = ({
  title,
  subtitle,
  listItems,
  selected,
  onSelect,
  isLoading = false,
}: Props) => {
  const titleTemplate = isLoading ? (
    <Stack direction='row' alignItems='center' gap='0.75rem'>
      <Skeleton variant='circular' width={20} height={20} />
      <Skeleton variant='text' width={100} />
    </Stack>
  ) : (
    <Stack direction='row' alignItems='flex-start' gap='0.75rem'>
      <Radio
        aria-label={`Select ${title}`}
        checked={selected}
        sx={{
          p: 0,
          height: '1.25rem',
          width: '1.25rem',
          margin: '0.125rem 0rem',
        }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Typography
          variant='h3'
          sx={{
            fontSize: '1rem',
            fontWeight: 600,
            lineHeight: '1.5rem',
            paddingRight: '0.25rem',
          }}
        >
          {title}
        </Typography>
        {!!subtitle && (
          <Typography
            variant='body2'
            sx={{
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: '1.5rem',
              color: palette.grey[800],
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    </Stack>
  )
  return (
    <RcSesCard
      onClick={onSelect}
      sx={{
        cursor: isLoading ? 'default' : 'pointer',
        pointerEvents: isLoading ? 'none' : 'auto',
        border: '0.125rem solid',
        borderRadius: '0.75rem',
        padding: { xs: '1rem' },
        borderColor: selected ? palette.primary.main : palette.grey[300],
        transition: 'all 0.2s ease',
        gap: { xs: '0.5rem', md: '0.25rem' },
      }}
      title={titleTemplate}
      slotProps={{
        title: {
          sx: {
            fontSize: '1rem',
            fontWeight: 600,
            lineHeight: '1.5rem',
          },
        },
        content: {
          sx: {
            marginLeft: '2rem',
            backgroundColor: 'transparent',
          },
        },
      }}
    >
      <ListWithIcons items={listItems} layout='horizontal' isLoading={isLoading} />
    </RcSesCard>
  )
}

export default SelectableCardListItem
