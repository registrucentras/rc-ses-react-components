import type { IconWeight, Icon as PhosphorIcon } from '@phosphor-icons/react'

import IconProps from '../IconProps'

interface CreateIconDefaults {
  size?: number
  weight?: IconWeight
}

/**
 * Wraps a Phosphor icon in the library's icon API: `fillColor` maps to Phosphor's
 * `color`, and `size`/`weight` fall back to the given defaults. Callers can still
 * override both per use.
 */
const createIcon = (
  Phosphor: PhosphorIcon,
  { size: defaultSize = 24, weight: defaultWeight = 'regular' }: CreateIconDefaults = {},
) => {
  function Icon({
    fillColor,
    size = defaultSize,
    weight = defaultWeight,
    ...rest
  }: IconProps) {
    return <Phosphor {...rest} size={size} weight={weight} color={fillColor} />
  }

  // Phosphor already names its components with the `Icon` suffix, e.g. `BriefcaseIcon`
  Icon.displayName = Phosphor.displayName

  return Icon
}

export default createIcon
