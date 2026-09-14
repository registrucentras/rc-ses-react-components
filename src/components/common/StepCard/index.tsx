import { Typography } from '@mui/material'

import RcSesCardShell from '@/components/common/CardShell'
import RcSesTitleBlock from '@/components/common/TitleBlock'

import RcSesStepCardFooter from './StepCardFooter'
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
  const resolvedFooter = footer ?? (
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
      <Typography
        component='span'
        sx={{
          color: 'grey.500',
          fontSize: 15,
          fontWeight: 400,
          lineHeight: '22px',
        }}
      >
        {description}
      </Typography>
    ) : undefined

  return (
    <RcSesCardShell
      testIds={testIds}
      contentGap='1.5rem'
      footerGap='1.5rem'
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
