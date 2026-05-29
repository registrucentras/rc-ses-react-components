import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as k}from"./index-CqJgnuY1.js";import{R as l}from"./index-BW_BBc8Y.js";import{R as B}from"./index-BiKRSj_O.js";import{T as s}from"./Typography-KNMXKf19.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./LoadingSpinner-Du8VMsnI.js";import"./createTheme-ClYpPn9r.js";import"./generateUtilityClasses-B2ID6taa.js";import"./styled-wPX_n2pi.js";import"./defaultTheme-Ca0qI0zY.js";import"./DefaultPropsProvider-DlaphqLI.js";import"./composeClasses-fLhin0tj.js";import"./useTranslation-5b1lrk9S.js";import"./Button-hbiS9jCt.js";import"./ButtonBase-B32g1HE7.js";import"./TransitionGroupContext-5O8tYVKT.js";import"./useIsFocusVisible-BAiRvXvd.js";import"./DialogContent-D9_eDhDp.js";import"./useTheme-DMf7ls7Q.js";import"./useTheme-CmrYzTbF.js";import"./Paper-BJpnW-nv.js";import"./Modal-CemL21Kl.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-US7Z0XfO.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlotProps-DdpE1lVm.js";import"./Portal-DTiMyCPn.js";import"./index-DyiuT81b.js";import"./index-BO2TEXkE.js";import"./utils-DvRHPEjt.js";import"./useId-vJrmKHVH.js";import"./DialogTitle-ALsOqeuU.js";const pe={component:B,title:"components/overlays/Dialog",parameters:{layout:"centered"},tags:["autodocs"]};function c({dialogTitle:n,size:C,children:O,...x}){const[v,o]=k.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>o(!0),variant:"contained",children:"Open Dialog"}),e.jsx(B,{...x,open:v,onClose:()=>o(!1),dialogTitle:n,size:C,actions:e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>o(!1),color:"grey",variant:"outlined",children:"Cancel"}),e.jsx(l,{onClick:()=>o(!1),variant:"contained",children:"Confirm"})]}),children:O})]})}const t={render:n=>e.jsx(c,{...n,children:e.jsx(s,{children:"Are you sure you want to proceed?"})}),args:{dialogTitle:"Confirm Action"},parameters:{docs:{source:{code:`import { useState } from 'react'
import { Typography } from '@mui/material'
import { RcSesButton, RcSesDialog } from '@registrucentras/rc-ses-react-components'

export function BasicDialog() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <RcSesButton onClick={() => setOpen(true)} variant='contained'>
        Open Dialog
      </RcSesButton>
      <RcSesDialog
        open={open}
        onClose={() => setOpen(false)}
        dialogTitle='Confirm Action'
        actions={
          <>
            <RcSesButton onClick={() => setOpen(false)} color='grey' variant='outlined'>
              Cancel
            </RcSesButton>
            <RcSesButton onClick={() => setOpen(false)} variant='contained'>
              Confirm
            </RcSesButton>
          </>
        }
      >
        <Typography>Are you sure you want to proceed?</Typography>
      </RcSesDialog>
    </>
  )
}`}}}},a={render:n=>e.jsx(c,{...n,children:e.jsxs(s,{children:["This is a ",e.jsx("b",{children:"small"})," dialog (480px width)."]})}),args:{dialogTitle:"Small Dialog",size:"sm"},parameters:{docs:{description:{story:"Small size dialog (480px width)."},source:{code:`import { useState } from 'react'
import { Typography } from '@mui/material'
import { RcSesButton, RcSesDialog } from '@registrucentras/rc-ses-react-components'

export function SmallDialog() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <RcSesButton onClick={() => setOpen(true)} variant='contained'>
        Open Dialog
      </RcSesButton>
      <RcSesDialog
        open={open}
        onClose={() => setOpen(false)}
        dialogTitle='Small Dialog'
        size='sm'
        actions={
          <>
            <RcSesButton onClick={() => setOpen(false)} color='grey' variant='outlined'>
              Cancel
            </RcSesButton>
            <RcSesButton onClick={() => setOpen(false)} variant='contained'>
              Confirm
            </RcSesButton>
          </>
        }
      >
        <Typography>This is a small dialog (480px width).</Typography>
      </RcSesDialog>
    </>
  )
}`}}}},r={render:n=>e.jsx(c,{...n,children:e.jsxs(s,{children:["This is a ",e.jsx("b",{children:"medium"})," dialog (600px width)."]})}),args:{dialogTitle:"Medium Dialog",size:"md"},parameters:{docs:{description:{story:"Medium size (600px width) dialog. This is the default size."},source:{code:`import { useState } from 'react'
import { Typography } from '@mui/material'
import { RcSesButton, RcSesDialog } from '@registrucentras/rc-ses-react-components'

export function MediumDialog() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <RcSesButton onClick={() => setOpen(true)} variant='contained'>
        Open Dialog
      </RcSesButton>
      <RcSesDialog
        open={open}
        onClose={() => setOpen(false)}
        dialogTitle='Medium Dialog'
        size='md'
        actions={
          <>
            <RcSesButton onClick={() => setOpen(false)} color='grey' variant='outlined'>
              Cancel
            </RcSesButton>
            <RcSesButton onClick={() => setOpen(false)} variant='contained'>
              Confirm
            </RcSesButton>
          </>
        }
      >
        <Typography>This is a medium dialog (600px width).</Typography>
      </RcSesDialog>
    </>
  )
}`}}}},i={render:n=>e.jsx(c,{...n,children:e.jsxs(s,{children:["This is a ",e.jsx("b",{children:"large"})," dialog (800px width)."]})}),args:{dialogTitle:"Large Dialog",size:"lg"},parameters:{docs:{description:{story:"Large size (800px width) dialog for content-heavy forms or information."},source:{code:`import { useState } from 'react'
import { Typography } from '@mui/material'
import { RcSesButton, RcSesDialog } from '@registrucentras/rc-ses-react-components'

export function LargeDialog() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <RcSesButton onClick={() => setOpen(true)} variant='contained'>
        Open Dialog
      </RcSesButton>
      <RcSesDialog
        open={open}
        onClose={() => setOpen(false)}
        dialogTitle='Large Dialog'
        size='lg'
        actions={
          <>
            <RcSesButton onClick={() => setOpen(false)} color='grey' variant='outlined'>
              Cancel
            </RcSesButton>
            <RcSesButton onClick={() => setOpen(false)} variant='contained'>
              Confirm
            </RcSesButton>
          </>
        }
      >
        <Typography>This is a large dialog (800px width).</Typography>
      </RcSesDialog>
    </>
  )
}`}}}};var p,m,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <DialogStory {...args}>
      <Typography>Are you sure you want to proceed?</Typography>
    </DialogStory>,
  args: {
    dialogTitle: 'Confirm Action'
  },
  parameters: {
    docs: {
      source: {
        code: \`import { useState } from 'react'
import { Typography } from '@mui/material'
import { RcSesButton, RcSesDialog } from '@registrucentras/rc-ses-react-components'

export function BasicDialog() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <RcSesButton onClick={() => setOpen(true)} variant='contained'>
        Open Dialog
      </RcSesButton>
      <RcSesDialog
        open={open}
        onClose={() => setOpen(false)}
        dialogTitle='Confirm Action'
        actions={
          <>
            <RcSesButton onClick={() => setOpen(false)} color='grey' variant='outlined'>
              Cancel
            </RcSesButton>
            <RcSesButton onClick={() => setOpen(false)} variant='contained'>
              Confirm
            </RcSesButton>
          </>
        }
      >
        <Typography>Are you sure you want to proceed?</Typography>
      </RcSesDialog>
    </>
  )
}\`
      }
    }
  }
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,d,S;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <DialogStory {...args}>
      <Typography>
        This is a <b>small</b> dialog (480px width).
      </Typography>
    </DialogStory>,
  args: {
    dialogTitle: 'Small Dialog',
    size: 'sm'
  },
  parameters: {
    docs: {
      description: {
        story: 'Small size dialog (480px width).'
      },
      source: {
        code: \`import { useState } from 'react'
import { Typography } from '@mui/material'
import { RcSesButton, RcSesDialog } from '@registrucentras/rc-ses-react-components'

export function SmallDialog() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <RcSesButton onClick={() => setOpen(true)} variant='contained'>
        Open Dialog
      </RcSesButton>
      <RcSesDialog
        open={open}
        onClose={() => setOpen(false)}
        dialogTitle='Small Dialog'
        size='sm'
        actions={
          <>
            <RcSesButton onClick={() => setOpen(false)} color='grey' variant='outlined'>
              Cancel
            </RcSesButton>
            <RcSesButton onClick={() => setOpen(false)} variant='contained'>
              Confirm
            </RcSesButton>
          </>
        }
      >
        <Typography>This is a small dialog (480px width).</Typography>
      </RcSesDialog>
    </>
  )
}\`
      }
    }
  }
}`,...(S=(d=a.parameters)==null?void 0:d.docs)==null?void 0:S.source}}};var y,f,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <DialogStory {...args}>
      <Typography>
        This is a <b>medium</b> dialog (600px width).
      </Typography>
    </DialogStory>,
  args: {
    dialogTitle: 'Medium Dialog',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Medium size (600px width) dialog. This is the default size.'
      },
      source: {
        code: \`import { useState } from 'react'
import { Typography } from '@mui/material'
import { RcSesButton, RcSesDialog } from '@registrucentras/rc-ses-react-components'

export function MediumDialog() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <RcSesButton onClick={() => setOpen(true)} variant='contained'>
        Open Dialog
      </RcSesButton>
      <RcSesDialog
        open={open}
        onClose={() => setOpen(false)}
        dialogTitle='Medium Dialog'
        size='md'
        actions={
          <>
            <RcSesButton onClick={() => setOpen(false)} color='grey' variant='outlined'>
              Cancel
            </RcSesButton>
            <RcSesButton onClick={() => setOpen(false)} variant='contained'>
              Confirm
            </RcSesButton>
          </>
        }
      >
        <Typography>This is a medium dialog (600px width).</Typography>
      </RcSesDialog>
    </>
  )
}\`
      }
    }
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var R,D,T;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <DialogStory {...args}>
      <Typography>
        This is a <b>large</b> dialog (800px width).
      </Typography>
    </DialogStory>,
  args: {
    dialogTitle: 'Large Dialog',
    size: 'lg'
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size (800px width) dialog for content-heavy forms or information.'
      },
      source: {
        code: \`import { useState } from 'react'
import { Typography } from '@mui/material'
import { RcSesButton, RcSesDialog } from '@registrucentras/rc-ses-react-components'

export function LargeDialog() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <RcSesButton onClick={() => setOpen(true)} variant='contained'>
        Open Dialog
      </RcSesButton>
      <RcSesDialog
        open={open}
        onClose={() => setOpen(false)}
        dialogTitle='Large Dialog'
        size='lg'
        actions={
          <>
            <RcSesButton onClick={() => setOpen(false)} color='grey' variant='outlined'>
              Cancel
            </RcSesButton>
            <RcSesButton onClick={() => setOpen(false)} variant='contained'>
              Confirm
            </RcSesButton>
          </>
        }
      >
        <Typography>This is a large dialog (800px width).</Typography>
      </RcSesDialog>
    </>
  )
}\`
      }
    }
  }
}`,...(T=(D=i.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const me=["Basic","SmallDialog","MediumDialog","LargeDialog"];export{t as Basic,i as LargeDialog,r as MediumDialog,a as SmallDialog,me as __namedExportsOrder,pe as default};
//# sourceMappingURL=Dialog.stories-60-AQHHf.js.map
