import { Box, ButtonBase, Stack } from '@mui/material'

import ArrowRightIcon from '@/assets/icons/ArrowRightIcon'
import InfoFillIcon from '@/assets/icons/InfoFillIcon'
import palette from '@/theme/palette'

import RcSesCardHeader from '../CardShell/CardHeader'
import RcSesIconWithSquareBackground from '../IconWithSquareBackground'
import { RcSesInfoItemProps } from './types'
import { InfoIcon } from '@phosphor-icons/react/dist/icons/Info'

function RcSesInfoItem({
  title,
  description,
  headingLevel = 3,
  Icon = InfoFillIcon,
  href,
  onClick,
  showArrow,
  className,
  testIds,
}: RcSesInfoItemProps) {
  const interactive = href !== undefined || onClick !== undefined
  const displayArrow = showArrow ?? interactive

  const content = (
    <Stack direction='row' spacing={2} sx={{ alignItems: 'center', width: '100%' }}>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <RcSesCardHeader
          title={title}
          description={description}
          headingLevel={headingLevel}
          icon={<RcSesIconWithSquareBackground Icon={InfoIcon} variant="soft" />}
          testIds={{
            root: testIds?.root,
            icon: testIds?.icon,
            heading: testIds?.heading,
            description: testIds?.description,
          }}
        />
      </Box>

      {displayArrow ? (
        <Box
          aria-hidden
          data-testid={testIds?.action}
          sx={{
            alignSelf: 'center',
            color: palette.primary[600],
            display: 'flex',
            flexShrink: 0,
          }}
        >
          <ArrowRightIcon fillColor={palette.primary[600]} size={20} />
        </Box>
      ) : null}
    </Stack>
  )

  if (!interactive) {
    return (
      <Box className={className} sx={{ width: '100%' }}>
        {content}
      </Box>
    )
  }

  return (
    <ButtonBase
      className={className}
      component={href ? 'a' : 'button'}
      href={href}
      onClick={onClick}
      sx={{
        display: 'block',
        textAlign: 'left',
        width: '100%',
        borderRadius: 'inherit',
      }}
    >
      {content}
    </ButtonBase>
  )
}

export default RcSesInfoItem
