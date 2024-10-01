import { Grid } from '@mui/material'

import CollapseChevronsIcon from '@/assets/icons/CollapseChevronsIcon'
import ExpandChevronsIcon from '@/assets/icons/ExpandChevronsIcon'
import useAccordionController from '@/components/common/Accordion/hooks/useAccordionController'
import Button from '@/components/common/Button'

type Props = {
  controller: ReturnType<typeof useAccordionController>
}
function AccordionCollapseControls({ controller }: Props) {
  const { collapseAll, expandAll } = controller

  return (
    <Grid
      container
      sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}
    >
      <Grid item>
        <Button
          variant='text'
          size='small'
          startIcon={<ExpandChevronsIcon />}
          onClick={expandAll}
        >
          Praskleisti visus
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant='text'
          size='small'
          startIcon={<CollapseChevronsIcon />}
          onClick={collapseAll}
        >
          Suskleisti visus
        </Button>
      </Grid>
    </Grid>
  )
}

export default AccordionCollapseControls
