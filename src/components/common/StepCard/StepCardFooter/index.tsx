import { Box, Button, ButtonProps, Typography } from '@mui/material'
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ShoppingCartIcon,
} from '@/assets/icons/phosphorIcons'
import RcSesCardFooter from '@/components/common/CardShell/CardFooter'
import { colorTokens } from '@/theme/colorTokens'
import { iconSizeTokens } from '@/theme/sizeTokens'
import { spacingTokens } from '@/theme/spacingTokens'
import { typographyTokens } from '@/theme/typographyTokens'

import { RcSesStepCardAction, RcSesStepCardActions } from '../types'

export interface RcSesStepCardFooterProps {
  activeStep: number
  stepCount: number
  onNext?: () => void
  onBack?: () => void
  onCancel?: () => void
  totalPrice?: string
  totalPriceLabel?: string
  actions?: RcSesStepCardActions
}

const responsiveWidthSx = { width: { xs: '100%', sm: 'auto' } } as const

export const stepCardFooterLeadingSx = {
  mt: { xs: spacingTokens['spacing-primitives-8'], sm: 0 },
  order: { xs: 1, sm: 0 },
  ...responsiveWidthSx,
} as const

export const stepCardFooterTrailingSx = {
  order: { xs: 0, sm: 1 },
  ...responsiveWidthSx,
} as const

function PriceSummary({ label, price }: { label: string; price: string }) {
  return (
    <Box
      sx={{
        alignItems: { xs: 'baseline', sm: 'flex-end' },
        display: 'flex',
        flexDirection: { xs: 'row', sm: 'column' },
        gap: spacingTokens['spacing-primitives-2'],
        justifyContent: 'center',
        textAlign: { xs: 'center', sm: 'right' },
      }}
    >
      <Typography variant='caption' sx={{ color: colorTokens['text-secondary'] }}>
        {label}:
      </Typography>
      <Typography
        variant='h5'
        sx={{
          fontSize: typographyTokens['font-size-heading-h3'],
          fontWeight: 500,
        }}
      >
        {price}
      </Typography>
    </Box>
  )
}

function createActionButtonProps(
  action: RcSesStepCardAction | undefined,
  defaultIcon: ReactNode,
  side: 'start' | 'end',
): ButtonProps {
  const icon = action?.icon === undefined ? defaultIcon : action.icon

  return {
    type: action?.form ? 'submit' : 'button',
    form: action?.form,
    loading: action?.loading,
    disabled: action?.disabled,
    loadingPosition: icon ? side : 'center',
    [side === 'start' ? 'startIcon' : 'endIcon']: icon,
  }
}

function RcSesStepCardFooter({
  activeStep,
  stepCount,
  onNext,
  onBack,
  onCancel,
  totalPrice,
  totalPriceLabel,
  actions,
}: RcSesStepCardFooterProps) {
  const { t } = useTranslation('common')

  const isFirstStep = activeStep <= 0
  const isLastStep = activeStep >= stepCount - 1

  const leadingAction = isFirstStep ? actions?.cancel : actions?.back
  const showLeading = leadingAction !== false
  const leading = leadingAction || undefined
  const leadingLabel =
    leading?.label ??
    t(isFirstStep ? 'components.StepCard.cancel' : 'components.StepCard.back')
  const trailingLabel =
    actions?.next?.label ??
    t(isLastStep ? 'components.StepCard.addToCart' : 'components.StepCard.continue')
  const handleLeadingClick = isFirstStep ? onCancel : onBack
  const showPriceSummary = isLastStep && Boolean(totalPrice)

  return (
    <RcSesCardFooter align={showLeading ? 'between' : 'end'}>
      {showLeading ? (
        <Box sx={stepCardFooterLeadingSx}>
          <Button
            color='grey'
            variant='outlined'
            onClick={handleLeadingClick}
            fullWidth
            sx={responsiveWidthSx}
            {...createActionButtonProps(
              leading,
              isFirstStep ? undefined : (
                <ArrowLeftIcon size={iconSizeTokens['icon-size-24']} />
              ),
              'start',
            )}
          >
            {leadingLabel}
          </Button>
        </Box>
      ) : null}
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: spacingTokens['spacing-primitives-8'],
          ...stepCardFooterTrailingSx,
        }}
      >
        {showPriceSummary ? (
          <PriceSummary
            label={totalPriceLabel ?? t('components.StepCard.totalWithoutVat')}
            price={totalPrice as string}
          />
        ) : null}
        <Button
          variant='contained'
          onClick={onNext}
          sx={responsiveWidthSx}
          {...createActionButtonProps(
            actions?.next,
            isLastStep ? (
              <ShoppingCartIcon size={iconSizeTokens['icon-size-24']} />
            ) : (
              <ArrowRightIcon size={iconSizeTokens['icon-size-24']} />
            ),
            'end',
          )}
        >
          {trailingLabel}
        </Button>
      </Box>
    </RcSesCardFooter>
  )
}

export default RcSesStepCardFooter
