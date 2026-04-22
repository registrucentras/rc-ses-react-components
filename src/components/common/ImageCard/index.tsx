import { ReactNode } from 'react'

import RcSesCard, { RcSesCardProps, RcSesCardTestIds } from '@/components/common/Card'

export type RcSesImageCardTestIds = Pick<
  RcSesCardTestIds,
  'root' | 'image' | 'header' | 'title' | 'description' | 'content'
>

export type RcSesImageCardProps = {
  image: ReactNode
  title: ReactNode
  description?: ReactNode
  button?: ReactNode
  testIds?: RcSesImageCardTestIds
  slotProps?: RcSesCardProps['slotProps']
}

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
      slotProps={slotProps}
      testIds={testIds}
      title={title}
      variant='elevation'
    >
      {button}
    </RcSesCard>
  )
}

export default RcSesImageCard
