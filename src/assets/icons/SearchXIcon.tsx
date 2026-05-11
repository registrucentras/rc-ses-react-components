import { MagnifyingGlassIcon as MagnifyingGlass, XIcon } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function SearchXIcon({ className, size = 24, fillColor, ...rest }: IconProps) {
  const innerSize = Math.round(size * 0.45)

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        height: size,
        position: 'relative',
        verticalAlign: 'middle',
        width: size,
      }}
    >
      <MagnifyingGlass
        {...rest}
        size={size}
        color={fillColor}
        style={{ position: 'absolute', inset: 0 }}
      />
      <XIcon
        aria-hidden='true'
        size={innerSize}
        weight='bold'
        color={fillColor}
        style={{
          left: '44.5%',
          position: 'absolute',
          top: '43%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </span>
  )
}

export default SearchXIcon
