import {
  Avatar,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import NotePencilIcon from '@/assets/icons/NotePencilIcon'
import TrashIcon from '@/assets/icons/TrashIcon'
import UserIcon from '@/assets/icons/UserIcon'
import AdvancedListItem from '@/components/common/AdvancedList/components/AdvancedListItem'

const meta = {
  title: 'Molecules/AdvancedListItem',
  component: AdvancedListItem,
  tags: ['autodocs'],
  args: {
    title: 'Įrašo pavadinimas',
    subtitle: 'a.k. 3850.........',
    state: 'rest',
  },
} satisfies Meta<typeof AdvancedListItem>

export default meta

type Story = StoryObj<typeof meta>

export const Main: Story = {}

export const Selected: Story = {
  args: {
    state: 'selected',
  },
}

export const Disabled: Story = {
  args: {
    state: 'disabled',
  },
}

export const ErrorState: Story = {
  args: {
    state: 'error',
  },
}

export const IgaliotojaiPreset: Story = {
  name: 'Preset: Įgaliotojai (reorder + actions)',
  render: () => (
    <AdvancedListItem
      title='Jonas Jonaitis'
      subtitle='a.k. 3850.........'
      leading={{ type: 'reorder', onMoveUp: () => {}, onMoveDown: () => {} }}
      trailing={{
        type: 'actions',
        actions: [
          { label: 'Keisti', icon: NotePencilIcon, onClick: () => {} },
          { label: 'Pašalinti', icon: TrashIcon, onClick: () => {} },
        ],
      }}
    />
  ),
}

const JaAtstovaiRedaguojamaStory = () => {
  const [checked, setChecked] = useState(false)

  return (
    <AdvancedListItem
      title='Petras Petraitis'
      subtitle='Vadovas'
      leading={{ type: 'reorder', onMoveUp: () => {}, onMoveDown: () => {} }}
      trailing={{ type: 'toggle', checked, onChange: setChecked }}
    />
  )
}

export const JaAtstovaiRedaguojamaPreset: Story = {
  name: 'Preset: JA atstovai redaguojama (reorder + toggle)',
  render: () => <JaAtstovaiRedaguojamaStory />,
}

export const JaAtstovaiPerziuraPreset: Story = {
  name: 'Preset: JA atstovai peržiūra (status badge)',
  render: () => (
    <AdvancedListItem
      title='Ona Onaitė'
      subtitle='a.k. 3850.........'
      trailing={{ type: 'status', label: 'Laukiama parašo', color: 'warning' }}
    />
  ),
}

const PasirenkamasSarasasStory = () => {
  const [checked, setChecked] = useState(true)

  return (
    <AdvancedListItem
      title='Nekilnojamasis daiktas'
      subtitle='Unikalus Nr. 4400.....'
      state={checked ? 'selected' : 'rest'}
      leading={{ type: 'checkbox', checked, onChange: setChecked }}
    />
  )
}

export const PasirenkamasSarasasPreset: Story = {
  name: 'Preset: Pasirenkamas sąrašas (checkbox, selected)',
  render: () => <PasirenkamasSarasasStory />,
}

const PEOPLE_LIST_ITEMS = [
  { id: 'rep-1', title: 'Petras Petraitis', subtitle: 'Vadovas', initials: 'PP' },
  { id: 'rep-2', title: 'Ona Onaitė', subtitle: 'Prokuristė', initials: 'OO' },
]

const LeadingMediaStory = () => {
  const [checkedIds, setCheckedIds] = useState<string[]>(['rep-1'])

  return (
    <Stack
      sx={{
        gap: 1,
        width: '100%',
        maxWidth: '32rem',
      }}
    >
      {PEOPLE_LIST_ITEMS.map((item) => {
        const checked = checkedIds.includes(item.id)

        return (
          <AdvancedListItem
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            state={checked ? 'selected' : 'rest'}
            leadingMedia={
              <Avatar sx={{ width: '2rem', height: '2rem' }}>{item.initials}</Avatar>
            }
            leading={{
              type: 'checkbox',
              checked,
              onChange: (next) =>
                setCheckedIds((prev) =>
                  next ? [...prev, item.id] : prev.filter((id) => id !== item.id),
                ),
            }}
          />
        )
      })}
    </Stack>
  )
}

export const CheckboxWithLeadingMedia: Story = {
  name: 'Leading-media: avatar + checkbox people list',
  render: () => <LeadingMediaStory />,
}

export const KrepselisPreset: Story = {
  name: 'Preset: Krepšelis (price)',
  render: () => (
    <AdvancedListItem
      title='NTR išrašas (objekto)'
      subtitle='Elektroninis dokumentas (PDF)'
      trailing={{ type: 'price', amount: '12,00 €', caption: 'su PVM' }}
    />
  ),
}

const OWNER_OPTIONS = [
  { id: 'owner-individual', title: 'Savininkas fizinis asmuo' },
  { id: 'owner-legal', title: 'Savininkas juridinis asmuo' },
]

const RadioExpandStory = () => {
  const [ownerId, setOwnerId] = useState(OWNER_OPTIONS[0].id)

  return (
    <Stack
      sx={{
        gap: 1,
        width: '100%',
        maxWidth: '32rem',
      }}
    >
      {OWNER_OPTIONS.map((option) => (
        <AdvancedListItem
          key={option.id}
          title={option.title}
          state={ownerId === option.id ? 'selected' : 'rest'}
          leading={{
            type: 'radio',
            name: 'owner-type',
            checked: ownerId === option.id,
            onChange: () => setOwnerId(option.id),
          }}
          expanded={ownerId === option.id}
          expandedContent={
            option.id === 'owner-legal' ? (
              <Stack
                sx={{
                  gap: 1.5,
                }}
              >
                <TextField label='Įmonės pavadinimas' size='small' />
                <TextField label='Įmonės kodas' size='small' />
                <TextField label='Adresas' size='small' />
              </Stack>
            ) : undefined
          }
        />
      ))}
    </Stack>
  )
}

export const RadioExpand: Story = {
  name: 'GRM-12030: radio-expand (only one open at a time)',
  render: () => <RadioExpandStory />,
}

const CHECKBOX_EXPAND_ITEMS = [
  { id: 'rep-1', title: 'Petras Petraitis', subtitle: 'Vadovas' },
  { id: 'rep-2', title: 'Ona Onaitė', subtitle: 'Prokuristė' },
]

const CheckboxExpandStory = () => {
  const [checkedIds, setCheckedIds] = useState<string[]>(['rep-1'])

  return (
    <Stack
      sx={{
        gap: 1,
        width: '100%',
        maxWidth: '32rem',
      }}
    >
      {CHECKBOX_EXPAND_ITEMS.map((item) => {
        const checked = checkedIds.includes(item.id)

        return (
          <AdvancedListItem
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            state={checked ? 'selected' : 'rest'}
            leading={{
              type: 'checkbox',
              checked,
              onChange: (next) =>
                setCheckedIds((prev) =>
                  next ? [...prev, item.id] : prev.filter((id) => id !== item.id),
                ),
            }}
            expanded={checked}
            expandedContent={<TextField label='Kontaktinis el. paštas' size='small' />}
          />
        )
      })}
    </Stack>
  )
}

export const CheckboxExpand: Story = {
  name: 'GRM-12030: checkbox-expand (several open independently)',
  render: () => <CheckboxExpandStory />,
}

const NestedRadioGroupStory = () => {
  const [checked, setChecked] = useState(true)
  const [declaration, setDeclaration] = useState('yes')

  return (
    <AdvancedListItem
      title='Savininkas juridinis asmuo'
      state={checked ? 'selected' : 'rest'}
      leading={{ type: 'radio', checked, onChange: setChecked }}
      expanded={checked}
      expandedContent={
        <Stack
          sx={{
            gap: 1.5,
          }}
        >
          <TextField label='Įmonės pavadinimas' size='small' />
          <TextField label='Adresas' size='small' />
          <FormControl>
            <FormLabel id='declaration-label'>Deklaracija teikiama</FormLabel>
            <RadioGroup
              aria-labelledby='declaration-label'
              value={declaration}
              onChange={(e) => setDeclaration(e.target.value)}
            >
              <FormControlLabel value='yes' control={<Radio />} label='Taip' />
              <FormControlLabel value='no' control={<Radio />} label='Ne' />
            </RadioGroup>
          </FormControl>
        </Stack>
      }
    />
  )
}

export const NestedRadioGroup: Story = {
  name: 'GRM-12030: nested radio group inside expanded content',
  render: () => <NestedRadioGroupStory />,
}

const LongExpandedContentStory = () => {
  const [checked, setChecked] = useState(true)

  return (
    <AdvancedListItem
      title='Nekilnojamasis daiktas su ilgu turiniu'
      state={checked ? 'selected' : 'rest'}
      leading={{ type: 'checkbox', checked, onChange: setChecked }}
      expanded={checked}
      expandedContent={
        <Stack
          sx={{
            gap: 1.5,
          }}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <TextField
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              label={`Laukas ${index + 1}`}
              size='small'
            />
          ))}
        </Stack>
      }
    />
  )
}

