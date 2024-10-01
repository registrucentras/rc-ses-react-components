import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import type {} from '@mui/system'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import type {} from '@mui/x-date-pickers/themeAugmentation'
import { lt } from 'date-fns/locale/lt'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import theme from '@/theme/light'

import App from './App'
import MultipleStepForm from './examples/MultipleStepForm'
import SingleStepForm from './examples/SingleStepForm'
import './styles/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/single-step-form',
    element: <SingleStepForm />,
  },
  {
    path: '/multi-step-form',
    element: <MultipleStepForm />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={lt}>
        <CssBaseline />
        <RouterProvider router={router} />
      </LocalizationProvider>
    </ThemeProvider>
  </StrictMode>,
)
