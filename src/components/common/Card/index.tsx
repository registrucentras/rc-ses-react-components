import {
  Box,
  BoxProps,
  CardProps,
  Card as MuiCard,
  Stack,
  StackProps,
  SxProps,
  Theme,
  Typography,
  TypographyProps,
} from '@mui/material'
import { ReactNode } from 'react'

import palette from '@/theme/palette'

export type RcSesCardTestIds = {
  root?: string
  header?: string
  title?: string
  description?: string
  content?: string
  actions?: string
  leadingActions?: string
  trailingActions?: string
}

export type RcSesCardProps = Omit<CardProps, 'children' | 'title'> & {
  title: ReactNode
  description?: ReactNode
  children: ReactNode
  leadingActions?: ReactNode
  trailingActions?: ReactNode
  testIds?: RcSesCardTestIds
  slotProps?: {
    actions?: StackProps
    content?: BoxProps
    description?: TypographyProps
    header?: StackProps
    leadingActions?: StackProps
    title?: TypographyProps
    trailingActions?: StackProps
  }
}

type SxEntry =
  Extract<SxProps<Theme>, ReadonlyArray<unknown>> extends ReadonlyArray<infer T>
    ? T
    : never

function isSxArray(sx: SxProps<Theme>): sx is ReadonlyArray<SxEntry> {
  return Array.isArray(sx)
}

function normalizeSx(sx: SxProps<Theme> | undefined): SxEntry[] {
  if (sx === undefined) {
    return []
  }

  if (isSxArray(sx)) {
    return [...sx]
  }

  return [sx]
}

function RcSesCard({
  title,
  description,
  children,
  leadingActions,
  trailingActions,
  testIds,
  slotProps,
  sx,
  ...cardProps
}: RcSesCardProps) {
  const actionsProps = slotProps?.actions
  const contentProps = slotProps?.content
  const descriptionProps = slotProps?.description
  const headerProps = slotProps?.header
  const leadingActionsProps = slotProps?.leadingActions
  const titleProps = slotProps?.title
  const trailingActionsProps = slotProps?.trailingActions

  const normalizedSx = normalizeSx(sx)
  const normalizedTitleSx = normalizeSx(titleProps?.sx)
  const normalizedDescriptionSx = normalizeSx(descriptionProps?.sx)
  const normalizedContentSx = normalizeSx(contentProps?.sx)
  const normalizedActionsSx = normalizeSx(actionsProps?.sx)
  const normalizedLeadingActionsSx = normalizeSx(leadingActionsProps?.sx)
  const normalizedTrailingActionsSx = normalizeSx(trailingActionsProps?.sx)

  const hasActions = Boolean(leadingActions || trailingActions)

  return (
    <MuiCard
      {...cardProps}
      data-testid={testIds?.root}
      sx={[
        {
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: '1rem', md: '1.5rem' },
          p: { xs: '1.25rem 1.5rem 1.5rem', md: '1.5rem 2rem 2rem' },
        },
        ...normalizedSx,
      ]}
    >
      <Stack
        {...headerProps}
        data-testid={testIds?.header}
        direction='column'
        alignItems='flex-start'
        spacing={0.5}
      >
        <Typography
          color={palette.grey[900]}
          data-testid={testIds?.title}
          variant='h5'
          {...titleProps}
          sx={[
            {
              lineHeight: '1.75rem',
            },
            ...normalizedTitleSx,
          ]}
        >
          {title}
        </Typography>

        {!!description && (
          <Typography
            color={palette.grey[800]}
            data-testid={testIds?.description}
            variant='body2'
            {...descriptionProps}
            sx={[
              {
                fontWeight: 300,
                lineHeight: '1.25rem',
                whiteSpace: headerLayout === 'horizontal' ? 'nowrap' : 'normal',
              },
              ...normalizedDescriptionSx,
            ]}
          >
            {description}
          </Typography>
        )}
      </Stack>

      <Box
        {...contentProps}
        data-testid={testIds?.content}
        sx={[
          {
            alignItems: 'center',
            alignSelf: 'stretch',
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            justifyContent: 'center',
          },
          ...normalizedContentSx,
        ]}
      >
        {children}
      </Box>

      {hasActions && (
        <Stack
          {...actionsProps}
          data-testid={testIds?.actions}
          direction={{ xs: 'column', md: 'row' }}
          sx={[
            {
              alignItems: { xs: 'stretch', md: 'center' },
              justifyContent: {
                xs: 'stretch',
                md: leadingActions ? 'space-between' : 'flex-end',
              },
              pt: '0.5rem',
              width: '100%',
            },
            ...normalizedActionsSx,
          ]}
          spacing={{ xs: 1, md: 3 }}
        >
          {!!leadingActions && (
            <Stack
              {...leadingActionsProps}
              data-testid={testIds?.leadingActions}
              direction={{ xs: 'column', md: 'row' }}
              sx={[
                {
                  display: { xs: 'none', md: 'flex' },
                  alignItems: { xs: 'stretch', md: 'center' },
                  minHeight: { md: '2.75rem' },
                  width: { xs: '100%', md: 'auto' },

                  '& > *': {
                    width: { xs: '100%', md: 'auto' },
                  },
                },
                ...normalizedLeadingActionsSx,
              ]}
            >
              {leadingActions}
            </Stack>
          )}

          {!!trailingActions && (
            <Stack
              {...trailingActionsProps}
              data-testid={testIds?.trailingActions}
              direction={{ xs: 'column', md: 'row' }}
              sx={[
                {
                  alignItems: { xs: 'stretch', md: 'center' },
                  justifyContent: { xs: 'stretch', md: 'flex-end' },
                  width: { xs: '100%', md: 'auto' },

                  '& > *': {
                    width: { xs: '100%', md: 'auto' },
                  },
                },
                ...normalizedTrailingActionsSx,
              ]}
              spacing={{ xs: 1, md: 1.5 }}
            >
              {trailingActions}
            </Stack>
          )}
        </Stack>
      )}
    </MuiCard>
  )
}

export default RcSesCard
