import type { Meta } from '@storybook/react-vite'
import { useState } from 'react'

import RcSesSegmentedControl from '@/components/common/SegmentedControl'

const meta = {
  title: 'Molecules/SegmentedControl',
  component: RcSesSegmentedControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: false,
      description: 'Array of options to display',
    },
    value: {
      control: 'text',
      description: 'Currently selected option ID',
    },
    onChange: {
      control: false,
      description: 'Callback when selection changes',
    },
    size: {
      control: 'radio',
      options: ['small', 'regular'],
      description: 'Size of the segmented control',
    },
    role: {
      control: 'radio',
      options: ['radiogroup', 'tablist'],
      description: 'ARIA role for accessibility',
    },
    disableBg: {
      control: 'boolean',
      description: 'Disable container background',
    },
  },
} satisfies Meta<typeof RcSesSegmentedControl>

export default meta

const DefaultComponent = ({
  options,
  value: initialValue,
  onChange,
  size,
  role,
  disableBg,
}: any) => {
  const [value, setValue] = useState(initialValue)
  return (
    <RcSesSegmentedControl
      options={options}
      value={value}
      onChange={(newValue) => {
        setValue(newValue)
        onChange?.(newValue)
      }}
      size={size}
      role={role}
      disableBg={disableBg}
    />
  )
}

export const Default = {
  args: {
    options: [
      { id: '1', label: 'Fizinis asmuo' },
      { id: '2', label: 'Juridinis asmuo' },
      { id: '3', label: 'Advokatas' },
    ],
    value: '1',
    onChange: () => {},
    size: 'regular' as const,
    role: 'radiogroup' as const,
    disableBg: false,
  },
  render: ({ options, value: initialValue, onChange, size, role, disableBg }: any) => (
    <DefaultComponent
      options={options}
      value={initialValue}
      onChange={onChange}
      size={size}
      role={role}
      disableBg={disableBg}
    />
  ),
} as const

export const RegularTwoOptions = {
  args: {
    options: [
      { id: '1', label: 'Fizinis asmuo' },
      { id: '2', label: 'Juridinis asmuo' },
    ],
    value: '1',
    size: 'regular',
  },
  render: (args: any) => <DefaultComponent {...args} />,
  parameters: {
    docs: {
      source: {
        code: `const [value, setValue] = useState('1');

<RcSesSegmentedControl
  options={[
    { id: '1', label: 'Fizinis asmuo' },
    { id: '2', label: 'Juridinis asmuo' },
  ]}
  value={value}
  onChange={(newValue) => setValue(newValue)}
  size="regular"
/>`,
      },
    },
  },
} as const

export const RegularFourOptions = {
  args: {
    options: [
      { id: '1', label: 'Fizinis asmuo' },
      { id: '2', label: 'Juridinis asmuo' },
      { id: '3', label: 'Advokatas' },
      { id: '4', label: 'Labai ilgas tekstas, netelpantis į vieną eilutę' },
    ],
    value: '1',
    size: 'regular',
  },
  render: (args: any) => <DefaultComponent {...args} />,
  parameters: {
    docs: {
      source: {
        code: `const [value, setValue] = useState('1');

<RcSesSegmentedControl
  options={[
    { id: '1', label: 'Fizinis asmuo' },
    { id: '2', label: 'Juridinis asmuo' },
    { id: '3', label: 'Advokatas' },
    { id: '4', label: 'Labai ilgas tekstas, netelpantis į vieną eilutę' },
  ]}
  value={value}
  onChange={(newValue) => setValue(newValue)}
  size="regular"
/>`,
      },
    },
  },
}

export const RegularWithDisabled = {
  args: {
    options: [
      { id: '1', label: 'Fizinis asmuo' },
      { id: '2', label: 'Juridinis asmuo (Disabled)', disabled: true },
      { id: '3', label: 'Advokatas' },
    ],
    value: '1',
    size: 'regular',
  },
  render: (args: any) => <DefaultComponent {...args} />,
  parameters: {
    docs: {
      source: {
        code: `const [value, setValue] = useState('1');

<RcSesSegmentedControl
  options={[
    { id: '1', label: 'Fizinis asmuo' },
    { id: '2', label: 'Juridinis asmuo', disabled: true },
    { id: '3', label: 'Advokatas' },
  ]}
  value={value}
  onChange={(newValue) => setValue(newValue)}
  size="regular"
/>`,
      },
    },
  },
}

export const SmallTwoOptions = {
  args: {
    options: [
      { id: '1', label: 'Fizinis asmuo' },
      { id: '2', label: 'Juridinis asmuo' },
    ],
    value: '1',
    size: 'small',
  },
  render: (args: any) => <DefaultComponent {...args} />,
  parameters: {
    docs: {
      source: {
        code: `const [value, setValue] = useState('1');

<RcSesSegmentedControl
  options={[
    { id: '1', label: 'Fizinis asmuo' },
    { id: '2', label: 'Juridinis asmuo' },
  ]}
  value={value}
  onChange={(newValue) => setValue(newValue)}
  size="small"
/>`,
      },
    },
  },
} as const

export const SmallFourOptions = {
  args: {
    options: [
      { id: '1', label: 'Fizinis asmuo' },
      { id: '2', label: 'Juridinis asmuo' },
      { id: '3', label: 'Advokatas' },
      { id: '4', label: 'Kita' },
    ],
    value: '1',
    size: 'small',
  },
  render: (args: any) => <DefaultComponent {...args} />,
  parameters: {
    docs: {
      source: {
        code: `const [value, setValue] = useState('1');

<RcSesSegmentedControl
  options={[
    { id: '1', label: 'Fizinis asmuo' },
    { id: '2', label: 'Juridinis asmuo' },
    { id: '3', label: 'Advokatas' },
    { id: '4', label: 'Kita' },
  ]}
  value={value}
  onChange={(newValue) => setValue(newValue)}
  size="small"
/>`,
      },
    },
  },
}

export const SmallWithDisabled = {
  args: {
    options: [
      { id: '1', label: 'Fizinis asmuo' },
      { id: '2', label: 'Juridinis asmuo (Disabled)', disabled: true },
      { id: '3', label: 'Advokatas' },
    ],
    value: '1',
    size: 'small',
  },
  render: (args: any) => <DefaultComponent {...args} />,
  parameters: {
    docs: {
      source: {
        code: `const [value, setValue] = useState('1');

<RcSesSegmentedControl
  options={[
    { id: '1', label: 'Fizinis asmuo' },
    { id: '2', label: 'Juridinis asmuo', disabled: true },
    { id: '3', label: 'Advokatas' },
  ]}
  value={value}
  onChange={(newValue) => setValue(newValue)}
  size="small"
/>`,
      },
    },
  },
}

export const RegularNoBackground = {
  args: {
    options: [
      { id: '1', label: 'Fizinis asmuo' },
      { id: '2', label: 'Juridinis asmuo' },
      { id: '3', label: 'Advokatas' },
    ],
    value: '1',
    size: 'regular',
    disableBg: true,
  },
  render: (args: any) => <DefaultComponent {...args} />,
  parameters: {
    docs: {
      source: {
        code: `const [value, setValue] = useState('1');

<RcSesSegmentedControl
  options={[
    { id: '1', label: 'Fizinis asmuo' },
    { id: '2', label: 'Juridinis asmuo' },
    { id: '3', label: 'Advokatas' },
  ]}
  value={value}
  onChange={(newValue) => setValue(newValue)}
  size="regular"
  disableBg
/>`,
      },
    },
  },
}
