import { Box, Container } from '@mui/system'
import { useState } from 'react'

import { QuestionIcon } from '@/library/icons'
import palette from '@/theme/palette'

import Button from '../Button'
import DataPagination from '../DataPagination'
import SelectableCardListItem from './components/SelectableCardListItem'

const mockItems = [
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
const SelectableCardList = () => {
  const [page, setPage] = useState(1)
  const [selectedId, setSelectedId] = useState<string | null>('1')
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        paddingBottom: '64px',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
        {mockItems.map((item) => (
          <SelectableCardListItem
            key={item.id}
            title='Item title'
            description='Explanation text here'
            items={mockItems}
            selected={selectedId === item.id}
            onSelect={() => setSelectedId(item.id)}
            isLoading={isLoading}
          />
        ))}
      </Box>
      <DataPagination count={10} page={page} onChange={setPage} isLoading={isLoading} />
      <Button variant='contained' onClick={() => setIsLoading(!isLoading)}>
        Toggle loading
      </Button>
    </Container>
  )
}

export default SelectableCardList