export const LongExpandedContent: Story = {
  name: 'GRM-12030: long expanded content (no internal scroll)',
  render: () => <LongExpandedContentStory />,
}

const TrailingShowcaseStory = () => {
  const [toggleChecked, setToggleChecked] = useState(false)
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [radioChecked, setRadioChecked] = useState(false)
  const [stepperValue, setStepperValue] = useState(1)

  return (
    <Stack
      sx={{
        gap: 1,
        width: '100%',
        maxWidth: '32rem',
      }}
    >
      <AdvancedListItem
        title='Nėra'
        subtitle='Show-trailing: nėra (trailing praleistas)'
      />
      <AdvancedListItem
        title='Actions'
        subtitle='Show-trailing: actions'
        trailing={{
          type: 'actions',
          actions: [
            { label: 'Keisti', icon: NotePencilIcon, onClick: () => {} },
            { label: 'Pašalinti', icon: TrashIcon, onClick: () => {} },
          ],
        }}
      />
      <AdvancedListItem
        title='Toggle'
        subtitle='Show-trailing: toggle'
        trailing={{ type: 'toggle', checked: toggleChecked, onChange: setToggleChecked }}
      />
      <AdvancedListItem
        title='Status'
        subtitle='Show-trailing: status'
        trailing={{ type: 'status', label: 'Laukiama parašo', color: 'warning' }}
      />
      <AdvancedListItem
        title='Checkbox'
        subtitle='Show-trailing: checkbox'
        trailing={{
          type: 'checkbox',
          checked: checkboxChecked,
          onChange: setCheckboxChecked,
        }}
      />
      <AdvancedListItem
        title='Radio'
        subtitle='Show-trailing: radio'
        trailing={{ type: 'radio', checked: radioChecked, onChange: setRadioChecked }}
      />
      <AdvancedListItem
        title='Chevron'
        subtitle='Show-trailing: chevron'
        trailing={{ type: 'chevron' }}
        onClick={() => console.log('Chevron row clicked — navigate to details')}
      />
      <AdvancedListItem
        title='Price'
        subtitle='Show-trailing: price'
        trailing={{ type: 'price', amount: '12,00 €', caption: 'su PVM' }}
      />
      <AdvancedListItem
        title='Stepper'
        subtitle='Show-trailing: stepper'
        trailing={{
          type: 'stepper',
          value: stepperValue,
          onChange: setStepperValue,
          min: 0,
        }}
      />
      <AdvancedListItem
        title='Price (su Pašalinti)'
        subtitle='Show-trailing: price + onDelete'
        trailing={{
          type: 'price',
          amount: '12,00 €',
          caption: 'su PVM',
          onDelete: () => {},
        }}
      />
    </Stack>
  )
}

