import {
  Box,
  Card,
  CardContent,
  CardHeader,
  LinearProgress,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'

/**
 * Coverage stories for theme slots no other story puts on the page
 * (SAV-5648 / LIB-02). `visual/theme-slots.spec.ts` fails if one is missing.
 *
 * Two reasons a slot ends up here:
 *
 * 1. **No `RcSes*` wrapper renders it.** `MuiTable`, `MuiTableCell`,
 *    `MuiCardHeader`, `MuiCardContent` and `MuiLinearProgress` ship to consumers
 *    and are exercised by nothing - `RcSesCard` builds its own header and
 *    content out of Stack/Box rather than MUI's slots.
 * 2. **The wrapper never shows it open.** `MuiTooltip` is styled through
 *    `RcSesTooltip`, but that component owns its open state internally and no
 *    story can force it, so the popper never reaches a baseline.
 *
 * Either way these render the plain MUI component under the theme, so a broken
 * or silently dead override surfaces as a pixel diff.
 */
const meta: Meta = {
  title: 'theme/Themed MUI components',
  parameters: {
    docs: {
      description: {
        component:
          'Plain MUI components the theme styles that no other story renders - either because this library does not wrap them, or because the wrapper never shows them open. They exist so the visual baselines cover every slot in `src/theme/light/`.',
      },
    },
  },
}

export default meta
type Story = StoryObj

const objects = [
  {
    address: 'Vilniaus g. 1, Vilnius',
    regNo: '10/123456',
    type: 'Butas',
    uniqueIdentifier: '4400-1234-5678',
  },
  {
    address: 'Kauno g. 12-3, Kaunas',
    regNo: '20/654321',
    type: 'Gyvenamasis namas',
    uniqueIdentifier: '4400-8765-4321',
  },
  {
    address: 'Klaipėdos g. 7, Klaipėda',
    regNo: '30/112233',
    type: 'Žemės sklypas',
    uniqueIdentifier: '4400-1122-3344',
  },
]

export const TableSlots: Story = {
  name: 'Table',
  render: () => (
    <TableContainer sx={{ maxWidth: 760 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Reg.&nbsp;Nr.</TableCell>
            <TableCell>Daiktas</TableCell>
            <TableCell>Unikalus&nbsp;Nr.</TableCell>
            <TableCell>Adresas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {objects.map((object) => (
            <TableRow key={object.regNo}>
              <TableCell component='th' scope='row'>
                {object.regNo}
              </TableCell>
              <TableCell>{object.type}</TableCell>
              <TableCell>{object.uniqueIdentifier}</TableCell>
              <TableCell>{object.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

export const CardSlots: Story = {
  name: 'Card',
  // MuiCardContent's override carries `.side` and `.full` padding variants on
  // top of its default, so all three are rendered - a variant that stops
  // matching is invisible unless something uses it.
  render: () => (
    <Stack direction='row' spacing={2} sx={{ alignItems: 'flex-start' }}>
      <Card sx={{ width: 240 }}>
        <CardHeader title='Numatytasis' subheader='MuiCardContent-root' />
        <CardContent>
          <Typography variant='body2'>padding: 1.25rem 1.5rem</Typography>
        </CardContent>
      </Card>

      <Card sx={{ width: 240 }}>
        <CardHeader title='Šoninis' subheader='.side' />
        <CardContent className='side'>
          <Typography variant='body2'>padding: 1.25rem</Typography>
        </CardContent>
      </Card>

      <Card sx={{ width: 240 }}>
        <CardHeader title='Pilnas' subheader='.full' />
        <CardContent className='full'>
          <Typography variant='body2'>padding: 1.5rem</Typography>
        </CardContent>
      </Card>
    </Stack>
  ),
}

export const LinearProgressSlots: Story = {
  name: 'LinearProgress',
  // Both variants matter: the override hides the `bar1` slot only while the
  // root carries the indeterminate class, which is the v9 replacement for the
  // removed `bar1Indeterminate` key.
  render: () => (
    <Stack spacing={3} sx={{ width: 360 }}>
      <Stack spacing={1}>
        <Typography variant='body2'>determinate (40 %)</Typography>
        <LinearProgress aria-label='determinate' value={40} variant='determinate' />
      </Stack>

      <Stack spacing={1}>
        <Typography variant='body2'>indeterminate</Typography>
        <LinearProgress aria-label='indeterminate' />
      </Stack>
    </Stack>
  ),
}

export const TooltipSlots: Story = {
  name: 'Tooltip',
  // `arrow` and the bottom placement are both deliberate: the override styles
  // the `arrow` slot separately, and shifts the tooltip via a
  // [data-popper-placement*="bottom"] selector that only applies below.
  render: () => (
    <Stack
      direction='row'
      spacing={8}
      sx={{ alignItems: 'center', justifyContent: 'center', py: '6rem' }}
    >
      <Tooltip arrow open placement='top' title='Paaiškinimas viršuje'>
        <Box component='span' sx={{ border: '1px dashed', borderColor: 'divider', p: 1 }}>
          top
        </Box>
      </Tooltip>

      <Tooltip arrow open placement='bottom' title='Paaiškinimas apačioje'>
        <Box component='span' sx={{ border: '1px dashed', borderColor: 'divider', p: 1 }}>
          bottom
        </Box>
      </Tooltip>
    </Stack>
  ),
}
