import { Box, Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import ArrowLeftIcon from '@/assets/icons/ArrowLeftIcon'
import ArrowRightIcon from '@/assets/icons/ArrowRightIcon'
import ShoppingCartIcon from '@/assets/icons/ShoppingCartIcon'
import RcSesCardFooter from '@/components/common/CardShell/CardFooter'
import { typography } from '@/theme/light/MuiTypography'

export interface RcSesStepCardFooterProps {
  activeStep: number
  stepCount: number
  onNext?: () => void
  onBack?: () => void
  onCancel?: () => void
  totalPrice?: string
}

const responsiveWidthSx = { width: { xs: '100%', sm: 'auto' } } as const

export const stepCardFooterLeadingSx = {
  mt: { xs: 0.5, sm: 0 },
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
        gap: { xs: 1, sm: 0.25 },
        justifyContent: 'center',
        textAlign: { xs: 'center', sm: 'right' },
      }}
    >
      <Typography variant='caption' sx={{ color: 'grey.500' }}>
        {label}:
      </Typography>
      <Typography variant='h5' sx={typography.priceEmphasis}>
        {price}
      </Typography>
    </Box>
  )
}

function RcSesStepCardFooter({
  activeStep,
  stepCount,
  onNext,
  onBack,
  onCancel,
  totalPrice,
}: RcSesStepCardFooterProps) {
  const { t } = useTranslation('common')

  const isFirstStep = activeStep <= 0
  const isLastStep = activeStep >= stepCount - 1

  const leadingLabel = t(
    isFirstStep ? 'components.StepCard.cancel' : 'components.StepCard.back',
  )
  const trailingLabel = t(
    isLastStep ? 'components.StepCard.addToCart' : 'components.StepCard.continue',
  )
  const handleLeadingClick = isFirstStep ? onCancel : onBack
  const showPriceSummary = isLastStep && Boolean(totalPrice)

  return (
    <RcSesCardFooter align='between'>
      <Box sx={stepCardFooterLeadingSx}>
        <Button
          color='grey'
          variant='outlined'
          onClick={handleLeadingClick}
          fullWidth
          sx={responsiveWidthSx}
          startIcon={isFirstStep ? undefined : <ArrowLeftIcon size={24} />}
        >
          {leadingLabel}
        </Button>
      </Box>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
          ...stepCardFooterTrailingSx,
        }}
      >
        {showPriceSummary ? (
          <PriceSummary
            label={t('components.StepCard.totalWithoutVat')}
            price={totalPrice as string}
          />
        ) : null}
        <Button
          variant='contained'
          onClick={onNext}
          sx={responsiveWidthSx}
          endIcon={
            isLastStep ? <ShoppingCartIcon size={24} /> : <ArrowRightIcon size={24} />
          }
        >
          {trailingLabel}
        </Button>
      </Box>
    </RcSesCardFooter>
  )
}

export default RcSesStepCardFooter
