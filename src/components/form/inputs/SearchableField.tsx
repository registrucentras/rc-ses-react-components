import { IconButton } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import type { OutlinedTextFieldProps } from '@mui/material/TextField'
import TextField from '@mui/material/TextField'
import { forwardRef, useState } from 'react'
import type { UseControllerProps } from 'react-hook-form'
import { useController } from 'react-hook-form'

import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon'
import XCircleFillIcon from '@/assets/icons/XCircleFillIcon'

import RcSesFormControlWrapper, {
  RcSesFormControlWrapperProps,
} from '../components/FormControlWrapper'

type ModalComponentProps = {
  open: boolean
  onSubmit: (value: string) => void
  onClose: () => void
}

type TControllerProps = UseControllerProps<any, any>
type ImmediateControllerProps = 'control' | 'rules' | 'disabled' | 'name'

type TFieldProps = Omit<OutlinedTextFieldProps, 'variant'>

type TWrapperProps = RcSesFormControlWrapperProps
type ImmediateWrapperProps = 'id' | 'label' | 'errors'

type Props = Pick<TControllerProps, ImmediateControllerProps> &
  Pick<TWrapperProps, ImmediateWrapperProps> & {
    ModalComponent: React.JSXElementConstructor<ModalComponentProps>
    slotProps?: {
      controller?: Partial<Omit<TControllerProps, ImmediateControllerProps>>
      field?: Partial<TFieldProps>
      wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>
    }
  }

const RcSesSearchableField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { control, errors, label, ModalComponent, rules, slotProps, ...fieldProps } =
    props
  const { name } = fieldProps

  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const id = props.id ?? crypto.randomUUID()

  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
    rules,
    shouldUnregister: true,
    ...slotProps?.controller,
  })

  return (
    <>
      <RcSesFormControlWrapper
        id={id}
        label={label}
        errors={errors}
        {...slotProps?.wrapper}
      >
        <TextField
          inputRef={ref}
          id={id}
          InputProps={{
            inputProps: {
              onClick: () => setModalOpen(true),
              sx: { cursor: 'pointer' },
            },
            readOnly: true,
            startAdornment: (
              <InputAdornment position='start' onClick={() => setModalOpen(true)}>
                <MagnifyingGlassIcon />
              </InputAdornment>
            ),
            endAdornment: !!value && (
              <InputAdornment position='end'>
                <IconButton onClick={() => onChange('')}>
                  <XCircleFillIcon />
                </IconButton>
              </InputAdornment>
            ),
            sx: { cursor: 'pointer' },
          }}
          error={!!errors}
          fullWidth
          {...slotProps?.field}
          value={value}
          label={undefined}
        />
      </RcSesFormControlWrapper>

      <ModalComponent
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={(val: string) => onChange(val)}
      />
    </>
  )
})

export default RcSesSearchableField
