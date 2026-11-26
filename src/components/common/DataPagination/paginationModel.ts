export type PaginationItem = number | 'start-ellipsis' | 'end-ellipsis'

export const positivePageSize = (value: number | undefined, fallback: number) =>
  value !== undefined && Number.isFinite(value) && value >= 1
    ? Math.floor(value)
    : fallback

export const clampPage = (page: number, count: number) =>
  Math.max(1, Math.min(Number.isFinite(page) ? Math.floor(page) : 1, Math.max(1, count)))

export function getPaginationItems(
  count: number,
  page: number,
  mobile: boolean,
): PaginationItem[] {
  if (count <= (mobile ? 5 : 7)) return Array.from({ length: count }, (_, i) => i + 1)

  let visible: number[]
  if (mobile) {
    if (page <= 3) visible = [1, 2, 3, count]
    else if (page >= count - 2) visible = [1, count - 2, count - 1, count]
    else visible = [1, page, count]
  } else {
    const start = Math.max(1, Math.min(page - 2, count - 4))
    visible = [...new Set([1, ...Array.from({ length: 5 }, (_, i) => start + i), count])]
  }

  const items: PaginationItem[] = []
  visible.forEach((number, index) => {
    if (index > 0 && number - visible[index - 1] > 1)
      items.push(number <= page ? 'start-ellipsis' : 'end-ellipsis')
    items.push(number)
  })
  return items
}
