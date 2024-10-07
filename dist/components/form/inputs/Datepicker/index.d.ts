import { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { UseControllerProps } from 'react-hook-form';
import { RcSesFormControlWrapperProps } from '../../components/FormControlWrapper';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
declare const RcSesDatepicker: ForwardRefExoticComponent<Partial<RcSesFormControlWrapperProps> & UseControllerProps<any, any> & {
    slotProps?: {
        datepicker?: DatePickerProps<Date, boolean>;
    };
} & RefAttributes<HTMLInputElement>>;
export default RcSesDatepicker;
