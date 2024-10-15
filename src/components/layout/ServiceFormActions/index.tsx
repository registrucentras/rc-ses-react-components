import { Card, Grid } from '@mui/material'

import ArrowRightIcon from '@/assets/icons/ArrowRightIcon'
import CaretLeftIcon from '@/assets/icons/CaretLeftIcon'
import Button from '@/components/common/Button'
import palette from '@/theme/palette'

type Props = {
  onDiscard: () => void
  onSaveDraft: () => void
  onSubmit: () => void
  draftDisabled?: boolean
  submitDisabled?: boolean
}
function ServiceFormActions({
  onDiscard,
  onSaveDraft,
  onSubmit,
  draftDisabled,
  submitDisabled,
}: Props) {
  return (
    <>
      <Card
        sx={{
          backgroundColor: palette.primary['50'],
          borderColor: palette.primary['300'],
          borderRadius: { xs: 0, md: '.375rem' },
          borderLeftWidth: { xs: 0, md: '1px' },
          borderRightWidth: { xs: 0, md: '1px' },
          px: { xs: 2, md: 4 },
          py: 4,
        }}
      >
        <Grid
          container
          sx={{
            alignItems: 'center',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            justifyContent: { xs: 'center', md: 'space-between' },
          }}
        >
          <Grid item>
            <Button
              disabled={draftDisabled === true}
              onClick={() => onSaveDraft()}
              startIcon={<CaretLeftIcon />}
              variant='text'
            >
              Baigti pildyti vėliau
            </Button>
          </Grid>
          <Grid item>
            <Button
              disabled={submitDisabled === true}
              endIcon={<ArrowRightIcon />}
              onClick={() => onSubmit()}
              size='large'
              variant='contained'
            >
              Baigti pildyti ir pridėti į krepšelį
            </Button>
          </Grid>
        </Grid>
      </Card>

      <Grid
        container
        sx={{ justifyContent: 'center', py: { xs: '1.5rem', md: '.875rem' } }}
      >
        <Grid item>
          <Button
            variant='text'
            size='small'
            color='grey'
            sx={{ fontWeight: 400, textDecoration: 'underline' }}
            onClick={() => onDiscard()}
          >
            Atšaukti pildymą ir ištrinti formos duomenis
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default ServiceFormActions
