import type {} from '@mui/system'
import type {} from '@mui/x-date-pickers/themeAugmentation'

import RcSesAlert from '@/components/common/Alert'
import RcSesBreadcrumbs from '@/components/common/Breadcrumbs'
import RcSesButton from '@/components/common/Button'
import RcSesTab from '@/components/common/Tabs/Tab'
import RcSesTabPanel from '@/components/common/Tabs/TabPanel'
import RcSesTabs from '@/components/common/Tabs/Tabs'
import RcSesTabsWrapper from '@/components/common/Tabs/TabsWrapper'
import RcSesTheme from '@/theme/light'
import RcSesPalette from '@/theme/palette'

declare module '@mui/x-date-pickers/models' {
  interface PickerValidDateLookup {
    'date-fns': Date
  }
}

export { RcSesPalette, RcSesTheme }
export { RcSesTab, RcSesTabPanel, RcSesTabs, RcSesTabsWrapper }
export { RcSesAlert, RcSesBreadcrumbs, RcSesButton }
