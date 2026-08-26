import { Box, Divider } from '@mui/material'
import { Fragment } from 'react'

import palette from '@/theme/palette'

import ServiceLinkItem from './ServiceLinkItem'
import { RcSesServiceLinksProps } from './types'

function RcSesServiceLinks({
  items,
  dividers = true,
  isLoading = false,
  skeletonCount = 4,
  linkComponent,
  className,
  testIds,
}: RcSesServiceLinksProps) {
  const rowCount = isLoading ? skeletonCount : items.length

  return (
    <Box
      className={className}
      data-testid={testIds?.root}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      {Array.from({ length: rowCount }).map((_, index) => {
        if (isLoading) {
          return (
            <Fragment key={index}>
              {dividers && index > 0 ? (
                <Divider sx={{ borderColor: palette.grey[200] }} />
              ) : null}
              <ServiceLinkItem label='' isLoading testIds={testIds} />
            </Fragment>
          )
        }

        const item = items[index]
        const { key: itemKey, ...itemProps } = item
        const key = itemKey || String(index)

        return (
          <Fragment key={key}>
            {dividers && index > 0 ? (
              <Divider sx={{ borderColor: palette.grey[200] }} />
            ) : null}
            <ServiceLinkItem
              {...itemProps}
              linkComponent={linkComponent}
              testIds={testIds}
            />
          </Fragment>
        )
      })}
    </Box>
  )
}

export default RcSesServiceLinks
