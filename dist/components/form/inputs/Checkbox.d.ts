import { FormControlLabelProps, CheckboxProps as MuiCheckboxProps } from '@mui/material';
import { RcSesFormControlWrapperProps } from '../components/FormControlWrapper';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
type TFieldProps = MuiCheckboxProps;
type ImmediateFieldProps = 'onChange' | 'onBlur' | 'disabled' | 'name' | 'ref';
type TWrapperProps = RcSesFormControlWrapperProps;
type ImmediateWrapperProps = 'label' | 'errors';
type Props = Pick<TFieldProps, ImmediateFieldProps> & Pick<TWrapperProps, ImmediateWrapperProps> & {
    id?: string;
    children: React.ReactNode;
    variant?: 'flat' | 'outlined';
    slotProps?: {
        field?: Partial<Omit<TFieldProps, ImmediateFieldProps>>;
        label?: Partial<FormControlLabelProps>;
        wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>;
    };
};
declare const RcSesCheckbox: ForwardRefExoticComponent<Omit<Props, "ref"> & RefAttributes<HTMLInputElement>>;
export default RcSesCheckbox;
