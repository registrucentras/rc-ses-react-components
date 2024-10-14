import { FormControlLabelProps, CheckboxProps as MuiCheckboxProps } from '@mui/material';
import { default as React } from 'react';
import { RcSesFormControlWrapperProps } from '../components/FormControlWrapper';
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
declare const RcSesCheckbox: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLInputElement>>;
export default RcSesCheckbox;
