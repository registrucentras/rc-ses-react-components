import { OutlinedTextFieldProps as MuiOutlinedTextFieldProps } from '@mui/material';
import { default as React } from 'react';
import { RcSesFormControlWrapperProps } from '../components/FormControlWrapper';
type TFieldProps = Omit<MuiOutlinedTextFieldProps, 'variant'>;
type ImmediateFieldProps = 'onChange' | 'onBlur' | 'disabled' | 'name' | 'ref' | 'required' | 'multiline';
type TWrapperProps = RcSesFormControlWrapperProps;
type ImmediateWrapperProps = 'label' | 'errors';
type Props = Pick<TFieldProps, ImmediateFieldProps> & Pick<TWrapperProps, ImmediateWrapperProps> & {
    id?: string;
    slotProps?: {
        field?: Partial<Omit<TFieldProps, ImmediateFieldProps>>;
        wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>;
    };
};
declare const RcSesTextField: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLInputElement>>;
export default RcSesTextField;
