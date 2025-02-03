import palette from '@/theme/palette'

import { ThemeColors } from './ThemeColors'

const resolvePaletteColorPath = (path: ThemeColors | 'white') => {
  if (!path) return palette.primary.main

  const resolved = path.split('.').reduce((a: any, b: any) => a[b], palette)

  return resolved ?? path
}

export default resolvePaletteColorPath
