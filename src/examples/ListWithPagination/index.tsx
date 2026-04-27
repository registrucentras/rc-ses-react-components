import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'

import Button from '@/components/common/Button'
import SelectableCardList, {
  SelectableCardListItemData,
} from '@/components/common/SelectableCardList'
import ServiceHeader from '@/components/layout/ServiceHeader'
import ServicePage from '@/components/layout/ServicePage'
import { BarcodeIcon, MapPinAreaIcon, ScalesIcon } from '@/library'

interface ApiItem {
  id: string
  name: string
  matchedName?: string
  code: string
  legalStatusName: string
  address: string
}

const mockApiData: ApiItem[] = Array.from({ length: 15 }).map((_, i) => ({
  id: (i + 1).toString(),
  code: `12345${i}`,
  name: `Company ${i + 1}`,
  matchedName: `Matched name ${i + 1}`,
  address: `Vilnius, Street ${i + 1}`,
  legalStatusName: i % 2 === 0 ? 'įregistruotas' : 'Neįregistruotas',
}))

const mapToSelectableItems = (data: ApiItem[]): SelectableCardListItemData[] =>
  data.map((item) => ({
    id: item.id,
    title: item.name,
    subtitle: item.matchedName,
    listItems: [
      {
        id: 'code',
        icon: BarcodeIcon,
        text: `Code: ${item.code}`,
      },
      {
        id: 'status',
        icon: ScalesIcon,
        text: item.legalStatusName,
        textColor: item.legalStatusName === 'Neįregistruotas' ? 'red' : undefined,
      },
      {
        id: 'address',
        icon: MapPinAreaIcon,
        text: item.address,
      },
    ],
  }))

function ListWithPagination() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<SelectableCardListItemData[] | undefined>(undefined)
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null)

  useEffect(() => {
    setIsLoading(true)

    const timer = setTimeout(() => {
      setData(mapToSelectableItems(mockApiData))
      setIsLoading(false)
      setSelectedItemId(mapToSelectableItems(mockApiData)[0].id)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleRefetch = () => {
    setIsLoading(true)
    setData(undefined)
    setTimeout(() => {
      setData(mapToSelectableItems(mockApiData))
      setIsLoading(false)
      setSelectedItemId(mapToSelectableItems(mockApiData)[0].id)
    }, 1500)
  }

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
      <SelectableCardList
        items={data}
        selectedId={selectedItemId}
        onSelect={setSelectedItemId}
      />
      <Box
        sx={{
          mt: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 2,
          alignItems: 'center',
        }}
      >
        <Button variant='contained' onClick={handleRefetch} disabled={isLoading}>
          Refetch
        </Button>
        <Typography variant='body1'>Selected item: {selectedItemId}</Typography>
      </Box>
    </ServicePage>
  )
}

export default ListWithPagination
