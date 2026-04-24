/* eslint-disable react/function-component-definition */
import type { Meta, StoryFn } from '@storybook/react'
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
    searchButtonProps: {
      control: 'object',
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta

const Template: StoryFn<typeof RcSesSearchInput> = (args) => {
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
    onSearch?.(value)
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

export const Main = Template.bind({})
Main.args = {
  label: 'Search Input Field',
  placeholder: 'Type to search',
  onSearch: fn(),
}

export const OnlyRequired = Template.bind({})
OnlyRequired.args = {
  onSearch: fn(),
}

export const WithoutButton = Template.bind({})
WithoutButton.args = {
  ...Main.args,
  showSearchButton: false,
}

export const WithoutLabel = Template.bind({})
WithoutLabel.args = {
  ...Main.args,
  label: undefined,
}

export const SideLabel = Template.bind({})
SideLabel.args = {
  ...Main.args,
  sideLabel: true,
}

export const OnlyNumbers = Template.bind({})
OnlyNumbers.args = {
  ...Main.args,
  onlyNumbers: true,
  placeholder: 'Only numbers allowed',
}
