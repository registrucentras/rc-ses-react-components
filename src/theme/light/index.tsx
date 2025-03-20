import type {} from '@emotion/styled'
import { createTheme } from '@mui/material'
import { enUS } from '@mui/x-date-pickers/locales'

import { ltLT } from '@/i18n/@mui/x-date-pickers/ltLT'
import MuiAccordion from '@/theme/light/MuiAccordion'
import MuiAccordionDetails from '@/theme/light/MuiAccordionDetails'
import MuiAccordionSummary from '@/theme/light/MuiAccordionSummary'
import MuiAlert from '@/theme/light/MuiAlert'
import MuiAutocomplete from '@/theme/light/MuiAutocomplete'
import MuiBreadcrumbs from '@/theme/light/MuiBreadcrumbs'
import MuiButton from '@/theme/light/MuiButton'
import MuiButtonBase from '@/theme/light/MuiButtonBase'
import MuiCard from '@/theme/light/MuiCard'
import MuiCardContent from '@/theme/light/MuiCardContent'
import MuiCardHeader from '@/theme/light/MuiCardHeader'
import MuiCheckbox from '@/theme/light/MuiCheckbox'
import MuiChip from '@/theme/light/MuiChip'
import MuiDialog from '@/theme/light/MuiDialog'
import MuiDivider from '@/theme/light/MuiDivider'
import MuiFormControl from '@/theme/light/MuiFormControl'
import MuiFormControlLabel from '@/theme/light/MuiFormControlLabel'
import MuiFormGroup from '@/theme/light/MuiFormGroup'
import MuiFormHelperText from '@/theme/light/MuiFormHelperText'
import MuiFormLabel from '@/theme/light/MuiFormLabel'
import MuiIconButton from '@/theme/light/MuiIconButton'
import MuiInputBase from '@/theme/light/MuiInputBase'
import MuiLinearProgress from '@/theme/light/MuiLinearProgress'
import MuiPickersLayout from '@/theme/light/MuiPickersLayout'
import MuiPopover from '@/theme/light/MuiPopover'
import MuiRadio from '@/theme/light/MuiRadio'
import MuiSelect from '@/theme/light/MuiSelect'
import MuiStepper from '@/theme/light/MuiStepper'
import MuiSvgIcon from '@/theme/light/MuiSvgIcon'
import MuiTab from '@/theme/light/MuiTab'
import MuiTable from '@/theme/light/MuiTable'
import MuiTableCell from '@/theme/light/MuiTableCell'
import MuiTabs from '@/theme/light/MuiTabs'
import MuiTextField from '@/theme/light/MuiTextField'
import MuiTypography from '@/theme/light/MuiTypography'
import themePalette from '@/theme/light/themePalette'

import MuiPagination from './MuiPagination'

declare module '@mui/material/styles' {
  interface Palette {
    dark: Palette['grey']
    grey: Palette['grey']
  }

  interface PaletteOptions {
    dark?: PaletteOptions['grey']
    grey?: PaletteOptions['grey']
  }
}

declare module '@mui/material' {
  interface AlertPropsColorOverrides {
    grey: true
  }

  interface AlertClasses {
    standardGrey: string
    outlinedGrey: string
    filledGrey: string
  }

  interface ButtonPropsVariantOverrides {
    link: true
  }

  interface ButtonPropsColorOverrides {
    grey: any
    dark: any
  }

  interface RadioPropsColorOverrides {
    grey: true
  }

  interface TabsPropsVariantOverrides {
    grey: true
  }
}

const theme = createTheme(themePalette, ltLT, enUS, {
  components: {
    MuiAccordion,
    MuiAccordionDetails,
    MuiAccordionSummary,
    MuiAlert,
    MuiAutocomplete,
    MuiBreadcrumbs,
    MuiButton,
    MuiButtonBase,
    MuiCard,
    MuiCardContent,
    MuiCardHeader,
    MuiCheckbox,
    MuiChip,
    MuiDialog,
    MuiDivider,
    MuiFormControl,
    MuiFormControlLabel,
    MuiFormGroup,
    MuiFormHelperText,
    MuiFormLabel,
    MuiIconButton,
    MuiInputBase,
    MuiLinearProgress,
    MuiPickersLayout,
    MuiPagination,
    MuiPopover,
    MuiRadio,
    MuiSelect,
    MuiStepper,
    MuiSvgIcon,
    MuiTab,
    MuiTabs,
    MuiTable,
    MuiTableCell,
    MuiTextField,
    MuiTypography,
  },
})

theme.typography.h1 = {
  fontSize: '1.5rem',
  fontWeight: '500',
  lineHeight: '2rem',

  [theme.breakpoints.up('md')]: {
    fontSize: '2.25rem',
    lineHeight: '3rem',
  },
}

export default theme
