import { OutlinedTextFieldProps } from '@mui/material/TextField';
import { default as React } from 'react';
import { UseControllerProps } from 'react-hook-form';
import { RcSesFormControlWrapperProps } from '../components/FormControlWrapper';
type ModalComponentProps = {
    open: boolean;
    onSubmit: (value: string) => void;
    onClose: () => void;
};
type TControllerProps = UseControllerProps<any, any>;
type ImmediateControllerProps = 'control' | 'rules' | 'disabled' | 'name';
type TFieldProps = Omit<OutlinedTextFieldProps, 'variant'>;
type TWrapperProps = RcSesFormControlWrapperProps;
type ImmediateWrapperProps = 'id' | 'label' | 'errors';
declare const RcSesSearchableField: React.ForwardRefExoticComponent<Pick<TControllerProps, ImmediateControllerProps> & Pick<RcSesFormControlWrapperProps, ImmediateWrapperProps> & {
    ModalComponent: React.JSXElementConstructor<ModalComponentProps>;
    slotProps?: {
        controller?: Partial<Omit<TControllerProps, ImmediateControllerProps>>;
        field?: Partial<TFieldProps>;
        wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>;
    };
} & React.RefAttributes<HTMLInputElement>>;
export default RcSesSearchableField;
