import type { AutocompleteRenderInputParams } from '@mui/material/Autocomplete'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import { useTranslation } from 'react-i18next'

import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon'
import palette from '@/theme/palette'

function AutocompleteInput(props: AutocompleteRenderInputParams) {
  const { t } = useTranslation('input', {
    keyPrefix: 'components.RcSesFormControlWrapper',
  })

  // MUI 9 replaced the params' inputProps/InputProps with a ready-made slotProps
  // object ({ inputLabel, input, htmlInput }), so it can be passed straight
  // through. input still carries the ref and classes Autocomplete relies on.
  const { slotProps } = props

  return (
    <TextField
      autoFocus
      slotProps={{
        htmlInput: slotProps.htmlInput,
        input: {
          ...slotProps.input,
          endAdornment: null,
          startAdornment: (
            <InputAdornment position='start' sx={{ pl: 1 }}>
              <MagnifyingGlassIcon fillColor={palette.grey[900]} />
            </InputAdornment>
          ),
        },
      }}
      placeholder={t('search')}
      sx={{
        borderBottom: '1px solid #eaecef',
        padding: '.75rem 1rem',
        width: '100%',
      }}
    />
  )
}

export default AutocompleteInput
