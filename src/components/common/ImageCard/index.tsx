import { ReactNode } from 'react'

import RcSesCard, { RcSesCardProps, RcSesCardTestIds } from '@/components/common/Card'
import normalizeSx from '@/components/utils/normalizeSx'
import { colorTokens } from '@/theme/colorTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { spacingTokens } from '@/theme/spacingTokens'
import { typographyTokens } from '@/theme/typographyTokens'

export type RcSesImageCardTestIds = Pick<
  RcSesCardTestIds,
  'root' | 'image' | 'header' | 'title' | 'description' | 'content'
>

export interface RcSesImageCardProps {
  image: ReactNode
  title: ReactNode
  description?: ReactNode
  button?: ReactNode
  testIds?: RcSesImageCardTestIds
  slotProps?: RcSesCardProps['slotProps']
}

/**
 * Figma Image-heading-text: image, 8px, heading and description, then the
 * `Stack/loose` gap to the button. The card's own gap is cleared so the slots
 * can carry those two different gaps; consumer slot styles still win.
 */
function RcSesImageCard({
  image,
  title,
  description,
  button,
  testIds,
  slotProps,
}: RcSesImageCardProps) {
  return (
    <RcSesCard
      centered
      contentBackground={false}
      description={description}
      image={image}
      slotProps={{
        ...slotProps,
        image: {
          ...slotProps?.image,
          sx: [
            { mb: spacingRoleBasedTokens['space-8'] },
            ...normalizeSx(slotProps?.image?.sx),
          ],
        },
        title: {
          ...slotProps?.title,
          sx: [
            {
              color: colorTokens['text-default'],
              fontSize: typographyTokens['font-size-heading-card-title'],
              lineHeight: typographyTokens['line-height-heading-card-title'],
              fontWeight: 500,
            },
            ...normalizeSx(slotProps?.title?.sx),
          ],
        },
        description: {
          ...slotProps?.description,
          sx: [
            {
              color: colorTokens['text-default'],
              fontSize: typographyTokens['font-size-body-small'],
              lineHeight: typographyTokens['line-height-body-small'],
              fontWeight: 400,
            },
            ...normalizeSx(slotProps?.description?.sx),
          ],
        },
        content: {
          ...slotProps?.content,
          sx: [
            { mt: spacingTokens['spacing-aliases-stack-loose'] },
            ...normalizeSx(slotProps?.content?.sx),
          ],
        },
      }}
      // Responsive, so it also replaces RcSesCard's md breakpoint gap.
      sx={{ gap: { xs: 0, md: 0 } }}
      testIds={testIds}
      title={title}
      variant='elevation'
    >
      {button}
    </RcSesCard>
  )
}

export default RcSesImageCard
