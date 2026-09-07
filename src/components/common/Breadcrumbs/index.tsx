import { Link, Breadcrumbs as MuiBreadcrumbs, SxProps, Theme } from '@mui/material'

export interface BreadcrumbItem {
  label: string
  path: string
}

interface Props {
  path: BreadcrumbItem[]
  sx?: SxProps<Theme>
}

function RcSesBreadcrumbs({ path, sx }: Props) {
  return (
    <MuiBreadcrumbs sx={sx}>
      {path.map((step) => (
        <Link key={step.path} underline='hover' color='inherit' href={step.path}>
          {step.label}
        </Link>
      ))}
    </MuiBreadcrumbs>
  )
}

export default RcSesBreadcrumbs
