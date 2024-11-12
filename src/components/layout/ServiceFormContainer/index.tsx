import { Container, Grid } from '@mui/material'
import { ContainerProps } from '@mui/system'
import React from 'react'

import useAccordionController from '@/components/common/Accordion/hooks/useAccordionController'
import palette from '@/theme/palette'

import ServiceWizardStepper from '../ServiceWizardStepper'
import AccordionCollapseControls from './components/AccordionCollapseControls'

type Props = {
  accordionController: ReturnType<typeof useAccordionController>
  children: React.ReactNode
  showAccordionCollapseControls?: boolean
  showProgressStepper?: boolean
  slotProps?: {
    container: Partial<ContainerProps>
  }
}

function RcSesServiceFormContainer({
  accordionController,
  children,
  showAccordionCollapseControls = true,
  showProgressStepper = false,
  slotProps,
}: Props) {
  const { state } = accordionController

  const areAccordionCollapseControlsVisible = React.useMemo(() => {
    if (Object.keys(state).length <= 1 || !showAccordionCollapseControls) return false
    return true
  }, [showAccordionCollapseControls, state])

  return (
    <Container
      maxWidth={showProgressStepper ? 'lg' : 'md'}
      {...slotProps?.container}
      sx={{
        backgroundColor: { xs: palette.grey['100'], md: 'white' },
        pb: { md: 8 },
        pt: { xs: 0, md: 6 },
        px: { xs: 0, md: 3 },
        ...slotProps?.container?.sx,
      }}
    >
      <Grid
        container
        columns={showProgressStepper ? 2 : 1}
        sx={{ columnGap: 7.5, flexWrap: 'nowrap', justifyContent: 'center' }}
      >
        {showProgressStepper && (
          <Grid item sx={{ display: { xs: 'none', md: 'block' }, flex: '0 0 270px' }}>
            <ServiceWizardStepper steps={state} />
          </Grid>
        )}

        <Grid item sx={{ flexGrow: 1 }}>
          {areAccordionCollapseControlsVisible && (
            <AccordionCollapseControls controller={accordionController} />
          )}
          {children}
        </Grid>
      </Grid>
    </Container>
  )
}

export default RcSesServiceFormContainer
