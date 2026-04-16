import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import type {} from '@mui/system'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import type {} from '@mui/x-date-pickers/themeAugmentation'
import { enUS } from 'date-fns/locale/en-US'
import { lt } from 'date-fns/locale/lt'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import theme from '@/theme/light'

import App from './App'
import HorizontalMultipleStepForm from './examples/HorizontalMultiStepForm'
import ListWithPagination from './examples/ListWithPagination'
import MultipleStepForm from './examples/MultipleStepForm'
import SingleStepForm from './examples/SingleStepForm'
import i18n from './i18n/i18n'
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
  {
    path: '/pagination',
    element: <ListWithPagination />,
  },
  {
    path: '/horizontal-multi-step-form',
    element: <HorizontalMultipleStepForm />,
  },
])

const adapterLocale = i18n.language === 'lt' ? lt : enUS

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={adapterLocale}>
        <CssBaseline />
        <RouterProvider router={router} />
      </LocalizationProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
