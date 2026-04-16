import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'

import DataPagination from '@/components/common/DataPagination'
import ServicePage from '@/components/layout/ServicePage'

function ListWithPagination() {
  const [page, setPage] = useState(1)
  const ITEMS_PER_PAGE = 5

  const mockData = React.useMemo(
    () =>
      Array.from({ length: 42 }, (_, i) => ({
        id: i + 1,
        name: `Item ${i + 1}`,
      })),
    [],
  )

  const paginatedData = React.useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE
    return mockData.slice(start, start + ITEMS_PER_PAGE)
  }, [page, mockData])

  return (
    <ServicePage>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {paginatedData.map((item) => (
          <Grid item xs={12} key={item.id}>
            <Typography>{item.name}</Typography>
          </Grid>
        ))}
      </Grid>

      <DataPagination
        count={Math.ceil(mockData.length / ITEMS_PER_PAGE)}
        page={page}
        onChange={setPage}
      />
    </ServicePage>
  )
}

export default ListWithPagination
