import {
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
  Typography,
} from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'

/**
 * Coverage stories for theme slots that no component in this library renders
 * (SAV-5648 / LIB-02).
 *
 * `src/theme/light/` overrides 39 `Mui*` slots, but the visual baselines only
 * protect the ones some story actually puts on the page. `MuiTable`,
 * `MuiTableCell`, `MuiCardHeader`, `MuiCardContent` and `MuiLinearProgress` have
 * no `RcSes*` wrapper - `RcSesCard` builds its own header and content out of
 * Stack/Box instead of MUI's slots - so they ship to consumers and were
 * exercised by nothing. These stories render the plain MUI components under the
 * theme, so a broken or silently dead override surfaces as a pixel diff.
 */
const meta: Meta = {
  title: 'theme/Themed MUI components',
  parameters: {
    docs: {
      description: {
        component:
          'Plain MUI components that the theme styles but this library does not wrap. They exist so the visual regression baselines cover every slot in `src/theme/light/`.',
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
