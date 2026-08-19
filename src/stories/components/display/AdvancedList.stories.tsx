import {
  Avatar,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import InfoFillIcon from '@/assets/icons/InfoFillIcon'
import NotePencilIcon from '@/assets/icons/NotePencilIcon'
import TrashIcon from '@/assets/icons/TrashIcon'
import UserIcon from '@/assets/icons/UserIcon'
import AdvancedList, { type AdvancedListItemData } from '@/components/common/AdvancedList'
import RcSesSelect from '@/components/form/inputs/Select'

const buildItems = (): AdvancedListItemData[] =>
  Array.from({ length: 8 }, (_, index) => ({
    id: `item-${index + 1}`,
    title: `Service option ${index + 1}`,
    subtitle: index % 2 === 0 ? 'Recommended for most users' : 'Alternative flow',
  }))

const meta = {
  title: 'components/display/AdvancedList',
  component: AdvancedList,
  tags: ['autodocs'],
  args: {
    items: buildItems(),
    error: undefined,
  },
  argTypes: {
    items: {
      control: false,
    },
    error: {
      control: false,
    },
  },
} satisfies Meta<typeof AdvancedList>

export default meta

type Story = StoryObj<typeof meta>

const MainStory = () => {
  const [selectedId, setSelectedId] = useState('item-1')

  const items: AdvancedListItemData[] = buildItems().map((item) => ({
    ...item,
    state: selectedId === item.id ? 'selected' : 'rest',
    leading: {
      type: 'radio',
      name: 'service-option',
      checked: selectedId === item.id,
      onChange: () => setSelectedId(item.id),
    },
  }))

  return <AdvancedList items={items} />
}

export const Main: Story = {
  render: () => <MainStory />,
}

export const Error: Story = {
  args: {
    error: 'Unable to load list items. Please try again.',
  },
}

const OWNER_TYPE_OPTIONS = [
  { id: 'owner-individual', title: 'Savininkas fizinis asmuo' },
  { id: 'owner-legal', title: 'Savininkas juridinis asmuo' },
]

const KitchenSinkStory = () => {
  const [igaliotojaiChecked, setIgaliotojaiChecked] = useState(false)
  const [signatoryToggle, setSignatoryToggle] = useState(false)
  const [propertyChecked, setPropertyChecked] = useState(true)

  const items: AdvancedListItemData[] = [
    {
      id: 'igaliotojai',
      title: 'Jonas Jonaitis',
      subtitle: 'a.k. 3850.........',
      state: igaliotojaiChecked ? 'selected' : 'rest',
      leadingMedia: <Avatar sx={{ width: '2rem', height: '2rem' }}>JJ</Avatar>,
      leading: {
        type: 'checkbox',
        checked: igaliotojaiChecked,
        onChange: setIgaliotojaiChecked,
      },
      trailing: {
        type: 'actions',
        actions: [
          { label: 'Keisti', icon: NotePencilIcon, onClick: () => {} },
          { label: 'Pašalinti', icon: TrashIcon, onClick: () => {} },
        ],
      },
    },
    {
      id: 'ja-atstovai-redaguojama',
      title: 'Petras Petraitis',
      subtitle: 'Vadovas',
      leading: { type: 'reorder', onMoveUp: () => {}, onMoveDown: () => {} },
      trailing: {
        type: 'toggle',
        checked: signatoryToggle,
        onChange: setSignatoryToggle,
      },
    },
    {
      id: 'ja-atstovai-perziura',
      title: 'Ona Onaitė',
      subtitle: 'a.k. 3850.........',
      trailing: { type: 'status', label: 'Laukiama parašo', color: 'warning' },
    },
    {
      id: 'pasirenkamas-sarasas',
      title: 'Nekilnojamasis daiktas',
      subtitle: 'Unikalus Nr. 4400.....',
      state: propertyChecked ? 'selected' : 'rest',
      leading: {
        type: 'checkbox',
        checked: propertyChecked,
        onChange: setPropertyChecked,
      },
    },
    {
      id: 'krepselis',
      title: 'NTR išrašas (objekto)',
      subtitle: 'Elektroninis dokumentas (PDF)',
      trailing: { type: 'price', amount: '12,00 €', caption: 'su PVM' },
    },
  ]

  return <AdvancedList items={items} />
}

export const KitchenSink: Story = {
  name: 'Presetai: 5 realūs naudojimo atvejai',
  render: () => <KitchenSinkStory />,
}

const OwnerTypeExpandStory = () => {
  const [ownerTypeId, setOwnerTypeId] = useState(OWNER_TYPE_OPTIONS[0].id)
  const [declaration, setDeclaration] = useState('yes')

  const items: AdvancedListItemData[] = OWNER_TYPE_OPTIONS.map((option) => ({
    id: option.id,
    title: option.title,
    state: ownerTypeId === option.id ? 'selected' : 'rest',
    leading: {
      type: 'radio',
      name: 'owner-type',
      checked: ownerTypeId === option.id,
      onChange: () => setOwnerTypeId(option.id),
    },
    expanded: ownerTypeId === option.id,
    expandedContent:
      option.id === 'owner-legal' ? (
        <Stack sx={{ gap: 1.5 }}>
          <TextField label='Įmonės pavadinimas' size='small' />
          <TextField label='Įmonės kodas' size='small' />
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
      ) : undefined,
  }))

  return <AdvancedList items={items} />
}

export const OwnerTypeExpand: Story = {
  name: 'Preset: savininko tipas (radio + expand)',
  render: () => <OwnerTypeExpandStory />,
}

type OwnerBranchFormModel = {
  individual: { municipality: string | null }
  legalEntity: { legalForm: string | null }
}

const MUNICIPALITY_OPTIONS = [
  { value: 'vilnius', label: 'Vilniaus m. sav.' },
  { value: 'kaunas', label: 'Kauno m. sav.' },
]

const LEGAL_FORM_OPTIONS = [
  { value: 'uab', label: 'UAB' },
  { value: 'mb', label: 'Mažoji bendrija' },
]

const PANEL_SX = {
  backgroundColor: 'grey.100',
  borderRadius: '.5rem',
  fontSize: '.75rem',
  m: 0,
  overflowX: 'auto',
  p: 1.5,
}

const RadioBranchFormStory = () => {
  const [ownerTypeId, setOwnerTypeId] = useState(OWNER_TYPE_OPTIONS[0].id)
  const [shouldUnregister, setShouldUnregister] = useState(true)

  const { control, watch } = useForm<OwnerBranchFormModel>({
    defaultValues: {
      individual: { municipality: null },
      legalEntity: { legalForm: null },
    },
  })

  const formState = watch()

  // The non-selected branch stays in form state when shouldUnregister is off, so the
  // submitted payload is built from the selected branch instead of the whole form.
  const payload =
    ownerTypeId === 'owner-legal'
      ? { legalEntity: formState.legalEntity }
      : { individual: formState.individual }

  // Only the selected branch renders its fields, so switching unmounts the other one -
  // that unmount is what makes shouldUnregister observable.
  const renderBranchFields = (optionId: string) => {
    if (optionId !== ownerTypeId) return undefined

    if (optionId === 'owner-legal') {
      return (
        <RcSesSelect
          id='owner-branch-legal-form'
          control={control}
          name='legalEntity.legalForm'
          label='Juridinio asmens forma'
          options={LEGAL_FORM_OPTIONS}
          slotProps={{ controller: { shouldUnregister } }}
        />
      )
    }

    return (
      <RcSesSelect
        id='owner-branch-municipality'
        control={control}
        name='individual.municipality'
        label='Savivaldybė'
        options={MUNICIPALITY_OPTIONS}
        slotProps={{ controller: { shouldUnregister } }}
      />
    )
  }

  const items: AdvancedListItemData[] = OWNER_TYPE_OPTIONS.map((option) => ({
    id: option.id,
    title: option.title,
    state: ownerTypeId === option.id ? 'selected' : 'rest',
    leading: {
      type: 'radio',
      name: 'owner-branch-form',
      checked: ownerTypeId === option.id,
      onChange: () => setOwnerTypeId(option.id),
    },
    expanded: ownerTypeId === option.id,
    expandedContent: renderBranchFields(option.id),
  }))

  return (
    <Stack gap={2}>
      <FormControlLabel
        control={
          <Checkbox
            checked={shouldUnregister}
            onChange={(event) => setShouldUnregister(event.target.checked)}
          />
        }
        label='slotProps.controller.shouldUnregister (bibliotekos numatytoji reikšmė - true)'
      />

      <AdvancedList items={items} />

      <Stack direction={{ xs: 'column', md: 'row' }} gap={2}>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography variant='body2'>Formos būsena</Typography>
          <Box component='pre' sx={PANEL_SX}>
            {JSON.stringify(formState, null, 2)}
          </Box>
        </Box>

        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography variant='body2'>Submit payload (tik pasirinkta šaka)</Typography>
          <Box component='pre' sx={PANEL_SX}>
            {JSON.stringify(payload, null, 2)}
          </Box>
        </Box>
      </Stack>
    </Stack>
  )
}

export const RadioBranchForm: Story = {
  name: 'Preset: radio šakos su react-hook-form',
  render: () => <RadioBranchFormStory />,
}

const FigmaAnatomyStory = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const items: AdvancedListItemData[] = ['anatomy-1', 'anatomy-2', 'anatomy-3'].map(
    (id) => ({
      id,
      title: 'Įrašo pavadinimas',
      label: 'Label',
      subtitle: 'a.k. 3850.........',
      metaItems: [
        { icon: InfoFillIcon, text: 'Meta info 1' },
        { icon: InfoFillIcon, text: 'Meta info 2' },
        { icon: InfoFillIcon, text: 'Meta info 3' },
      ],
      state: selectedId === id ? 'selected' : 'rest',
      leading: {
        type: 'radio',
        name: 'anatomy-demo',
        checked: selectedId === id,
        onChange: () => setSelectedId(id),
      },
      trailing: {
        type: 'actions',
        actions: [
          { label: 'Keisti', icon: NotePencilIcon, onClick: () => {} },
          { label: 'Pašalinti', icon: TrashIcon, onClick: () => {} },
        ],
      },
      expanded: selectedId === id,
      expandedContent: 'Išplėstas turinys — pakeiskite čia (pvz. JA atstovų sąrašas)',
    }),
  )

  return <AdvancedList items={items} />
}

