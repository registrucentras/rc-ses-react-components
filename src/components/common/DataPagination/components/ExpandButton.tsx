import type { ButtonProps } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { CaretDownIcon, CaretUpIcon } from '@/assets/icons/phosphorIcons'
import '@/i18n/i18n'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'

import PaginationButton from './PaginationButton'

export interface ExpandButtonProps extends Omit<ButtonProps, 'children'> {
  expanded: boolean
  moreLabel?: string
  lessLabel?: string
}

export default function ExpandButton({
  expanded,
  moreLabel,
  lessLabel,
  ...props
}: ExpandButtonProps) {
  const { t } = useTranslation('input', { keyPrefix: 'components.DataPagination' })
  return (
    <PaginationButton
      {...props}
      aria-expanded={expanded}
      label={expanded ? (lessLabel ?? t('showLess')) : (moreLabel ?? t('showMore'))}
      icon={
        expanded ? (
          <CaretUpIcon size={16} aria-hidden />
        ) : (
          <CaretDownIcon size={16} aria-hidden />
        )
      }
      iconPosition='end'
      hideLabelOnMobile={false}
      sx={[
        {
          '&&': {
            pl: spacingRoleBasedTokens['space-16'],
            pr: spacingRoleBasedTokens['space-12'],
          },
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx ?? {}]),
      ]}
    />
  )
}
