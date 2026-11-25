import { Box, PaginationItem, useMediaQuery, useTheme } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ArrowLeftIcon, ArrowRightIcon } from '@/assets/icons/phosphorIcons'
import '@/i18n/i18n'
import { spacingTokens } from '@/theme/spacingTokens'

import DataPaginationSkeleton from './components/DataPaginationSkeleton'
import PaginationButton from './components/PaginationButton'
import { clampPage, getPaginationItems, positivePageSize } from './paginationModel'

interface PaginationOptions {
  page?: number
  defaultPage?: number
  onChange?: (page: number) => void
  desktopPageSize?: number
  mobilePageSize?: number
  onPageSizeChange?: (pageSize: number, page: number) => void
  prevLabel?: string
  nextLabel?: string
  isLoading?: boolean
  ariaLabel?: string
}

export type DataPaginationProps = PaginationOptions &
  ({ totalItems: number; count?: never } | { count: number; totalItems?: never })

const DataPagination = ({
  count,
  totalItems,
  desktopPageSize,
  mobilePageSize,
  onPageSizeChange,
  page,
  defaultPage = 1,
  onChange,
  prevLabel,
  nextLabel,
  isLoading = false,
  ariaLabel,
}: DataPaginationProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const { t } = useTranslation('input', { keyPrefix: 'components.DataPagination' })
  const pageSize = isMobile
    ? positivePageSize(mobilePageSize, 5)
    : positivePageSize(desktopPageSize, 10)
  const rawCount = totalItems !== undefined ? Math.ceil(totalItems / pageSize) : count
  const pageCount = Number.isFinite(rawCount) ? Math.max(0, Math.floor(rawCount)) : 0
  const [state, setState] = useState({
    page: page ?? defaultPage,
    externalPage: page,
    pageSize,
    firstItemIndex: (clampPage(page ?? defaultPage, pageCount) - 1) * pageSize,
  })

  let nextPage = page !== state.externalPage ? (page ?? state.page) : state.page
  let { firstItemIndex } = state
  if (page !== state.externalPage && nextPage !== state.page)
    firstItemIndex = (clampPage(nextPage, pageCount) - 1) * pageSize
  if (totalItems !== undefined && state.pageSize !== pageSize)
    nextPage = Math.floor(firstItemIndex / pageSize) + 1
  const currentPage = clampPage(nextPage, pageCount)
  if (currentPage !== nextPage) firstItemIndex = (currentPage - 1) * pageSize

  if (
    state.page !== currentPage ||
    state.externalPage !== page ||
    state.pageSize !== pageSize ||
    state.firstItemIndex !== firstItemIndex
  )
    setState({ page: currentPage, externalPage: page, pageSize, firstItemIndex })

  const committed = useRef({ page: currentPage, pageSize, pageCount })
  useEffect(() => {
    const previous = committed.current
    committed.current = { page: currentPage, pageSize, pageCount }
    const sizeChanged = totalItems !== undefined && previous.pageSize !== pageSize
    if (sizeChanged) onPageSizeChange?.(pageSize, currentPage)
    if (
      (sizeChanged || previous.pageCount !== pageCount) &&
      previous.page !== currentPage
    )
      onChange?.(currentPage)
  }, [currentPage, pageSize, pageCount, totalItems, onChange, onPageSizeChange])

  const handlePageChange = (newPage: number) => {
    if (isLoading || newPage < 1 || newPage > pageCount || newPage === currentPage) return
    if (page === undefined)
      setState({ ...state, page: newPage, firstItemIndex: (newPage - 1) * pageSize })
    onChange?.(newPage)
  }

  if (pageCount <= 1 && (!isLoading || totalItems !== undefined)) return null

  return (
    <Box
      component='nav'
      aria-label={ariaLabel ?? t('navigation')}
      aria-busy={isLoading || undefined}
    >
      {isLoading ? (
        <Box
          role='status'
          aria-label={t('loading')}
          sx={{
            display: 'flex',
            gap: { xs: 0, md: spacingTokens['spacing-aliases-pagination-button-gap'] },
          }}
        >
          <DataPaginationSkeleton isMobile={isMobile} />
        </Box>
      ) : (
        <Box
          component='ul'
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'nowrap',
            listStyle: 'none',
            p: 0,
            m: 0,
            gap: spacingTokens['spacing-aliases-pagination-button-gap'],
            '@media (max-width: 359px)': { gap: 0 },
          }}
        >
          <Box component='li'>
            <PaginationButton
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label={prevLabel ?? t('previous')}
              label={prevLabel ?? t('previousText')}
              icon={<ArrowLeftIcon size={16} aria-hidden />}
            />
          </Box>
          {getPaginationItems(pageCount, currentPage, isMobile).map((item) => (
            <Box
              component='li'
              key={item}
              aria-hidden={typeof item !== 'number' || undefined}
            >
              {typeof item === 'number' ? (
                <PaginationItem
                  type='page'
                  page={item}
                  selected={item === currentPage}
                  aria-label={t('page', { page: item })}
                  aria-current={item === currentPage ? 'page' : undefined}
                  onClick={() => handlePageChange(item)}
                  sx={{ minWidth: 40, width: 40, p: 0 }}
                />
              ) : (
                <PaginationItem type={item} />
              )}
            </Box>
          ))}
          <Box component='li'>
            <PaginationButton
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === pageCount}
              aria-label={nextLabel ?? t('next')}
              label={nextLabel ?? t('nextText')}
              icon={<ArrowRightIcon size={16} aria-hidden />}
              iconPosition='end'
            />
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default DataPagination
