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

  const { inputProps, InputProps } = props

  return (
    <TextField
      autoFocus
      // Autocomplete hands both of these down through renderInput; InputProps
      // carries the ref and class names it needs, so it must be spread through.
      slotProps={{
        htmlInput: inputProps,
        input: {
          ...InputProps,
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
