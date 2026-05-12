import { Skeleton } from '@mui/material'
import React from 'react'

const LOADING_SKELETON = <Skeleton variant='rounded' width={20} height={20} />

const getLoadingIcon = (fallback: React.ReactNode, loading?: boolean) =>
  loading ? LOADING_SKELETON : fallback

export default getLoadingIcon