export const TrailingShowcase: Story = {
  name: 'Preset: Show-trailing (visos trailing reikšmės)',
  render: () => <TrailingShowcaseStory />,
}

const LeadingShowcaseStory = () => {
  const [checked, setChecked] = useState(false)
  const [selected, setSelected] = useState(false)

  return (
    <Stack
      sx={{
        gap: 1,
        width: '100%',
        maxWidth: '32rem',
      }}
    >
      <AdvancedListItem title='Nėra' subtitle='Show-leading: nėra (leading praleistas)' />
      <AdvancedListItem
        title='Reorder (abu)'
        subtitle='Show-leading: reorder-both'
        leading={{ type: 'reorder', onMoveUp: () => {}, onMoveDown: () => {} }}
      />
      <AdvancedListItem
        title='Reorder (aukštyn)'
        subtitle='Show-leading: reorder-up'
        leading={{ type: 'reorder', onMoveUp: () => {} }}
      />
      <AdvancedListItem
        title='Reorder (žemyn)'
        subtitle='Show-leading: reorder-down'
        leading={{ type: 'reorder', onMoveDown: () => {} }}
      />
      <AdvancedListItem
        title='Checkbox'
        subtitle='Show-leading: checkbox'
        leading={{ type: 'checkbox', checked, onChange: setChecked }}
      />
      <AdvancedListItem
        title='Radio'
        subtitle='Show-leading: radio'
        leading={{ type: 'radio', checked: selected, onChange: setSelected }}
      />
      <AdvancedListItem
        title='Drag'
        subtitle='Show-leading: drag'
        leading={{ type: 'drag', 'aria-label': 'Vilkti ir pertvarkyti' }}
      />
      <AdvancedListItem
        title='Icon'
        subtitle='Show-leading: icon'
        leading={{ type: 'icon', icon: UserIcon, 'aria-label': 'Naudotojas' }}
      />
      <AdvancedListItem
        title='Avatar'
        subtitle='Show-leading: avatar'
        leading={{ type: 'avatar', initials: 'JP' }}
      />
      <AdvancedListItem
        title='Index'
        subtitle='Show-leading: index'
        leading={{ type: 'index', index: 1 }}
      />
    </Stack>
  )
}

