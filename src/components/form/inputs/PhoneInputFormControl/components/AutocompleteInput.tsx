import type { AutocompleteRenderInputParams } from '@mui/material/Autocomplete'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import { useTranslation } from 'react-i18next'

import { MagnifyingGlassIcon } from '@/assets/icons/phosphorIcons'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'

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
            <InputAdornment
              position='start'
              sx={{ pl: spacingRoleBasedTokens['space-8'] }}
            >
              <MagnifyingGlassIcon fillColor={colorTokens['text-default']} />
            </InputAdornment>
          ),
        },
      }}
      placeholder={t('search')}
      sx={{
        borderBottom: `${borderTokens['stroke-1']} solid ${colorTokens['border-subtle']}`,
        padding: `${spacingRoleBasedTokens['space-12']} ${spacingRoleBasedTokens['space-16']}`,
        width: '100%',
      }}
    />
  )
}

export default AutocompleteInput