export const FigmaAnatomy: Story = {
  name: 'Anatomija: Leading × Trailing × Label × Meta × Expand',
  render: () => <FigmaAnatomyStory />,
}

const LeadingOptionsStory = () => {
  const [checked, setChecked] = useState(false)
  const [selected, setSelected] = useState(false)

  const items: AdvancedListItemData[] = [
    {
      id: 'leading-none',
      title: 'Nėra',
      subtitle: 'Show-leading: nėra (leading praleistas)',
    },
    {
      id: 'leading-reorder-both',
      title: 'Reorder (abu)',
      subtitle: 'Show-leading: reorder-both',
      leading: { type: 'reorder', onMoveUp: () => {}, onMoveDown: () => {} },
    },
    {
      id: 'leading-reorder-up',
      title: 'Reorder (aukštyn)',
      subtitle: 'Show-leading: reorder-up',
      leading: { type: 'reorder', onMoveUp: () => {} },
    },
    {
      id: 'leading-reorder-down',
      title: 'Reorder (žemyn)',
      subtitle: 'Show-leading: reorder-down',
      leading: { type: 'reorder', onMoveDown: () => {} },
    },
    {
      id: 'leading-checkbox',
      title: 'Checkbox',
      subtitle: 'Show-leading: checkbox',
      leading: { type: 'checkbox', checked, onChange: setChecked },
    },
    {
      id: 'leading-radio',
      title: 'Radio',
      subtitle: 'Show-leading: radio',
      leading: { type: 'radio', checked: selected, onChange: setSelected },
    },
    {
      id: 'leading-drag',
      title: 'Drag',
      subtitle: 'Show-leading: drag',
      leading: { type: 'drag', 'aria-label': 'Vilkti ir pertvarkyti' },
    },
    {
      id: 'leading-icon',
      title: 'Icon',
      subtitle: 'Show-leading: icon',
      leading: { type: 'icon', icon: UserIcon, 'aria-label': 'Naudotojas' },
    },
    {
      id: 'leading-avatar',
      title: 'Avatar',
      subtitle: 'Show-leading: avatar',
      leading: { type: 'avatar', initials: 'JP' },
    },
    {
      id: 'leading-index',
      title: 'Index',
      subtitle: 'Show-leading: index',
      leading: { type: 'index', index: 1 },
    },
  ]

  return <AdvancedList items={items} />
}

