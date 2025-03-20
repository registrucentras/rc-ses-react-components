import { getPickersLocalization } from '@mui/x-date-pickers/locales/utils/getPickersLocalization'

const ltLTPickers = {
  // Calendar navigation
  previousMonth: 'Ankstesnis mėnuo',
  nextMonth: 'Ateinantis month',
  // View navigation
  openPreviousView: 'Ankstesnis peržiūros rėžimas',
  openNextView: 'Kitas peržiūros rėžimas',
  calendarViewSwitchingButtonAriaLabel: (view: any) =>
    view === 'year'
      ? 'metų pasirinkimas, pereiti į dienos pasirinkimą'
      : 'dienos pasirinkimas, pereiti į metų pasirinkimą',
  // DateRange labels
  start: 'Pradžia',
  end: 'Pabaiga',
  startDate: 'Pradžios data',
  startTime: 'Pradžios laikas',
  endDate: 'Pabaigos data',
  endTime: 'Pabaigos laikas',
  // Action bar
  cancelButtonLabel: 'Uždaryti',
  clearButtonLabel: 'Išvalyti',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Šiandiena',
  // Toolbar titles
  datePickerToolbarTitle: 'Pasirinkti datą',
  dateTimePickerToolbarTitle: 'Pasirinkti datą ir laiką',
  timePickerToolbarTitle: 'Pasirinkti laiką',
  dateRangePickerToolbarTitle: 'Pasirinkti datos intervalą',
  // Clock labels
  clockLabelText: (view: any, time: any, adapter: any) =>
    `Select ${view}. ${time === null ? 'Laikas nepasirinktas' : `Pasirinktas laikas yra ${adapter.format(time, 'fullTime')}`}`,
  hoursClockNumberText: (hours: any) => `${hours} val.`,
  minutesClockNumberText: (minutes: any) => `${minutes} min.`,
  secondsClockNumberText: (seconds: any) => `${seconds} sek.`,
  // Digital clock labels
  selectViewText: (view: any) => `Pasirinkti ${view}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: 'Savaitė',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber: any) => `${weekNumber} savaitė`,
  calendarWeekNumberText: (weekNumber: any) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value: any, utils: any) =>
    value !== null && utils.isValid(value)
      ? `Pasirinkite datą, pasirinkta data: ${utils.format(value, 'fullDate')}`
      : 'Pasirinkite datą',
  openTimePickerDialogue: (value: any, utils: any) =>
    value !== null && utils.isValid(value)
      ? `Pasirinkite laiką, pasirinktas laikas: ${utils.format(value, 'fullTime')}`
      : 'Pasirinkite laiką',
  fieldClearLabel: 'Išvalyti',
  // Table labels
  timeTableLabel: 'pasirinkti laiką',
  dateTableLabel: 'pasirinkti datą',
  // Field section placeholders
  fieldYearPlaceholder: (params: any) => 'M'.repeat(params.digitAmount),
  fieldMonthPlaceholder: (params: any) =>
    params.contentType === 'letter' ? 'MMMM' : 'MM',
  fieldDayPlaceholder: () => 'DD',
  fieldWeekDayPlaceholder: (params: any) =>
    params.contentType === 'letter' ? 'DDDD' : 'DD',
  fieldHoursPlaceholder: () => 'hh',
  fieldMinutesPlaceholder: () => 'mm',
  fieldSecondsPlaceholder: () => 'ss',
  fieldMeridiemPlaceholder: () => 'aa',
  // View names
  year: 'Metai',
  month: 'Mėnuo',
  day: 'Diena',
  weekDay: 'Savaitės dien',
  hours: 'Valandos',
  minutes: 'Minutės',
  seconds: 'Sekundės',
  meridiem: 'Meridiem',
  // Common
  empty: 'Tuščia',
}

export const DEFAULT_LOCALE = ltLTPickers
export const ltLT = getPickersLocalization(ltLTPickers)
