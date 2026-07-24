import { Avatar, Box, IconButton, Radio, Stack, Typography } from '@mui/material'
import { RefObject } from 'react'
import { useTranslation } from 'react-i18next'

import CaretDownIcon from '@/assets/icons/CaretDownIcon'
import CaretUpIcon from '@/assets/icons/CaretUpIcon'
import ListIcon from '@/assets/icons/ListIcon'
import RcSesSimpleCheckbox from '@/components/form/inputs/SimpleCheckbox'
import palette from '@/theme/palette'

import { AdvancedListItemLeading as AdvancedListItemLeadingData } from '../AdvancedListItem.types'

type Props = {
  leading: AdvancedListItemLeadingData
  disabled?: boolean
  inputRef?: RefObject<HTMLInputElement>
  expandableId?: string
  expanded?: boolean
  titleId?: string
}

const stop = (e: { stopPropagation: () => void }) => e.stopPropagation()

const getAccessibleNameProps = (
  explicitLabel: string | undefined,
  titleId: string | undefined,
) => {
  if (explicitLabel) return { 'aria-label': explicitLabel }
  if (titleId) return { 'aria-labelledby': titleId }
  return {}
}

const AdvancedListItemLeading = ({
  leading,
  disabled,
  inputRef,
  expandableId,
  expanded,
  titleId,
}: Props) => {
  const { t } = useTranslation('common', {
    keyPrefix: 'components.AdvancedListItemLeading',
  })

  if (leading.type === 'reorder') {
    return (
      <Stack alignItems='center' onClick={stop}>
        {!!leading.onMoveUp && (
          <IconButton
            aria-label={t('moveUp')}
            size='small'
            disabled={disabled || leading.moveUpDisabled}
            onClick={(e) => {
              stop(e)
              leading.onMoveUp?.()
            }}
            sx={{ padding: '0.125rem' }}
          >
            <CaretUpIcon size={16} weight='regular' fillColor={palette.primary[700]} />
          </IconButton>
        )}
        {!!leading.onMoveDown && (
          <IconButton
            aria-label={t('moveDown')}
            size='small'
            disabled={disabled || leading.moveDownDisabled}
            onClick={(e) => {
              stop(e)
              leading.onMoveDown?.()
            }}
            sx={{ padding: '0.125rem' }}
          >
            <CaretDownIcon size={16} fillColor={palette.primary[700]} />
          </IconButton>
        )}
      </Stack>
    )
  }

  if (leading.type === 'drag') {
    return (
      <Box
        aria-label={leading['aria-label']}
        aria-hidden={!leading['aria-label']}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '1.5rem',
          height: '1.5rem',
          cursor: disabled ? 'default' : 'grab',
        }}
      >
        <ListIcon size={20} fillColor={palette.grey[500]} />
      </Box>
    )
  }

  if (leading.type === 'icon') {
    const { icon: Icon } = leading

    return (
      <Box
        aria-label={leading['aria-label']}
        aria-hidden={!leading['aria-label']}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '1.5rem',
          height: '1.5rem',
        }}
      >
        <Icon size={24} fillColor={palette.grey[700]} />
      </Box>
    )
  }

  if (leading.type === 'avatar') {
    return (
      <Avatar
        src={leading.src}
        alt={leading.alt}
        sx={{
          display: 'flex',
          width: '2rem',
          height: '2rem',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: palette.grey[100],
          color: palette.grey[600],
          fontSize: '0.8125rem',
          fontWeight: 400,
          lineHeight: '1.125rem',
        }}
      >
        {leading.initials}
      </Avatar>
    )
  }

  if (leading.type === 'index') {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '1.5rem',
          height: '1.5rem',
        }}
      >
        <Typography
          variant='body2'
          sx={{ fontSize: '0.9375rem', fontWeight: 400, lineHeight: '1.375rem' }}
          color={palette.grey[600]}
        >
          {leading.index}
        </Typography>
      </Box>
    )
  }

  if (leading.type === 'checkbox') {
    return (
      <RcSesSimpleCheckbox
        checked={leading.checked}
        disabled={disabled}
        inputRef={inputRef}
        inputProps={{
          ...getAccessibleNameProps(leading['aria-label'], titleId),
          ...(expandableId && {
            'aria-expanded': expanded,
            'aria-controls': expandableId,
          }),
        }}
        onClick={stop}
        onChange={(e) => {
          stop(e)
          leading.onChange(e.target.checked)
        }}
        sx={{ padding: 0 }}
      />
    )
  }
  // change to RcSesRadio when it is implemented
  if (leading.type === 'radio') {
    return (
      <Radio
        checked={leading.checked}
        disabled={disabled}
        name={leading.name}
        inputRef={inputRef}
        inputProps={{
          ...getAccessibleNameProps(leading['aria-label'], titleId),
          ...(expandableId && {
            'aria-expanded': expanded,
            'aria-controls': expandableId,
          }),
        }}
        onClick={stop}
        onChange={(e) => {
          stop(e)
          leading.onChange(e.target.checked)
        }}
        sx={{ padding: 0 }}
      />
    )
  }

  return null
}

export default AdvancedListItemLeading
