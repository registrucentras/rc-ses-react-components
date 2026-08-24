import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import palette, { common } from '@/theme/palette'

import { RcSesSideNavItem, RcSesSideNavProps } from './SideNav.types'
import SideNavPillList from './components/SideNavPillList'
import SideNavRow from './components/SideNavRow'
import useSideNavScrollSpy from './hooks/useSideNavScrollSpy'

function RcSesSideNav({
  items,
  activeItemId: controlledActiveItemId,
  onItemClick,
  title,
  offset,
  sx,
}: RcSesSideNavProps) {
  const { t } = useTranslation('common', { keyPrefix: 'components.RcSesSideNav' })
  const navTitle = title ?? t('title')

  const isControlled = controlledActiveItemId !== undefined
  const itemIds = items.map((item) => item.id)
  const scrollSpy = useSideNavScrollSpy({ itemIds: isControlled ? [] : itemIds, offset })
  const activeItemId = isControlled ? controlledActiveItemId : scrollSpy.activeItemId

  const isInteractive = !isControlled || !!onItemClick
  const handleItemClick = isInteractive
    ? (id: string) => {
        if (!isControlled) scrollSpy.scrollToItem(id)
        onItemClick?.(id)
      }
    : undefined

  const getItemAriaLabel = (item: RcSesSideNavItem) =>
    item.count !== undefined
      ? t('itemLabel', { label: item.label, count: item.count })
      : undefined

  return (
    <Box
      component='nav'
      aria-label={navTitle}
      sx={{ width: '100%', height: '100%', ...sx }}
    >
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          gap: '0.25rem',
          position: 'sticky',
          top: 0,
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
            onClick={handleItemClick ? () => handleItemClick(item.id) : undefined}
          />
        ))}
      </Box>

      <Box
        sx={{
          display: { xs: 'block', md: 'none' },
          position: 'sticky',
          top: 0,
          zIndex: 1,
          backgroundColor: common.white,
        }}
      >
        <SideNavPillList
          items={items}
          activeItemId={activeItemId}
          onItemClick={handleItemClick}
          getItemAriaLabel={getItemAriaLabel}
        />
      </Box>
    </Box>
  )
}

export default RcSesSideNav
export type { RcSesSideNavItem, RcSesSideNavProps } from './SideNav.types'
