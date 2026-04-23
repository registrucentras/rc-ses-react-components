import { Radio, Skeleton, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'

import { ListWithIcons, ListWithIconsItemData, RcSesCard } from '@/library'
import palette from '@/theme/palette'

type Props = {
  title: string
  subtitle?: string
  listItems?: ListWithIconsItemData[]
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
    <Stack direction='row' alignItems='center' gap='12px'>
      <Skeleton variant='circular' width={20} height={20} />
      <Stack>
        <Skeleton variant='text' width={100} />
        <Skeleton variant='text' width={140} />
      </Stack>
    </Stack>
  ) : (
    <Stack direction='row' alignItems='flex-start' gap='12px'>
      <Radio
        checked={selected}
        sx={{
          p: 0,
          height: '20px',
          width: '20px',
          margin: '2px 0px',
        }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '24px',
            paddingRight: '4px',
          }}
        >
          {title}
        </Typography>
        {!!subtitle && (
          <Typography
            variant='body2'
            sx={{
              fontSize: '16px',
              fontWeight: 300,
              lineHeight: '24px',
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
        border: '2px solid',
        borderRadius: '12px',
        padding: { xs: '16px' },
        borderColor: selected ? palette.primary.main : palette.grey[300],
        transition: 'all 0.2s ease',
        gap: { xs: '8px', md: '4px' },
      }}
      title={titleTemplate}
      slotProps={{
        title: {
          sx: {
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '24px',
          },
        },
        content: {
          sx: {
            marginLeft: '32px',
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
