import { Box, BoxProps, Radio, Skeleton, Stack, Typography } from '@mui/material'

import RcSesButton from '@/components/common/Button'
import ListWithIcons from '@/components/common/ListWithIcons'
import palette, { common } from '@/theme/palette'

import { ListWithIconsItemData } from '../../ListWithIcons/ListWithIcons.types'

type Props = {
  title: string
  subtitle?: string
  listItems: ListWithIconsItemData[]
  selected: boolean
  onSelect: () => void
  isLoading?: boolean
  hasActionButton?: boolean
  actionButtonLabel?: string
  onActionButtonClick?: () => void
  className?: string
}

type ShellProps = Props & Omit<BoxProps, keyof Props | 'children'>

const SelectableCardListItem = ({
  title,
  subtitle,
  listItems,
  selected,
  onSelect,
  isLoading = false,
  hasActionButton = false,
  actionButtonLabel,
  onActionButtonClick,
  className,
  sx,
  ...boxProps
}: ShellProps) => {
  const titleTemplate = isLoading ? (
    <Stack
      direction='row'
      sx={{
        alignItems: 'center',
        gap: '0.75rem',
      }}
    >
      <Skeleton variant='circular' width={20} height={20} />
      <Skeleton variant='text' width={100} />
    </Stack>
  ) : (
    <Stack
      direction='row'
      sx={{
        alignItems: 'flex-start',
        gap: '0.75rem',
      }}
    >
      <Radio
        aria-label={`Select ${title}`}
        checked={selected}
        onChange={(e) => {
          e.stopPropagation()
          onSelect()
        }}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            e.stopPropagation()
            onSelect()
          }
        }}
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
    <Box
      {...boxProps}
      className={className}
      onClick={onSelect}
      sx={[
        {
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: common.white,
          border: '0.125rem solid',
          borderColor: selected ? palette.primary.main : palette.grey[300],
          borderRadius: '0.75rem',
          p: '1rem',
          gap: { xs: '0.5rem', md: '0.25rem' },
          minWidth: 0,
          position: 'relative',
          cursor: isLoading ? 'default' : 'pointer',
          pointerEvents: isLoading ? 'none' : 'auto',
          transition: 'border-color 0.2s ease',
          '&:has(input:focus-visible)': {
            borderColor: palette.grey[900],
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Stack
        direction='row'
        sx={{
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {titleTemplate}
        {isLoading ? (
          <Skeleton variant='rounded' width={100} height={38} />
        ) : (
          hasActionButton && (
            <RcSesButton
              color='grey'
              sx={{
                height: 'auto',
                padding: '0.5rem 1rem',
                fontSize: '0.875rem',
                lineHeight: '1.25rem',
                flexShrink: 0,
                '&.MuiButton-colorGrey': {
                  color: palette.grey[800],
                },
              }}
              onClick={(e) => {
                e.stopPropagation()
                onActionButtonClick?.()
              }}
              variant='outlined'
            >
              {actionButtonLabel}
            </RcSesButton>
          )
        )}
      </Stack>

      {(isLoading || (!!listItems && listItems.length > 0)) && (
        <Box sx={{ marginLeft: '2rem' }}>
          <ListWithIcons items={listItems} layout='horizontal' isLoading={isLoading} />
        </Box>
      )}
    </Box>
  )
}

export default SelectableCardListItem
