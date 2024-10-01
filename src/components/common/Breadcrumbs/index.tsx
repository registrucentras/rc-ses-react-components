import MuiBreadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'

export type BreadcrumbItem = { label: string; path: string }

type Props = {
  path: BreadcrumbItem[]
}

function RcSesBreadcrumbs({ path }: Props) {
  return (
    <MuiBreadcrumbs>
      {path.map((step) => (
        <Link key={step.path} underline='hover' color='inherit' href={step.path}>
          {step.label}
        </Link>
      ))}
    </MuiBreadcrumbs>
  )
}

export default RcSesBreadcrumbs
