import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'

import Button from '@/components/common/Button'
import SelectableCardList from '@/components/common/SelectableCardList'
import ServiceHeader from '@/components/layout/ServiceHeader'
import ServicePage from '@/components/layout/ServicePage'
import { QuestionIcon } from '@/library'
import palette from '@/theme/palette'

const mockListItems = [
  {
    id: '1',
    icon: <QuestionIcon fillColor={palette.grey[600]} />,
    text: 'Explanatory text Test ilgas pavadinimas',
    tooltip: 'Extra info',
  },
  {
    id: '2',
    icon: <QuestionIcon fillColor={palette.grey[600]} />,
    text: 'Disabled item',
    tooltip: 'Extra info',
    disabled: true,
  },
  {
    id: '3',
    icon: <QuestionIcon fillColor={palette.grey[600]} />,
    text: 'Hover me',
    tooltip: 'Extra info',
  },
  {
    id: '4',
    icon: <QuestionIcon fillColor={palette.grey[600]} />,
    text: 'Loading item',
    tooltip: 'Extra info',
  },
]

const mockItems = [
  {
    id: '1',
    name: 'Item 1',
    matchedName: 'Additional info 1',
    listItems: mockListItems,
  },
  {
    id: '2',
    name: 'Item 2',
    listItems: mockListItems,
  },
  {
    id: '3',
    name: 'Item 3',
    matchedName: 'Additional info 3',
    listItems: mockListItems,
  },
]

function ListWithPagination() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<typeof mockItems | undefined>(undefined)

  useEffect(() => {
    setIsLoading(true)

    const timer = setTimeout(() => {
      setData(mockItems)
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ServicePage>
      <ServiceHeader
        breadcrumbsProps={{
          path: [
            { label: 'Pagrindinis', path: '/' },
            {
              label: 'Horizontalios formos su vedliu pavyzdys',
              path: '/horizontal-sample-form-multiple-steps',
            },
          ],
        }}
        title='Nekilnojamojo turto registro išrašas pagal nurodytą turto adresą'
      >
        <Typography variant='body1'>
          Šiame puslapyje Jūs galite užsisakyti Nekilnojamojo turto registro išrašus,
          pažymas bei kitus dokumentus. Užsakytą NTR išrašą, pažymą ar kitą dokumentą
          galėsite gauti elektroniniu būdu arba atsiimti pasirinktame VĮ Registrų centro
          padalinyje.
        </Typography>
      </ServiceHeader>
      <SelectableCardList items={data} isLoading={isLoading} />
      <Button
        variant='contained'
        onClick={() => {
          setIsLoading(true)
          setData(undefined)

          setTimeout(() => {
            setData(mockItems)
            setIsLoading(false)
          }, 1500)
        }}
      >
        Refetch
      </Button>
    </ServicePage>
  )
}

export default ListWithPagination
