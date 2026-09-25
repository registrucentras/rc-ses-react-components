import type { IconWeight, Icon as PhosphorIcon } from '@phosphor-icons/react'

import IconProps from '../IconProps'

interface CreateIconOptions {
  size?: number
  weight?: IconWeight
  /** Component name, only needed when it doesn't follow `<Phosphor name><Weight>Icon` */
  name?: string
}

// Phosphor names its components with the `Icon` suffix (`CaretDownIcon`), so a bold
// variant becomes `CaretDownBoldIcon`, matching how the library names its icons
const nameFor = (Phosphor: PhosphorIcon, weight: IconWeight) => {
  const base = Phosphor.displayName ?? 'Icon'
  if (weight === 'regular') {
    return base
  }
  return base.replace(/Icon$/, `${weight[0].toUpperCase()}${weight.slice(1)}Icon`)
}

/**
 * Wraps a Phosphor icon in the library's icon API: `fillColor` maps to Phosphor's
 * `color`, and `size`/`weight` fall back to the given defaults. Callers can still
 * override both per use.
 */
const createIcon = (
  Phosphor: PhosphorIcon,
  {
    size: defaultSize = 24,
    weight: defaultWeight = 'regular',
    name,
  }: CreateIconOptions = {},
) => {
  function Icon({
    fillColor,
    size = defaultSize,
    weight = defaultWeight,
    ...rest
  }: IconProps) {
    return <Phosphor {...rest} size={size} weight={weight} color={fillColor} />
  }

  Icon.displayName = name ?? nameFor(Phosphor, defaultWeight)

  return Icon
}

export default createIcon
