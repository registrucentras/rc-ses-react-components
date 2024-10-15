import { Container, Grid } from '@mui/material'
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
}

function ServiceFormContainer({
  accordionController,
  children,
  showAccordionCollapseControls = true,
  showProgressStepper = false,
}: Props) {
  const { state } = accordionController

  const areAccordionCollapseControlsVisible = React.useMemo(() => {
    if (Object.keys(state).length <= 1 || !showAccordionCollapseControls) return false
    return true
  }, [showAccordionCollapseControls, state])

  return (
    <Container
      sx={{
        backgroundColor: { xs: palette.grey['100'], md: 'white' },
        pb: { md: 8 },
        pt: { xs: 0, md: 6 },
        px: { xs: 0, md: 3 },
      }}
    >
      <Grid
        container
        columns={showProgressStepper ? 2 : 1}
        sx={{ flexWrap: 'nowrap', justifyContent: 'center' }}
      >
        {showProgressStepper && (
          <Grid item sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
            <ServiceWizardStepper steps={state} />
          </Grid>
        )}

        <Grid item sx={{ width: { xs: '100%', md: '840px' } }}>
          {areAccordionCollapseControlsVisible && (
            <AccordionCollapseControls controller={accordionController} />
          )}
          {children}
        </Grid>
      </Grid>
    </Container>
  )
}

export default ServiceFormContainer
