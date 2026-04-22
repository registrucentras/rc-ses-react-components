import type {} from '@emotion/styled'
import type {} from '@mui/system'
import type {} from '@mui/x-date-pickers/themeAugmentation'

import RcSesIconProps from '@/assets/IconProps'
import RcSesAccordion from '@/components/common/Accordion'
import useAccordionController from '@/components/common/Accordion/hooks/useAccordionController'
import RcSesAlert from '@/components/common/Alert'
import RcSesBreadcrumbs from '@/components/common/Breadcrumbs'
import RcSesButton from '@/components/common/Button'
import RcSesButtonWithPopover from '@/components/common/Button/ButtonWithPopover'
import RcSesCard from '@/components/common/Card'
import DataPagination from '@/components/common/DataPagination'
import RcSesIconWithCircularBackground from '@/components/common/IconWithCircularBackground'
import ListWithIcons from '@/components/common/ListWithIcons'
import RcSesTab from '@/components/common/Tabs/Tab'
import RcSesTabPanel from '@/components/common/Tabs/TabPanel'
import RcSesTabs from '@/components/common/Tabs/Tabs'
import RcSesTabsWrapper from '@/components/common/Tabs/TabsWrapper'
import RcSesFormControlWrapper from '@/components/form/components/FormControlWrapper'
import RcSesCheckbox from '@/components/form/inputs/Checkbox'
import RcSesCheckboxFormControl from '@/components/form/inputs/CheckboxFormControl'
import RcSesDatepicker from '@/components/form/inputs/Datepicker'
import RcSesFileDropzone from '@/components/form/inputs/FileDropzone'
import RcSesFileUpload from '@/components/form/inputs/FileUpload'
import RcSesNumberStepper from '@/components/form/inputs/NumberStepper'
import RcSesPhoneInput from '@/components/form/inputs/PhoneInput'
import RcSesPhoneInputFormControl from '@/components/form/inputs/PhoneInputFormControl'
import RcSesRadioButtonGroup from '@/components/form/inputs/RadioButtonGroup'
import RcSesSearchableField from '@/components/form/inputs/SearchableField'
import RcSesSelect from '@/components/form/inputs/Select'
import RcSesTextField from '@/components/form/inputs/TextField'
import RcSesFooter from '@/components/layout/Footer'
import RcSesServiceFormActions from '@/components/layout/ServiceFormActions'
import RcSesServiceFormContainer from '@/components/layout/ServiceFormContainer/AccordionFormContainer'
import RcSesCardFormContainer from '@/components/layout/ServiceFormContainer/CardFormContainer'
import RcSesServiceHeader from '@/components/layout/ServiceHeader'
import RcSesServicePage from '@/components/layout/ServicePage'
import ServiceWizardStepper from '@/components/layout/ServiceWizardStepper'
import RcSesTheme from '@/theme/light'
import RcSesPalette from '@/theme/palette'

declare module '@mui/x-date-pickers/models' {
  interface PickerValidDateLookup {
    'date-fns': Date
  }
}

export { RcSesPalette, RcSesTheme }
export { RcSesAccordion, useAccordionController }
export {
  RcSesAlert,
  RcSesBreadcrumbs,
  RcSesButton,
  RcSesButtonWithPopover,
  RcSesCard,
  RcSesFooter,
}
export { RcSesCheckbox, RcSesCheckboxFormControl }
export { RcSesDatepicker }
export { RcSesFileUpload }
export { RcSesFileDropzone }
export { RcSesNumberStepper }
export { RcSesPhoneInput, RcSesPhoneInputFormControl }
export { RcSesRadioButtonGroup }
export { RcSesSearchableField }
export { RcSesSelect }
export { RcSesTab, RcSesTabPanel, RcSesTabs, RcSesTabsWrapper }
export { RcSesTextField }
export { DataPagination }
export { ListWithIcons }
export { ServiceWizardStepper }
export type * from './types'

export {
  RcSesServiceFormActions,
  RcSesServiceFormContainer,
  RcSesCardFormContainer,
  RcSesFormControlWrapper,
  RcSesServiceHeader,
  RcSesServicePage,
}

export type { RcSesIconProps }
export { RcSesIconWithCircularBackground }

export * from './icons'
