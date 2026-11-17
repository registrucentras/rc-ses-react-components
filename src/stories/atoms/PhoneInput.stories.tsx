import { Box, Stack } from '@mui/material'
import { Meta } from '@storybook/react-vite'
import type { CSSProperties } from 'react'
import { useForm } from 'react-hook-form'

import RcSesPhoneInput from '@/components/form/inputs/PhoneInput'
import FieldPreviewRow from '@/components/storybook/FieldPreviewRow'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import PreviewTitle from '@/components/storybook/PreviewTitle'

interface FormModel {
  phone: string
  phoneDisabled: string
  phoneError: string
}

const meta: Meta<typeof RcSesPhoneInput> = {
  title: 'Atoms/PhoneInput',
  component: RcSesPhoneInput,
  argTypes: {
    control: {
      table: {
        disable: true,
      },
    },
    errors: {
      table: {
        disable: true,
      },
    },
    rules: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

function PhoneInputDemo(args: any) {
  const {
    control,
    formState: { errors },
  } = useForm<FormModel>({
    mode: 'all',
    defaultValues: {
      phone: '',
      phoneDisabled: '',
      phoneError: '',
    },
  })

  const { label, slotProps } = args

  return (
    <Fields>
      <FieldView>
        <RcSesPhoneInput
          id='phone'
          name='phone'
          control={control}
          rules={{ required: true }}
          label={label}
          errors={errors?.phone}
          slotProps={slotProps}
        />
      </FieldView>

      <FieldPreviewRow>
        <PreviewTitle>State previews</PreviewTitle>
        <RcSesPhoneInput
          id='phoneDisabled'
          name='phoneDisabled'
          control={control}
          rules={{ required: true }}
          label='Disabled'
          disabled
          errors={errors?.phoneDisabled}
          slotProps={slotProps}
        />
        <RcSesPhoneInput
          id='phoneError'
          name='phoneError'
          control={control}
          rules={{ required: true }}
          label='Error'
          errors={{ message: 'Error Message', type: 'required' }}
          slotProps={slotProps}
        />
      </FieldPreviewRow>
    </Fields>
  )
}

export const Main = {
  render: (args: any) => <PhoneInputDemo {...args} />,
  args: {
    label: 'Phone number',
  },
}

function TokenExamples({ overrides = false }: { overrides?: boolean }) {
  const { control } = useForm({
    defaultValues: {
      empty: '',
      filled: '+37061234567',
    },
  })
  return (
    <Box
      style={
        overrides
          ? ({
              '--rc-color-text-default': '#542d16',
              '--rc-color-border-default': '#a56835',
              '--rc-color-border-focus': '#8b4513',
              '--rc-color-surface-base': '#fffaf0',
              '--rc-radius-input': '12px',
            } as CSSProperties)
          : undefined
      }
    >
      <Stack sx={{ width: '100%', maxWidth: '360px' }} spacing={2}>
        {(['empty', 'filled'] as const).map((name) => (
          <RcSesPhoneInput
            key={name}
            id={`phone-token-${name}`}
            name={name}
            control={control}
            label={`Phone / ${name}`}
            slotProps={{ wrapper: { labelOnTop: true } }}
          />
        ))}
      </Stack>
    </Box>
  )
}

export const TokenBindings = { render: () => <TokenExamples /> }
export const TokenOverrides = { render: () => <TokenExamples overrides /> }
