import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
} from '@mui/material'
import { ReactNode, useId } from 'react'

export type DialogSize = 'sm' | 'md' | 'lg'

const SIZE_MAP: Record<DialogSize, string> = {
  sm: '480px',
  md: '600px',
  lg: '800px',
}

export interface RcSesDialogProps extends Omit<
  MuiDialogProps,
  'children' | 'title' | 'PaperProps' | 'maxWidth'
> {
  dialogTitle: string | ReactNode
  children?: ReactNode
  actions: ReactNode
  size?: DialogSize
}

function RcSesDialog({
  dialogTitle,
  children,
  actions,
  onClose,
  size = 'md',
  className,
  ...props
}: RcSesDialogProps) {
  const dialogWidth = SIZE_MAP[size]
  const titleId = useId()
  const contentId = useId()

  return (
    <MuiDialog
      onClose={onClose}
      {...props}
      className={['RcSesDialog-root', className].filter(Boolean).join(' ')}
      maxWidth={false}
      aria-labelledby={titleId}
      aria-describedby={children ? contentId : undefined}
      slotProps={{
        paper: { sx: { width: dialogWidth } },
      }}
    >
      <DialogTitle
        id={titleId}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        {dialogTitle}
      </DialogTitle>
      {children && <DialogContent id={contentId}>{children}</DialogContent>}
      {actions && <DialogActions>{actions}</DialogActions>}
    </MuiDialog>
  )
}

export default RcSesDialog
