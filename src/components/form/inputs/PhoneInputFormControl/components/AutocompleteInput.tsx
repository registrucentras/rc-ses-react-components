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
      inputProps={inputProps}
      // eslint-disable-next-line react/jsx-no-duplicate-props
      InputProps={{
        ...InputProps,
        endAdornment: null,
        startAdornment: (
          <InputAdornment position='start' sx={{ pl: 1 }}>
            <MagnifyingGlassIcon sx={{ color: palette.grey[900] }} />
          </InputAdornment>
        ),
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
