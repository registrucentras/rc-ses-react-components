import { Grid2 } from '@mui/material'

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
    <Grid2
      container
      sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}
    >
      <Grid2>
        <Button
          variant='text'
          size='small'
          startIcon={<ExpandChevronsIcon />}
          onClick={expandAll}
        >
          Praskleisti visus
        </Button>
      </Grid2>
      <Grid2>
        <Button
          variant='text'
          size='small'
          startIcon={<CollapseChevronsIcon />}
          onClick={collapseAll}
        >
          Suskleisti visus
        </Button>
      </Grid2>
    </Grid2>
  )
}

export default AccordionCollapseControls
