import { Box, IconButton, Radio, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import CaretRightBoldIcon from '@/assets/icons/CaretRightBoldIcon'
import MinusRegularIcon from '@/assets/icons/MinusIcon'
import PlusRegularIcon from '@/assets/icons/PlusIcon'
import TrashIcon from '@/assets/icons/TrashIcon'
import RcSesBadge, { type RcSesBadgeProps } from '@/components/common/Badge'
import RcSesButton from '@/components/common/Button'
import RcSesSwitch from '@/components/common/Switch'
import RcSesSimpleCheckbox from '@/components/form/inputs/SimpleCheckbox'
import palette from '@/theme/palette'

import {
  AdvancedListItemStatusColor,
  AdvancedListItemTrailing as AdvancedListItemTrailingData,
} from '../AdvancedListItem.types'

type Props = {
  trailing: AdvancedListItemTrailingData
  disabled?: boolean
}

const NO_SHRINK_SX = { flexShrink: 0 } as const

const STEPPER_BUTTON_SX = {
  padding: '0.5rem 0.25rem',
  borderRadius: '0.375rem',
} as const

const STATUS_VARIANT_MAP: Record<
  AdvancedListItemStatusColor,
  RcSesBadgeProps['variant']
> = {
  grey: 'neutral',
  warning: 'warning',
  success: 'success',
  error: 'error',
}

const PRICE_BLOCK_SX = {
  display: 'inline-flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
  gap: '0.125rem',
} as const

const ACTION_BUTTON_SX = {
  height: 'auto',
  padding: '0.5rem 0.25rem',
  fontWeight: 500,
  lineHeight: '1.25rem',
  color: palette.primary[700],
  '&:not(.Mui-disabled) svg path': {
    fill: palette.primary[700],
  },
  '.MuiButton-startIcon': {
    marginRight: '0.375rem',
  },
} as const

const stop = (e: React.SyntheticEvent) => e.stopPropagation()

const stopAnd = (fn: () => void) => (e: React.SyntheticEvent) => {
  stop(e)
  fn()
}

const withStop =
  <E extends React.SyntheticEvent>(handler: (e: E) => void) =>
  (e: E) => {
    stop(e)
    handler(e)
  }

const AdvancedListItemTrailing = ({ trailing, disabled }: Props) => {
  const { t } = useTranslation('common', {
    keyPrefix: 'components.AdvancedListItemTrailing',
  })

  if (trailing.type === 'actions') {
    return (
      <Stack direction='row' gap='0.5rem' onClick={stop} sx={NO_SHRINK_SX}>
        {trailing.actions.map(
          ({ label, icon: Icon, disabled: actionDisabled, onClick }) => (
            <RcSesButton
              key={label}
              variant='link'
              disabled={disabled || actionDisabled}
              startIcon={Icon ? <Icon size={20} /> : undefined}
              onClick={stopAnd(onClick)}
              sx={ACTION_BUTTON_SX}
            >
              {label}
            </RcSesButton>
          ),
        )}
      </Stack>
    )
  }

  if (trailing.type === 'toggle') {
    return (
      <RcSesSwitch
        checked={trailing.checked}
        disabled={disabled}
        ariaLabel={trailing['aria-label'] ?? t('toggle')}
        onClick={stop}
        onChange={withStop((e) => trailing.onChange(e.target.checked))}
      />
    )
  }

  if (trailing.type === 'status') {
    return (
      <RcSesBadge
        label={trailing.label}
        variant={STATUS_VARIANT_MAP[trailing.color ?? 'grey']}
        size='small'
      />
    )
  }

  if (trailing.type === 'price') {
    return (
      <Stack direction='row' alignItems='center' gap='0.5rem' sx={NO_SHRINK_SX}>
        <Box sx={PRICE_BLOCK_SX}>
          <Typography
            variant='body1'
            sx={{ fontSize: '1rem', fontWeight: 600, lineHeight: '1.375rem' }}
            color={palette.grey[900]}
          >
            {trailing.amount}
          </Typography>
          {!!trailing.caption && (
            <Typography
              variant='caption'
              sx={{ fontSize: '0.8125rem', lineHeight: '1.125rem' }}
              color={palette.grey[600]}
            >
              {trailing.caption}
            </Typography>
          )}
        </Box>
        {!!trailing.onDelete && (
          <IconButton
            aria-label={trailing.deleteAriaLabel ?? t('delete')}
            size='small'
            disabled={disabled}
            onClick={stopAnd(() => trailing.onDelete?.())}
            sx={{ padding: '0.5rem 0.25rem' }}
          >
            <TrashIcon size={20} fillColor={palette.grey[700]} />
          </IconButton>
        )}
      </Stack>
    )
  }

  if (trailing.type === 'checkbox') {
    return (
      <RcSesSimpleCheckbox
        checked={trailing.checked}
        disabled={disabled}
        inputProps={{ 'aria-label': trailing['aria-label'] }}
        onClick={stop}
        onChange={withStop((e) => trailing.onChange(e.target.checked))}
        sx={{ padding: 0, ...NO_SHRINK_SX }}
      />
    )
  }
  // change to RcSesRadio when it is implemented
  if (trailing.type === 'radio') {
    return (
      <Radio
        checked={trailing.checked}
        disabled={disabled}
        name={trailing.name}
        inputProps={{ 'aria-label': trailing['aria-label'] }}
        onClick={stop}
        onChange={withStop((e) => trailing.onChange(e.target.checked))}
        sx={{ padding: 0, ...NO_SHRINK_SX }}
      />
    )
  }

  if (trailing.type === 'chevron') {
    return (
      <Box sx={{ display: 'flex', flexShrink: 0 }} aria-hidden>
        <CaretRightBoldIcon size={16} fillColor={palette.grey[500]} />
      </Box>
    )
  }

  if (trailing.type === 'stepper') {
    const { value, onChange, min, max } = trailing
    const atMin = min !== undefined && value <= min
    const atMax = max !== undefined && value >= max

    return (
      <Stack
        direction='row'
        alignItems='center'
        gap='0.25rem'
        onClick={stop}
        sx={NO_SHRINK_SX}
      >
        <IconButton
          aria-label={t('decrease')}
          size='small'
          disabled={disabled || atMin}
          onClick={stopAnd(() => onChange(value - 1))}
          sx={STEPPER_BUTTON_SX}
        >
          <MinusRegularIcon size={20} fillColor={palette.primary[700]} />
        </IconButton>
        <Typography
          aria-label={trailing['aria-label']}
          variant='body2'
          sx={{ minWidth: '1.5rem', textAlign: 'center', fontWeight: 600 }}
        >
          {value}
        </Typography>
        <IconButton
          aria-label={t('increase')}
          size='small'
          disabled={disabled || atMax}
          onClick={stopAnd(() => onChange(value + 1))}
          sx={STEPPER_BUTTON_SX}
        >
          <PlusRegularIcon size={20} fillColor={palette.primary[700]} />
        </IconButton>
      </Stack>
    )
  }

  return null
}

export default AdvancedListItemTrailing
