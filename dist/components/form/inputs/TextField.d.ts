import { OutlinedTextFieldProps as MuiOutlinedTextFieldProps } from '@mui/material';
import { RcSesFormControlWrapperProps } from '../components/FormControlWrapper';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
type TFieldProps = Omit<MuiOutlinedTextFieldProps, 'variant'>;
type ImmediateFieldProps = 'onChange' | 'onBlur' | 'disabled' | 'name' | 'ref';
type TWrapperProps = RcSesFormControlWrapperProps;
type ImmediateWrapperProps = 'label' | 'errors';
type Props = Pick<TFieldProps, ImmediateFieldProps> & Pick<TWrapperProps, ImmediateWrapperProps> & {
    id?: string;
    slotProps?: {
        field?: Partial<Omit<TFieldProps, ImmediateFieldProps>>;
        wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>;
    };
};
declare const RcSesTextField: ForwardRefExoticComponent<Omit<Props, "ref"> & RefAttributes<HTMLInputElement>>;
export default RcSesTextField;
