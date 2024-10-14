import { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { default as React } from 'react';
import { UseControllerProps } from 'react-hook-form';
import { RcSesFormControlWrapperProps } from '../../components/FormControlWrapper';
declare const RcSesDatepicker: React.ForwardRefExoticComponent<Partial<RcSesFormControlWrapperProps> & UseControllerProps<any, any> & {
    slotProps?: {
        datepicker?: DatePickerProps<Date, boolean>;
    };
} & React.RefAttributes<HTMLInputElement>>;
export default RcSesDatepicker;
