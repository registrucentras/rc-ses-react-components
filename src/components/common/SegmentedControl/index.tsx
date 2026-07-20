import React, { useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

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
  ariaLabel?: string
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
      ariaLabel,
    },
    ref,
  ) => {
    const { t } = useTranslation('common')
    const [focusIndex, setFocusIndex] = useState(() => {
      const selectedIndex = options.findIndex((opt) => opt.id === value && !opt.disabled)
      if (selectedIndex !== -1) return selectedIndex
      return Math.max(
        0,
        options.findIndex((opt) => !opt.disabled),
      )
    })
    const containerRef = useRef<HTMLDivElement>(null)
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])

    useImperativeHandle(ref, () => containerRef.current as HTMLDivElement)

    React.useEffect(() => {
      const selectedIndex = options.findIndex((opt) => opt.id === value && !opt.disabled)
      if (selectedIndex !== -1) setFocusIndex(selectedIndex)
    }, [value, options])

    const getEnabledIndices = useCallback(
      () => options.map((opt, i) => (!opt.disabled ? i : -1)).filter((i) => i !== -1),
      [options],
    )

    const focusSegment = useCallback((index: number) => {
      setFocusIndex(index)
      buttonRefs.current[index]?.focus()
    }, [])

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
            focusSegment(prevIndex)
            onChange(options[prevIndex].id)
            break
          }

          case 'ArrowRight':
          case 'ArrowDown': {
            e.preventDefault()
            const nextIndex =
              currentPos < enabledIndices.length - 1
                ? enabledIndices[currentPos + 1]
                : enabledIndices[0]
            focusSegment(nextIndex)
            onChange(options[nextIndex].id)
            break
          }

          case 'Home': {
            e.preventDefault()
            const firstIndex = enabledIndices[0]
            focusSegment(firstIndex)
            onChange(options[firstIndex].id)
            break
          }

          case 'End': {
            e.preventDefault()
            const lastIndex = enabledIndices[enabledIndices.length - 1]
            focusSegment(lastIndex)
            onChange(options[lastIndex].id)
            break
          }

          case 'Enter':
          case ' ':
            e.preventDefault()
            onChange(options[index].id)
            break

          default:
            break
        }
      },
      [focusSegment, getEnabledIndices, onChange, options],
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
    const defaultAriaLabel =
      ariaLabel ||
      t(
        role === 'tablist'
          ? 'components.SegmentedControl.tabs'
          : 'components.SegmentedControl.options',
      )
    const finalAriaLabel = defaultAriaLabel

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
        aria-label={finalAriaLabel}
        style={containerStyles}
      >
        {options.map((option, index) => (
          <RcSesSegmentButton
            key={option.id}
            ref={(el) => {
              buttonRefs.current[index] = el
            }}
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
