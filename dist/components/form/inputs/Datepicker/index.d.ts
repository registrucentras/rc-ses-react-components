import { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { default as React } from 'react';
import { UseControllerProps } from 'react-hook-form';
import { RcSesFormControlWrapperProps } from '../../components/FormControlWrapper';
type TFieldProps = UseControllerProps<any, any>;
type TWrapperProps = RcSesFormControlWrapperProps;
type ImmediateWrapperProps = 'label' | 'errors';
declare const RcSesDatepicker: React.ForwardRefExoticComponent<TFieldProps & Pick<RcSesFormControlWrapperProps, ImmediateWrapperProps> & {
    id?: string;
    clearable?: boolean;
    slotProps?: {
        datepicker?: DatePickerProps<Date, boolean>;
        wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>;
    };
} & React.RefAttributes<HTMLInputElement>>;
export default RcSesDatepicker;
