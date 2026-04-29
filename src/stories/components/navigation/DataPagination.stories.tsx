import { Box, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import DataPagination from '@/components/common/DataPagination'

const meta = {
  title: 'components/navigation/DataPagination',
  component: DataPagination,
  tags: ['autodocs'],
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

function ControlledDataPaginationDemo({ page: initialPage, onChange, ...args }: any) {
  const [page, setPage] = useState(initialPage ?? 1)

  return (
    <Box display='flex' flexDirection='column' gap={2}>
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
