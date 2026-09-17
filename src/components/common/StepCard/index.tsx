import { Box, Typography } from '@mui/material'

import RcSesCardShell from '@/components/common/CardShell'
import RcSesTitleBlock from '@/components/common/TitleBlock'
import { typography } from '@/theme/light/MuiTypography'
import { spacing } from '@/theme/spacing'

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
    />
  )

  const resolvedDescription =
    description !== undefined && description !== null ? (
      <Typography component='span' sx={typography.bodyRegularMuted}>
        {description}
      </Typography>
    ) : undefined

  return (
    <RcSesCardShell
      testIds={testIds}
      contentGap={spacing.sectionGap}
      footerGap={spacing.sectionGap}
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
