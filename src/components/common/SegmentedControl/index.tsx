import React, { useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react'

import { grey } from '@/theme/palette'

import RcSesSegmentButton, { type RcSesSegmentOption } from './components/SegmentButton'

export type { RcSesSegmentOption }

export interface RcSesSegmentedControlProps {
  options: RcSesSegmentOption[]
  value: string
  onChange: (value: string) => void
  size?: 'small' | 'regular'
  role?: 'radiogroup' | 'tablist'
  disableBg?: boolean
}

const RcSesSegmentedControl = React.forwardRef<
  HTMLDivElement,
  RcSesSegmentedControlProps
>(
  (
    {
      options,
      value,
      onChange,
      size = 'regular',
      role = 'radiogroup',
      disableBg = false,
    },
    ref,
  ) => {
    const [focusIndex, setFocusIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => containerRef.current as HTMLDivElement)

    const getEnabledIndices = useCallback(
      () => options.map((opt, i) => (!opt.disabled ? i : -1)).filter((i) => i !== -1),
      [options],
    )

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
        const enabledIndices = getEnabledIndices()
        const currentPos = enabledIndices.indexOf(index)

        switch (e.key) {
          case 'ArrowLeft':
          case 'ArrowUp': {
            e.preventDefault()
            const prevIndex =
              currentPos > 0
                ? enabledIndices[currentPos - 1]
                : enabledIndices[enabledIndices.length - 1]
            setFocusIndex(prevIndex)
            break
          }

          case 'ArrowRight':
          case 'ArrowDown': {
            e.preventDefault()
            const nextIndex =
              currentPos < enabledIndices.length - 1
                ? enabledIndices[currentPos + 1]
                : enabledIndices[0]
            setFocusIndex(nextIndex)
            break
          }

          case 'Home':
            e.preventDefault()
            setFocusIndex(enabledIndices[0])
            break

          case 'End':
            e.preventDefault()
            setFocusIndex(enabledIndices[enabledIndices.length - 1])
            break

          case 'Enter':
          case ' ':
            e.preventDefault()
            onChange(options[index].id)
            break

          default:
            break
        }
      },
      [getEnabledIndices, onChange, options],
    )

    const handleSegmentClick = useCallback(
      (optionId: string, index: number) => {
        onChange(optionId)
        setFocusIndex(index)
      },
      [onChange],
    )

    const handleFocus = useCallback((index: number) => {
      setFocusIndex(index)
    }, [])

    const isSelected = useCallback((optionId: string) => value === optionId, [value])
    const ariaRole = role === 'tablist' ? 'tab' : 'radio'

    const containerStyles = useMemo<React.CSSProperties>(
      () => ({
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2px 8px',
        padding: '4px',
        backgroundColor: disableBg ? 'transparent' : grey['50'],
        width: 'fit-content',
        borderRadius: '8px',
      }),
      [disableBg],
    )

    return (
      <div
        ref={containerRef}
        role={role}
        aria-label='Segmented control options'
        style={containerStyles}
      >
        {options.map((option, index) => (
          <RcSesSegmentButton
            key={option.id}
            option={option}
            isSelected={isSelected(option.id)}
            isFocused={focusIndex === index && !option.disabled}
            size={size}
            ariaRole={ariaRole}
            onClick={(optionId) => handleSegmentClick(optionId, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onFocus={() => handleFocus(index)}
          />
        ))}
      </div>
    )
  },
)

export default RcSesSegmentedControl
