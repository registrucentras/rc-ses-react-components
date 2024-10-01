import { Tab, TabProps } from '@mui/material'

function RcSesTab(props: TabProps): React.ReactNode {
  const { children, ...tabProps } = props

  return <Tab {...tabProps}>{children}</Tab>
}

export default RcSesTab
