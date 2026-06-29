import type { Meta } from '@storybook/react'
import { useState } from 'react'

import RcSesSegmentedControl from '../../../components/common/SegmentedControl'

const meta = {
  title: 'components/display/SegmentedControl',
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

const RegularTwoOptionsComponent = () => {
  const [value, setValue] = useState('1')
  return (
    <RcSesSegmentedControl
      options={[
        { id: '1', label: 'Fizinis asmuo' },
        { id: '2', label: 'Juridinis asmuo' },
      ]}
      value={value}
      onChange={(newValue) => {
        // eslint-disable-next-line no-console
        console.log('RegularTwoOptions - Selected value:', newValue)
        setValue(newValue)
      }}
      size='regular'
    />
  )
}

export const RegularTwoOptions = {
  render: () => <RegularTwoOptionsComponent />,
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

const RegularFourOptionsComponent = () => {
  const [value, setValue] = useState('1')
  return (
    <RcSesSegmentedControl
      options={[
        { id: '1', label: 'Fizinis asmuo' },
        { id: '2', label: 'Juridinis asmuo' },
        { id: '3', label: 'Advokatas' },
        { id: '4', label: 'Labai ilgas tekstas, netelpantis į vieną eilutę' },
      ]}
      value={value}
      onChange={(newValue) => {
        // eslint-disable-next-line no-console
        console.log('RegularFourOptions - Selected value:', newValue)
        setValue(newValue)
      }}
      size='regular'
    />
  )
}

export const RegularFourOptions = {
  render: () => <RegularFourOptionsComponent />,
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

const RegularWithDisabledComponent = () => {
  const [value, setValue] = useState('1')
  return (
    <RcSesSegmentedControl
      options={[
        { id: '1', label: 'Fizinis asmuo' },
        { id: '2', label: 'Juridinis asmuo (Disabled)', disabled: true },
        { id: '3', label: 'Advokatas' },
      ]}
      value={value}
      onChange={(newValue) => {
        // eslint-disable-next-line no-console
        console.log('RegularWithDisabled - Selected value:', newValue)
        setValue(newValue)
      }}
      size='regular'
    />
  )
}

export const RegularWithDisabled = {
  render: () => <RegularWithDisabledComponent />,
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

const SmallTwoOptionsComponent = () => {
  const [value, setValue] = useState('1')
  return (
    <RcSesSegmentedControl
      options={[
        { id: '1', label: 'Fizinis asmuo' },
        { id: '2', label: 'Juridinis asmuo' },
      ]}
      value={value}
      onChange={(newValue) => {
        // eslint-disable-next-line no-console
        console.log('SmallTwoOptions - Selected value:', newValue)
        setValue(newValue)
      }}
      size='small'
    />
  )
}

export const SmallTwoOptions = {
  render: () => <SmallTwoOptionsComponent />,
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

const SmallFourOptionsComponent = () => {
  const [value, setValue] = useState('1')
  return (
    <RcSesSegmentedControl
      options={[
        { id: '1', label: 'Fizinis asmuo' },
        { id: '2', label: 'Juridinis asmuo' },
        { id: '3', label: 'Advokatas' },
        { id: '4', label: 'Kita' },
      ]}
      value={value}
      onChange={(newValue) => {
        // eslint-disable-next-line no-console
        console.log('SmallFourOptions - Selected value:', newValue)
        setValue(newValue)
      }}
      size='small'
    />
  )
}

export const SmallFourOptions = {
  render: () => <SmallFourOptionsComponent />,
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

const SmallWithDisabledComponent = () => {
  const [value, setValue] = useState('1')
  return (
    <RcSesSegmentedControl
      options={[
        { id: '1', label: 'Fizinis asmuo' },
        { id: '2', label: 'Juridinis asmuo (Disabled)', disabled: true },
        { id: '3', label: 'Advokatas' },
      ]}
      value={value}
      onChange={(newValue) => {
        // eslint-disable-next-line no-console
        console.log('SmallWithDisabled - Selected value:', newValue)
        setValue(newValue)
      }}
      size='small'
    />
  )
}

export const SmallWithDisabled = {
  render: () => <SmallWithDisabledComponent />,
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

const RegularNoBackgroundComponent = () => {
  const [value, setValue] = useState('1')
  return (
    <RcSesSegmentedControl
      options={[
        { id: '1', label: 'Fizinis asmuo' },
        { id: '2', label: 'Juridinis asmuo' },
        { id: '3', label: 'Advokatas' },
      ]}
      value={value}
      onChange={(newValue) => {
        // eslint-disable-next-line no-console
        console.log('RegularNoBackground - Selected value:', newValue)
        setValue(newValue)
      }}
      size='regular'
      disableBg
    />
  )
}

export const RegularNoBackground = {
  render: () => <RegularNoBackgroundComponent />,
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
