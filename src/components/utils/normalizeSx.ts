import { SxProps, Theme } from '@mui/material'

type SxEntry =
  Extract<SxProps<Theme>, readonly unknown[]> extends readonly (infer T)[] ? T : never

function isSxArray(sx: SxProps<Theme>): sx is readonly SxEntry[] {
  return Array.isArray(sx)
}

function normalizeSx(sx: SxProps<Theme> | undefined): SxEntry[] {
  if (sx === undefined) {
    return []
  }

  if (isSxArray(sx)) {
    return [...sx]
  }

  return [sx]
}

export default normalizeSx