export const LeadingShowcase: Story = {
  name: 'Preset: Show-leading (visos leading reikšmės)',
  render: () => <LeadingShowcaseStory />,
}

const UNIVERSAL_PRESET_OPTIONS = [
  { id: 'with-name', title: 'Rodyti su asmens vardu, pavarde ir gimimo data' },
  {
    id: 'anonymised',
    title: 'Nuasmenintas (be asmens vardo, pavardės, gimimo datos ir asmens kodo)',
  },
]

const UniversalPresetStory = () => {
  const [selectedId, setSelectedId] = useState(UNIVERSAL_PRESET_OPTIONS[0].id)

  return (
    <Stack
      sx={{
        gap: 1,
        width: '100%',
        maxWidth: '32rem',
      }}
    >
      {UNIVERSAL_PRESET_OPTIONS.map((option) => (
        <AdvancedListItem
          key={option.id}
          title={option.title}
          state={selectedId === option.id ? 'selected' : 'rest'}
          leading={{
            type: 'radio',
            name: 'universal-preset',
            checked: selectedId === option.id,
            onChange: () => setSelectedId(option.id),
          }}
        />
      ))}
    </Stack>
  )
}

export const UniversalPreset: Story = {
  name: 'Preset: pasirenkamų radijo eilučių sąrašas (universalus)',
  render: () => <UniversalPresetStory />,
}

const PAYMENT_TILE_BANKS = [
  { id: 'swedbank', title: 'Swedbank', initials: 'SW' },
  { id: 'seb', title: 'SEB bankas', initials: 'SE' },
  { id: 'luminor', title: 'Luminor', initials: 'Lu' },
]

const PaymentTileStory = () => {
  const [selectedId, setSelectedId] = useState(PAYMENT_TILE_BANKS[0].id)

  return (
    <Stack
      sx={{
        gap: 1,
        width: '100%',
        maxWidth: '32rem',
      }}
    >
      {PAYMENT_TILE_BANKS.map((bank) => (
        <AdvancedListItem
          key={bank.id}
          title={bank.title}
          state={selectedId === bank.id ? 'selected' : 'rest'}
          leadingMedia={
            <Avatar
              variant='rounded'
              sx={{
                width: '2rem',
                height: '2rem',
                bgcolor: 'grey.200',
                color: 'grey.700',
              }}
            >
              {bank.initials}
            </Avatar>
          }
          leading={{
            type: 'radio',
            name: 'payment-method',
            checked: selectedId === bank.id,
            onChange: () => setSelectedId(bank.id),
          }}
        />
      ))}
    </Stack>
  )
}

export const PaymentTilePreset: Story = {
  name: 'Preset: Payment tile (Card + Radio + Leading-media logo)',
  render: () => <PaymentTileStory />,
}

const KREPSELIS_ITEMS = [
  {
    id: 'ntr-israsas',
    title: 'NTR išrašas (objekto)',
    subtitle: 'Reg. Nr. 4400-1234-5678',
    amount: '12,00 €',
  },
  {
    id: 'jar-israsas',
    title: 'JAR išrašas',
    subtitle: 'Įmonės kodas 300000000',
    amount: '8,00 €',
  },
  {
    id: 'kadastro-israsas',
    title: 'Kadastro žemėlapio ištrauka',
    subtitle: 'Reg. Nr. 4400-9876-5432',
    amount: '5,00 €',
  },
]

const KrepselisWithDeleteStory = () => (
  <Stack
    sx={{
      gap: 1,
      width: '100%',
      maxWidth: '32rem',
    }}
  >
    {KREPSELIS_ITEMS.map((item) => (
      <AdvancedListItem
        key={item.id}
        title={item.title}
        subtitle={item.subtitle}
        trailing={{
          type: 'price',
          amount: item.amount,
          caption: 'su PVM',
          onDelete: () => {},
          deleteAriaLabel: `Pašalinti "${item.title}" iš krepšelio`,
        }}
      />
    ))}
  </Stack>
)

export const KrepselisWithDeletePreset: Story = {
  name: 'Preset: Krepšelis (su trynimu)',
  render: () => <KrepselisWithDeleteStory />,
}
