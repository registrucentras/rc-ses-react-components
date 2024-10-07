import { DateView, TimeView, MuiPickersAdapter, FieldSectionContentType } from '@mui/x-date-pickers/models';
import { TimeViewWithMeridiem } from '@mui/x-date-pickers/internals';
export declare const DEFAULT_LOCALE: {
    previousMonth: string;
    nextMonth: string;
    openPreviousView: string;
    openNextView: string;
    calendarViewSwitchingButtonAriaLabel: (view: any) => "metų pasirinkimas, pereiti į dienos pasirinkimą" | "dienos pasirinkimas, pereiti į metų pasirinkimą";
    start: string;
    end: string;
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
    cancelButtonLabel: string;
    clearButtonLabel: string;
    okButtonLabel: string;
    todayButtonLabel: string;
    datePickerToolbarTitle: string;
    dateTimePickerToolbarTitle: string;
    timePickerToolbarTitle: string;
    dateRangePickerToolbarTitle: string;
    clockLabelText: (view: any, time: any, adapter: any) => string;
    hoursClockNumberText: (hours: any) => string;
    minutesClockNumberText: (minutes: any) => string;
    secondsClockNumberText: (seconds: any) => string;
    selectViewText: (view: any) => string;
    calendarWeekNumberHeaderLabel: string;
    calendarWeekNumberHeaderText: string;
    calendarWeekNumberAriaLabelText: (weekNumber: any) => string;
    calendarWeekNumberText: (weekNumber: any) => string;
    openDatePickerDialogue: (value: any, utils: any) => string;
    openTimePickerDialogue: (value: any, utils: any) => string;
    fieldClearLabel: string;
    timeTableLabel: string;
    dateTableLabel: string;
    fieldYearPlaceholder: (params: any) => string;
    fieldMonthPlaceholder: (params: any) => "MMMM" | "MM";
    fieldDayPlaceholder: () => string;
    fieldWeekDayPlaceholder: (params: any) => "DD" | "DDDD";
    fieldHoursPlaceholder: () => string;
    fieldMinutesPlaceholder: () => string;
    fieldSecondsPlaceholder: () => string;
    fieldMeridiemPlaceholder: () => string;
    year: string;
    month: string;
    day: string;
    weekDay: string;
    hours: string;
    minutes: string;
    seconds: string;
    meridiem: string;
    empty: string;
};
export declare const ltLT: {
    components: {
        MuiLocalizationProvider: {
            defaultProps: {
                localeText: {
                    previousMonth?: string | undefined;
                    nextMonth?: string | undefined;
                    calendarWeekNumberHeaderLabel?: string | undefined;
                    calendarWeekNumberHeaderText?: string | undefined;
                    calendarWeekNumberAriaLabelText?: ((weekNumber: number) => string) | undefined;
                    calendarWeekNumberText?: ((weekNumber: number) => string) | undefined;
                    openPreviousView?: string | undefined;
                    openNextView?: string | undefined;
                    calendarViewSwitchingButtonAriaLabel?: ((currentView: DateView) => string) | undefined;
                    start?: string | undefined;
                    end?: string | undefined;
                    startDate?: string | undefined;
                    startTime?: string | undefined;
                    endDate?: string | undefined;
                    endTime?: string | undefined;
                    cancelButtonLabel?: string | undefined;
                    clearButtonLabel?: string | undefined;
                    okButtonLabel?: string | undefined;
                    todayButtonLabel?: string | undefined;
                    clockLabelText?: ((view: TimeView, time: any, adapter: MuiPickersAdapter<any, any>) => string) | undefined;
                    hoursClockNumberText?: ((hours: string) => string) | undefined;
                    minutesClockNumberText?: ((minutes: string) => string) | undefined;
                    secondsClockNumberText?: ((seconds: string) => string) | undefined;
                    selectViewText?: ((view: TimeViewWithMeridiem) => string) | undefined;
                    openDatePickerDialogue?: ((date: any, utils: MuiPickersAdapter<any, any>) => string) | undefined;
                    openTimePickerDialogue?: ((date: any, utils: MuiPickersAdapter<any, any>) => string) | undefined;
                    fieldClearLabel?: string | undefined;
                    timeTableLabel?: string | undefined;
                    dateTableLabel?: string | undefined;
                    fieldYearPlaceholder?: ((params: {
                        digitAmount: number;
                        format: string;
                    }) => string) | undefined;
                    fieldMonthPlaceholder?: ((params: {
                        contentType: FieldSectionContentType;
                        format: string;
                    }) => string) | undefined;
                    fieldDayPlaceholder?: ((params: {
                        format: string;
                    }) => string) | undefined;
                    fieldWeekDayPlaceholder?: ((params: {
                        contentType: FieldSectionContentType;
                        format: string;
                    }) => string) | undefined;
                    fieldHoursPlaceholder?: ((params: {
                        format: string;
                    }) => string) | undefined;
                    fieldMinutesPlaceholder?: ((params: {
                        format: string;
                    }) => string) | undefined;
                    fieldSecondsPlaceholder?: ((params: {
                        format: string;
                    }) => string) | undefined;
                    fieldMeridiemPlaceholder?: ((params: {
                        format: string;
                    }) => string) | undefined;
                    year?: string | undefined;
                    month?: string | undefined;
                    day?: string | undefined;
                    weekDay?: string | undefined;
                    hours?: string | undefined;
                    minutes?: string | undefined;
                    seconds?: string | undefined;
                    meridiem?: string | undefined;
                    empty?: string | undefined;
                    datePickerToolbarTitle?: string | undefined;
                    timePickerToolbarTitle?: string | undefined;
                    dateTimePickerToolbarTitle?: string | undefined;
                    dateRangePickerToolbarTitle?: string | undefined;
                };
            };
        };
    };
};
