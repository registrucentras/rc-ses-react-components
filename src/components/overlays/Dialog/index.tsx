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

export interface RcSesDialogProps
  extends Omit<MuiDialogProps, 'children' | 'title' | 'PaperProps' | 'maxWidth'> {
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
  ...props
}: RcSesDialogProps) {
  const dialogWidth = SIZE_MAP[size]
  const titleId = useId()
  const contentId = useId()

  return (
    <MuiDialog
      onClose={onClose}
      {...props}
      maxWidth={false}
      PaperProps={{ sx: { width: dialogWidth, borderRadius: '16px' } }}
      aria-labelledby={titleId}
      aria-describedby={children ? contentId : undefined}
    >
      <DialogTitle
        id={titleId}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          fontSize: '24px',
          lineHeight: '32px',
          padding: '2rem 2rem 1rem !important',
        }}
      >
        {dialogTitle}
      </DialogTitle>

      {children && (
        <DialogContent
          id={contentId}
          sx={{
            padding: '0 2rem !important',
          }}
        >
          {children}
        </DialogContent>
      )}

      {actions && (
        <DialogActions
          sx={{
            padding: '1.25rem 2rem 2rem !important',
          }}
        >
          {actions}
        </DialogActions>
      )}
    </MuiDialog>
  )
}

export default RcSesDialog
