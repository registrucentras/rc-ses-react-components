import { FormControlLabelProps, CheckboxProps as MuiCheckboxProps } from '@mui/material';
import { default as React } from 'react';
import { UseControllerProps } from 'react-hook-form';
import { RcSesFormControlWrapperProps } from '../components/FormControlWrapper';
type TControllerProps = UseControllerProps<any, any>;
type ImmediateControllerProps = 'control' | 'rules';
type TFieldProps = MuiCheckboxProps;
type ImmediateFieldProps = 'onChange' | 'onBlur' | 'disabled' | 'name';
type TWrapperProps = RcSesFormControlWrapperProps;
type ImmediateWrapperProps = 'label' | 'errors';
type Props = Pick<TControllerProps, ImmediateControllerProps> & Pick<TFieldProps, ImmediateFieldProps> & Pick<TWrapperProps, ImmediateWrapperProps> & {
    id?: string;
    children: React.ReactNode;
    variant?: 'flat' | 'outlined';
    slotProps?: {
        field?: Partial<Omit<TFieldProps, ImmediateFieldProps>>;
        label?: Partial<FormControlLabelProps>;
        wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>;
    };
};
declare function RcSesCheckboxFormControl(props: Props): import("react/jsx-runtime").JSX.Element;
export default RcSesCheckboxFormControl;
