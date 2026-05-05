import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import RcSesSearchInput from '@/components/form/inputs/SearchInput'
import SingleStepFormModel from '@/examples/SingleStepForm/types/SingleStepFormModel'

const meta: Meta<typeof RcSesSearchInput> = {
  title: 'components/inputs/SearchInput',
  component: RcSesSearchInput,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    labelSubtitle: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    onlyNumbers: {
      control: 'boolean',
    },
    sideLabel: {
      control: 'boolean',
    },
    showSearchButton: {
      control: 'boolean',
    },
    searchButtonLabel: {
      control: 'text',
    },
    slotProps: {
      control: 'object',
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta

type Story = StoryObj<typeof RcSesSearchInput>

const StoryTemplate = (args: React.ComponentProps<typeof RcSesSearchInput>) => {
  const { onSearch, slotProps, ...restArgs } = args
  const [lastSearchValue, setLastSearchValue] = useState('')
  const [searchCount, setSearchCount] = useState(0)
  const {
    control,
    formState: { errors },
  } = useForm<SingleStepFormModel>({
    mode: 'all',
  })

  const handleSearch = (value: string) => {
    const newCount = searchCount + 1
    setLastSearchValue(value)
    setSearchCount(newCount)
    onSearch(value)
  }

  return (
    <div>
      <RcSesSearchInput
        {...restArgs}
        control={control}
        id='searchable'
        errors={errors?.searchable}
        name='searchable'
        onSearch={handleSearch}
        slotProps={slotProps}
      />
      <p style={{ marginTop: 12 }}>
        Searches: {searchCount} | Last value: {lastSearchValue || '-'}
      </p>
    </div>
  )
}

export const Main: Story = {
  args: {
    label: 'Search Input Field',
    placeholder: 'Type to search',
    onSearch: fn(),
  },
  render: (args) => <StoryTemplate {...args} />,
}

export const OnlyRequired: Story = {
  args: {
    onSearch: fn(),
  },
  render: (args) => <StoryTemplate {...args} />,
}

export const WithoutButton: Story = {
  args: {
    ...Main.args,
    showSearchButton: false,
  },
  render: (args) => <StoryTemplate {...args} />,
}

export const WithoutLabel: Story = {
  args: {
    ...Main.args,
    label: undefined,
  },
  render: (args) => <StoryTemplate {...args} />,
}

export const SideLabel: Story = {
  args: {
    ...Main.args,
    sideLabel: true,
  },
  render: (args) => <StoryTemplate {...args} />,
}

export const OnlyNumbers: Story = {
  args: {
    ...Main.args,
    onlyNumbers: true,
    placeholder: 'Only numbers allowed',
  },
  render: (args) => <StoryTemplate {...args} />,
}
