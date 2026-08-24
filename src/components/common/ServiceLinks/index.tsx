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
  renderLink,
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
        const item = items[index]
        const key = (!isLoading && item?.key) || String(index)

        return (
          <Fragment key={key}>
            {dividers && index > 0 ? (
              <Divider sx={{ borderColor: palette.grey[200] }} />
            ) : null}

            {isLoading || !item ? (
              <ServiceLinkItem label='' isLoading testIds={testIds} />
            ) : (
              <ServiceLinkItem
                {...item}
                renderLink={renderLink}
                testIds={testIds}
              />
            )}
          </Fragment>
        )
      })}
    </Box>
  )
}

export default RcSesServiceLinks
