import { Button, Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import ServiceHeader from './components/layout/ServiceHeader'
import ServicePage from './components/layout/ServicePage'

export default function App() {
  const routes = [
    {
      title: 'Vieno žingsnio formos pavyzdys',
      routeTo: '/single-step-form',
    },
    {
      title: 'Formos su vedliu pavyzdys',
      routeTo: '/multi-step-form',
    },
    {
      title: 'Paginacijos pavyzdys',
      routeTo: '/pagination',
    },
  ]

  return (
    <ServicePage>
      <ServiceHeader
        breadcrumbsProps={{ path: [{ label: 'Pagrindinis', path: '/' }] }}
        title='Formų bei komponentų pavyzdžiai'
      >
        <Stack direction='row' spacing={2}>
          {routes?.map((route) => (
            <Button
              key={route.routeTo}
              component={Link}
              to={route.routeTo}
              color='primary'
              variant='contained'
              size='small'
            >
              {route.title}
            </Button>
          ))}
        </Stack>
      </ServiceHeader>
    </ServicePage>
  )
}