export const LeadingOptions: Story = {
  name: 'Kitchen sink: visos Leading parinktys (paginuota)',
  render: () => <LeadingOptionsStory />,
}

const TrailingOptionsStory = () => {
  const [toggleChecked, setToggleChecked] = useState(false)
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [radioChecked, setRadioChecked] = useState(false)
  const [stepperValue, setStepperValue] = useState(1)

  const items: AdvancedListItemData[] = [
    {
      id: 'trailing-none',
      title: 'Nėra',
      subtitle: 'Show-trailing: nėra (trailing praleistas)',
    },
    {
      id: 'trailing-actions',
      title: 'Actions',
      subtitle: 'Show-trailing: actions',
      trailing: {
        type: 'actions',
        actions: [
          { label: 'Keisti', icon: NotePencilIcon, onClick: () => {} },
          { label: 'Pašalinti', icon: TrashIcon, onClick: () => {} },
        ],
      },
    },
    {
      id: 'trailing-toggle',
      title: 'Toggle',
      subtitle: 'Show-trailing: toggle',
      trailing: { type: 'toggle', checked: toggleChecked, onChange: setToggleChecked },
    },
    {
      id: 'trailing-status',
      title: 'Status',
      subtitle: 'Show-trailing: status',
      trailing: { type: 'status', label: 'Laukiama parašo', color: 'warning' },
    },
    {
      id: 'trailing-checkbox',
      title: 'Checkbox',
      subtitle: 'Show-trailing: checkbox',
      trailing: {
        type: 'checkbox',
        checked: checkboxChecked,
        onChange: setCheckboxChecked,
      },
    },
    {
      id: 'trailing-radio',
      title: 'Radio',
      subtitle: 'Show-trailing: radio',
      trailing: { type: 'radio', checked: radioChecked, onChange: setRadioChecked },
    },
    {
      id: 'trailing-chevron',
      title: 'Chevron',
      subtitle: 'Show-trailing: chevron',
      trailing: { type: 'chevron' },
      onClick: () => console.log('Chevron row clicked — navigate to details'),
    },
    {
      id: 'trailing-price',
      title: 'Price',
      subtitle: 'Show-trailing: price',
      trailing: { type: 'price', amount: '12,00 €', caption: 'su PVM' },
    },
    {
      id: 'trailing-stepper',
      title: 'Stepper',
      subtitle: 'Show-trailing: stepper',
      trailing: {
        type: 'stepper',
        value: stepperValue,
        onChange: setStepperValue,
        min: 0,
        'aria-label': 'Kiekis',
      },
    },
  ]

  return <AdvancedList items={items} />
}

