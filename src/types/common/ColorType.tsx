export type ColorType =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'

export function isColorType(type: any): boolean {
  return [
    'inherit',
    'primary',
    'secondary',
    'success',
    'error',
    'info',
    'warning',
  ].includes(type)
}
