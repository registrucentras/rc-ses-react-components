import{j as e,r as y}from"./iframe-CaAjgiDY.js";import{R as t}from"./index-DhUVNJMy.js";import{R as g}from"./index-C4qE1JiG.js";import{T as r}from"./Typography-B8Xz7Te_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-30vMHB-b.js";import"./CircularProgress-C_e8dJbt.js";import"./memoTheme-j16Ll7-O.js";import"./styled-iySC8Kfl.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-CUllinC0.js";import"./index-CgDxUWFz.js";import"./Button-DeXV5bwr.js";import"./ButtonBase-DLvnTUYF.js";import"./useReducedMotion-cdwx6IhJ.js";import"./useTimeout-C5WAOen6.js";import"./isFocusVisible-B8k4qzLc.js";import"./DialogContent-BRUny0iw.js";import"./useSlot-KaxbMqBB.js";import"./mergeSlotProps-DG9sKMqj.js";import"./Modal-BYr7dPW9.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DdY0G2Ua.js";import"./index-YCi3Bcm8.js";import"./index-CaNanchZ.js";import"./getReactElementRef-LDBBixEr.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-BGQBNxPE.js";import"./Transition-U382hHqT.js";import"./Paper-8Jt0t79l.js";import"./DialogTitle-CukhnppU.js";const ee={component:g,title:"components/overlays/Dialog",parameters:{layout:"centered"},tags:["autodocs"]};function p({dialogTitle:n,size:m,children:d,...u}){const[S,a]=y.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>a(!0),variant:"contained",children:"Open Dialog"}),e.jsx(g,{...u,open:S,onClose:()=>a(!1),dialogTitle:n,size:m,actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>a(!1),color:"grey",variant:"outlined",children:"Cancel"}),e.jsx(t,{onClick:()=>a(!1),variant:"contained",children:"Confirm"})]}),children:d})]})}const i={render:n=>e.jsx(p,{...n,children:e.jsx(r,{children:"Are you sure you want to proceed?"})}),args:{dialogTitle:"Confirm Action"},parameters:{docs:{source:{code:`import { useState } from 'react'
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
}`}}}},o={render:n=>e.jsx(g,{...n,actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{color:"grey",variant:"outlined",children:"Cancel"}),e.jsx(t,{variant:"contained",children:"Confirm"})]}),open:!0,children:e.jsx(r,{children:"Are you sure you want to proceed?"})}),args:{dialogTitle:"Confirm Action"},parameters:{docs:{description:{story:"The dialog in its open state, without a trigger."}}}},s={render:n=>e.jsx(p,{...n,children:e.jsxs(r,{children:["This is a ",e.jsx("b",{children:"small"})," dialog (480px width)."]})}),args:{dialogTitle:"Small Dialog",size:"sm"},parameters:{docs:{description:{story:"Small size dialog (480px width)."},source:{code:`import { useState } from 'react'
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
}`}}}},c={render:n=>e.jsx(p,{...n,children:e.jsxs(r,{children:["This is a ",e.jsx("b",{children:"medium"})," dialog (600px width)."]})}),args:{dialogTitle:"Medium Dialog",size:"md"},parameters:{docs:{description:{story:"Medium size (600px width) dialog. This is the default size."},source:{code:`import { useState } from 'react'
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
}`}}}},l={render:n=>e.jsx(p,{...n,children:e.jsxs(r,{children:["This is a ",e.jsx("b",{children:"large"})," dialog (800px width)."]})}),args:{dialogTitle:"Large Dialog",size:"lg"},parameters:{docs:{description:{story:"Large size (800px width) dialog for content-heavy forms or information."},source:{code:`import { useState } from 'react'
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
}`}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <RcSesDialog {...args} actions={<>
          <RcSesButton color='grey' variant='outlined'>
            Cancel
          </RcSesButton>
          <RcSesButton variant='contained'>Confirm</RcSesButton>
        </>} open>
      <Typography>Are you sure you want to proceed?</Typography>
    </RcSesDialog>,
  args: {
    dialogTitle: 'Confirm Action'
  },
  parameters: {
    docs: {
      description: {
        story: 'The dialog in its open state, without a trigger.'
      }
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`Every other story here starts closed behind a trigger button, so the dialog
itself never reached a visual baseline (SAV-5648 / LIB-02). This one renders
it open.`,...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const ne=["Basic","Open","SmallDialog","MediumDialog","LargeDialog"];export{i as Basic,l as LargeDialog,c as MediumDialog,o as Open,s as SmallDialog,ne as __namedExportsOrder,ee as default};
//# sourceMappingURL=Dialog.stories-BF-4ktg5.js.map