export const TrailingOptions: Story = {
  name: 'Kitchen sink: visos Trailing parinktys (paginuota)',
  render: () => <TrailingOptionsStory />,
}

const STATE_VARIANTS = ['rest', 'selected', 'disabled', 'error'] as const

const StateShowcaseStory = () => {
  const items: AdvancedListItemData[] = STATE_VARIANTS.map((state) => ({
    id: `state-${state}`,
    title: 'Pavyzdys',
    state,
    leading: { type: 'radio', checked: state === 'selected', onChange: () => {} },
    trailing: {
      type: 'actions',
      actions: [
        { label: 'Keisti', icon: NotePencilIcon, onClick: () => {} },
        { label: 'Pašalinti', icon: TrashIcon, onClick: () => {} },
      ],
    },
  }))

  return <AdvancedList items={items} />
}

export const StateShowcase: Story = {
  name: 'Kitchen sink: visi state (rest/selected/disabled/error)',
  render: () => <StateShowcaseStory />,
}

const UNIVERSAL_PRESET_OPTIONS = [
  { id: 'with-name', title: 'Rodyti su asmens vardu, pavarde ir gimimo data' },
  {
    id: 'anonymised',
    title: 'Nuasmenintas (be asmens vardo, pavardės, gimimo datos ir asmens kodo)',
  },
]

