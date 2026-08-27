import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import normalizeSx from '@/components/utils/normalizeSx'
import palette, { common } from '@/theme/palette'

import { RcSesSideNavItem, RcSesSideNavProps } from './SideNav.types'
import SideNavPillList from './components/SideNavPillList'
import SideNavRow from './components/SideNavRow'

function RcSesSideNav({
  items,
  activeItemId,
  onItemClick,
  title,
  sx,
}: RcSesSideNavProps) {
  const { t } = useTranslation('common', { keyPrefix: 'components.RcSesSideNav' })
  const navTitle = title ?? t('title')

  const getItemAriaLabel = (item: RcSesSideNavItem) =>
    item.count !== undefined
      ? t('itemLabel', { label: item.label, count: item.count })
      : undefined

  return (
    <Box
      component='nav'
      aria-label={navTitle}
      sx={[
        {
          width: '100%',
          // Only the mobile bar overlays scrolling content.
          backgroundColor: { xs: common.white, md: 'transparent' },
          // Above content setting zIndex: 1 - the nav precedes it in DOM order.
          zIndex: 2,
        },
        ...normalizeSx(sx),
      ]}
    >
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          gap: '0.25rem',
        }}
      >
        <Typography
          sx={{
            width: '100%',
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            color: palette.grey[600],
          }}
        >
          {navTitle}
        </Typography>
        {items.map((item) => (
          <SideNavRow
            key={item.id}
            label={item.label}
            count={item.count}
            ariaLabel={getItemAriaLabel(item)}
            active={item.id === activeItemId}
            onClick={onItemClick ? () => onItemClick(item.id) : undefined}
          />
        ))}
      </Box>

      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <SideNavPillList
          items={items}
          activeItemId={activeItemId}
          onItemClick={onItemClick}
          getItemAriaLabel={getItemAriaLabel}
        />
      </Box>
    </Box>
  )
}

export default RcSesSideNav
export type { RcSesSideNavItem, RcSesSideNavProps } from './SideNav.types'
