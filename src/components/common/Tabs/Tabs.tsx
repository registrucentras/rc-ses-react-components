import { Tabs, TabsProps } from '@mui/material'

function RcSesTabs(props: TabsProps): React.ReactNode {
  const { children, ...tabsProps } = props

  return <Tabs {...tabsProps}>{children}</Tabs>
}

export default RcSesTabs