const UniversalPresetListStory = () => {
  const [selectedId, setSelectedId] = useState(UNIVERSAL_PRESET_OPTIONS[0].id)

  const items: AdvancedListItemData[] = UNIVERSAL_PRESET_OPTIONS.map((option) => ({
    ...option,
    state: selectedId === option.id ? 'selected' : 'rest',
    leading: {
      type: 'radio',
      name: 'universal-preset',
      checked: selectedId === option.id,
      onChange: () => setSelectedId(option.id),
    },
  }))

  return <AdvancedList items={items} />
}

export const UniversalPresetList: Story = {
  name: 'Preset: pasirenkamų radijo eilučių sąrašas (universalus)',
  render: () => <UniversalPresetListStory />,
}

const PAYMENT_TILE_BANKS = [
  { id: 'swedbank', title: 'Swedbank', initials: 'SW' },
  { id: 'seb', title: 'SEB bankas', initials: 'SE' },
  { id: 'luminor', title: 'Luminor', initials: 'Lu' },
]

const PaymentTileListStory = () => {
  const [paymentMethodId, setPaymentMethodId] = useState(PAYMENT_TILE_BANKS[0].id)

  const items: AdvancedListItemData[] = PAYMENT_TILE_BANKS.map((bank) => ({
    id: bank.id,
    title: bank.title,
    state: paymentMethodId === bank.id ? 'selected' : 'rest',
    leadingMedia: (
      <Avatar
        variant='rounded'
        sx={{ width: '2rem', height: '2rem', bgcolor: 'grey.200', color: 'grey.700' }}
      >
        {bank.initials}
      </Avatar>
    ),
    leading: {
      type: 'radio',
      name: 'payment-method',
      checked: paymentMethodId === bank.id,
      onChange: () => setPaymentMethodId(bank.id),
    },
  }))

  return <AdvancedList items={items} />
}

export const PaymentTileList: Story = {
  name: 'Preset: Payment tile (Card + Radio + Leading-media logo)',
  render: () => <PaymentTileListStory />,
}

const CART_ITEMS_SOURCE = [
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

const CartWithDeleteListStory = () => {
  const items: AdvancedListItemData[] = CART_ITEMS_SOURCE.map((item) => ({
    id: item.id,
    title: item.title,
    subtitle: item.subtitle,
    trailing: {
      type: 'price',
      amount: item.amount,
      caption: 'su PVM',
      onDelete: () => {},
      deleteAriaLabel: `Pašalinti "${item.title}" iš krepšelio`,
    },
  }))

  return <AdvancedList items={items} />
}

export const CartWithDeleteList: Story = {
  name: 'Preset: Krepšelis (su trynimu)',
  render: () => <CartWithDeleteListStory />,
}
