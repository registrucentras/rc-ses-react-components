import { format, isValid, parseISO } from 'date-fns'

/** Local calendar dates, without timezone conversion. Partial selection is supported. */
export type DateRangeValue = [string | null, string | null]

export function readRange(value: unknown): DateRangeValue {
  if (!Array.isArray(value)) return [null, null]
  const valid = (item: unknown) =>
    typeof item === 'string' &&
    /^\d{4}-\d{2}-\d{2}$/.test(item) &&
    isValid(parseISO(item))
      ? item
      : null
  const start = valid(value[0])
  const end = valid(value[1])
  if (!start) return [null, null]
  return end && end < start ? [end, start] : [start, end]
}

export function selectRange(value: DateRangeValue, day: Date): DateRangeValue {
  const next = format(day, 'yyyy-MM-dd')
  const [start, end] = value
  if (!start || end) return [next, null]
  return next < start ? [next, start] : [start, next]
}
