import { Box, Stack } from '@mui/material'
import type { CSSProperties } from 'react'
import { useForm } from 'react-hook-form'

import FileDropzone from '@/components/form/inputs/FileDropzone'
import FileUpload from '@/components/form/inputs/FileUpload'

export default function FileUploadTokenPreview({
  dropzone = false,
  overrides = false,
}: {
  dropzone?: boolean
  overrides?: boolean
}) {
  const { control } = useForm({
    defaultValues: {
      empty: null,
      disabled: null,
      error: null,
      selected: [
        new File(['Example document'], 'document.pdf', { type: 'application/pdf' }),
      ],
    },
  })
  const Component = dropzone ? FileDropzone : FileUpload
  return (
    <Stack
      spacing={2}
      sx={{ maxWidth: '700px' }}
      style={
        overrides
          ? ({
              '--rc-color-surface-base': '#fffaf0',
              '--rc-color-border-default': '#a56835',
              '--rc-color-border-focus': '#8b4513',
              '--rc-color-status-error-border': '#a02040',
              '--rc-radius-input': '12px',
            } as CSSProperties)
          : undefined
      }
    >
      {(
        [
          'empty',
          'disabled',
          'error',
          ...(dropzone ? (['selected'] as const) : []),
        ] as const
      ).map((name) => (
        <Box key={name}>
          <Component
            id={`file-token-${name}`}
            name={name}
            control={control}
            label={`Document / ${name}`}
            disabled={name === 'disabled'}
            errors={
              name === 'error'
                ? { type: 'required', message: 'Upload a document' }
                : undefined
            }
            slotProps={{ wrapper: { labelOnTop: true, description: 'PDF, JPG or PNG' } }}
          />
        </Box>
      ))}
    </Stack>
  )
}
