import { Box, Typography } from '@mui/material'

import RcSesCardShell from '@/components/common/CardShell'
import RcSesTitleBlock from '@/components/common/TitleBlock'
import { colorTokens } from '@/theme/colorTokens'
import { spacingTokens } from '@/theme/spacingTokens'
import { typographyTokens } from '@/theme/typographyTokens'

import RcSesStepCardFooter, {
  stepCardFooterLeadingSx,
  stepCardFooterTrailingSx,
} from './StepCardFooter'
import { RcSesStepCardProps } from './types'

function RcSesStepCard({
  activeStep,
  stepCount,
  onNext,
  onBack,
  onCancel,
  totalPrice,
  totalPriceLabel,
  actions,
  title,
  description,
  footer,
  children,
  testIds,
}: RcSesStepCardProps) {
  const resolvedFooter = footer ? (
    <Box
      sx={{
        width: '100%',
        '& > * > :first-of-type': stepCardFooterLeadingSx,
        '& > * > :last-child': stepCardFooterTrailingSx,
      }}
    >
      {footer}
    </Box>
  ) : (
    <RcSesStepCardFooter
      activeStep={activeStep}
      stepCount={stepCount}
      onNext={onNext}
      onBack={onBack}
      onCancel={onCancel}
      totalPrice={totalPrice}
      totalPriceLabel={totalPriceLabel}
      actions={actions}
    />
  )

  const resolvedDescription =
    description !== undefined && description !== null ? (
      <Typography
        component='span'
        sx={{
          fontSize: typographyTokens['font-size-body-regular'],
          lineHeight: typographyTokens['line-height-body-regular'],
          color: colorTokens['text-muted'],
        }}
      >
        {description}
      </Typography>
    ) : undefined

  return (
    <RcSesCardShell
      testIds={testIds}
      contentGap={spacingTokens['spacing-aliases-cards-step-card-section-gap']}
      footerGap={spacingTokens['spacing-aliases-cards-step-card-section-gap']}
      header={
        <RcSesTitleBlock
          title={title}
          description={resolvedDescription}
          titleVariant='h4'
        />
      }
      footer={resolvedFooter}
    >
      {children}
    </RcSesCardShell>
  )
}

export default RcSesStepCard
