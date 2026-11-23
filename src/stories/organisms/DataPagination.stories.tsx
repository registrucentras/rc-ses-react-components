import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import DataPagination, {
  type DataPaginationProps,
} from '@/components/common/DataPagination'
import ExpandButton from '@/components/common/DataPagination/components/ExpandButton'

const meta = {
  title: 'Organisms/DataPagination',
  component: DataPagination,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Use totalItems for responsive record pagination (desktop 10 / mobile 5). Override desktopPageSize and mobilePageSize independently. onPageSizeChange(size, page) reports the resized page; update both the data query/slice and controlled page together. count retains its legacy meaning: number of pages. Mobile starts below the theme md breakpoint. Use ExpandButton instead of Pagination, never alongside it for the same list.',
      },
    },
  },
  args: {
    count: 12,
    defaultPage: 1,
    prevLabel: 'Atgal',
    nextLabel: 'Kitas',
  },
  argTypes: {
    count: {
      control: {
        type: 'number',
      },
    },
    defaultPage: {
      control: {
        type: 'number',
      },
    },
    page: {
      control: {
        type: 'number',
      },
    },
    onChange: {
      action: 'pageChanged',
    },
    prevLabel: {
      control: {
        type: 'text',
      },
    },
    nextLabel: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof DataPagination>

export default meta
type Story = StoryObj<typeof meta>

function ControlledDataPaginationDemo({
  page: initialPage,
  onChange,
  ...args
}: DataPaginationProps) {
  const [page, setPage] = useState(initialPage ?? 1)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant='body2'>Current page: {page}</Typography>
      <DataPagination
        {...args}
        page={page}
        onChange={(nextPage) => {
          setPage(nextPage)
          onChange?.(nextPage)
        }}
      />
    </Box>
  )
}

export const Uncontrolled: Story = {}

export const Controlled: Story = {
  render: (args) => <ControlledDataPaginationDemo {...args} />,
  args: {
    page: 1,
  },
}

function RecordsDemo({
  totalItems = 123,
  desktopPageSize = 10,
  mobilePageSize = 5,
  defaultPage = 1,
}: {
  totalItems?: number
  desktopPageSize?: number
  mobilePageSize?: number
  defaultPage?: number
}) {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('md'))
  const [page, setPage] = useState(defaultPage)
  const [size, setSize] = useState(mobile ? mobilePageSize : desktopPageSize)
  const records = Array.from({ length: totalItems }, (_, i) => i + 1)
  return (
    <Stack spacing={2}>
      <Typography component='output' aria-label='Puslapiavimo būsena'>
        Puslapis {page}; dydis {size}
      </Typography>
      <Box component='ul' aria-label='Įrašai' sx={{ pl: 3, m: 0 }}>
        {records.slice((page - 1) * size, page * size).map((number) => (
          <li key={number}>Įrašas {number}</li>
        ))}
      </Box>
      <DataPagination
        totalItems={totalItems}
        desktopPageSize={desktopPageSize}
        mobilePageSize={mobilePageSize}
        page={page}
        onChange={setPage}
        onPageSizeChange={(newSize, newPage) => {
          setSize(newSize)
          setPage(newPage)
        }}
      />
    </Stack>
  )
}

export const ResponsiveRecords: Story = {
  render: () => <RecordsDemo />,
}

export const CustomPageSizes: Story = {
  render: () => <RecordsDemo desktopPageSize={4} mobilePageSize={2} />,
}

export const Mobile: Story = {
  tags: ['viewport-320'],
  render: () => <DataPagination totalItems={100} />,
}

export const Boundaries: Story = {
  render: () => (
    <Stack spacing={3}>
      <DataPagination count={20} defaultPage={1} ariaLabel='Pirmas puslapis' />
      <DataPagination count={20} defaultPage={10} ariaLabel='Vidurinis puslapis' />
      <DataPagination count={20} defaultPage={20} ariaLabel='Paskutinis puslapis' />
    </Stack>
  ),
}

function LoadingDemo() {
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  return (
    <Stack spacing={2}>
      <Button onClick={() => setLoading(!loading)}>
        {loading ? 'Baigti užklausą' : 'Pradėti užklausą'}
      </Button>
      <DataPagination
        count={12}
        page={page}
        onChange={(next) => {
          setPage(next)
          setLoading(true)
        }}
        isLoading={loading}
      />
    </Stack>
  )
}

export const NetworkLoading: Story = { render: () => <LoadingDemo /> }

export const Loading: Story = { args: { isLoading: true } }

function ExpandDemo() {
  const [expanded, setExpanded] = useState(false)
  return (
    <Stack spacing={2} sx={{ alignItems: 'flex-start' }}>
      <Box component='ul' id='expand-records'>
        {Array.from({ length: expanded ? 12 : 3 }, (_, i) => (
          <li key={i + 1}>Įrašas {i + 1}</li>
        ))}
      </Box>
      <ExpandButton
        expanded={expanded}
        aria-controls='expand-records'
        onClick={() => setExpanded(!expanded)}
      />
    </Stack>
  )
}

export const ExpandAlternative: Story = { render: () => <ExpandDemo /> }
