import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'

import DataPagination from '@/components/common/DataPagination'
import ListWithIcons from '@/components/common/ListWithIcons'
import ServicePage from '@/components/layout/ServicePage'
import { QuestionIcon } from '@/library/icons'
import palette from '@/theme/palette'

function ListWithPagination() {
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const ITEMS_PER_PAGE = 5

  const mockData = React.useMemo(
    () =>
      Array.from({ length: 42 }, (_, i) => ({
        id: i + 1,
        name: `Item ${i + 1}`,
      })),
    [],
  )

  const handleSetIsLoading = () => {
    setIsLoading(!isLoading)
  }

  return (
    <ServicePage>
      <Grid container sx={{ mt: 2 }}>
        <ListWithIcons
          items={[
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
          ]}
          layout='horizontal'
          isLoading={isLoading}
        />
      </Grid>

      <DataPagination
        count={Math.ceil(mockData.length / ITEMS_PER_PAGE)}
        page={page}
        onChange={setPage}
      />
      <Button onClick={handleSetIsLoading} sx={{ mt: 2 }}>
        Toggle loading
      </Button>
    </ServicePage>
  )
}

export default ListWithPagination
