import { Radio, Stack } from '@mui/material'

import { ListWithIcons, RcSesCard } from '@/library'
import palette from '@/theme/palette'

type Props = {
  title: string
  description?: string
  items: any[]
  selected: boolean
  onSelect: () => void
}

const SelectableCardListItem = ({
  title,
  description,
  items,
  selected,
  onSelect,
}: Props) => (
  <RcSesCard
    onClick={onSelect}
    headerLayout='horizontal'
    sx={{
      cursor: 'pointer',
      border: '1px solid',
      borderRadius: '10px',
      padding: { xs: '16px' },
      borderColor: selected ? palette.primary.main : palette.grey[300],
      backgroundColor: selected ? palette.primary[50] : 'transparent',
      transition: 'all 0.2s ease',
    }}
    title={
      <Stack direction='row' alignItems='center' gap='12px' spacing={1} sx={{}}>
        <Radio
          checked={selected}
          sx={{
            p: 0,
            height: '20px',
            width: '20px',
          }}
        />
        {title}
      </Stack>
    }
    description={description}
    slotProps={{
      title: {
        sx: {
          fontSize: '16px',
          fontWeight: 600,
          lineHeight: '24px',
        },
      },
      description: {
        sx: {
          fontSize: '16px',
          fontWeight: 300,
          lineHeight: '24px',
        },
      },
      content: {
        sx: {
          backgroundColor: 'transparent',
        },
      },
    }}
  >
    <ListWithIcons items={items} layout='horizontal' />
  </RcSesCard>
)

export default SelectableCardListItem
