import { AutocompleteProps } from '@mui/material';
import { UseControllerProps } from 'react-hook-form';
import { RcSesFormControlWrapperProps } from '../components/FormControlWrapper';
type Option = {
    description?: string;
    label: string;
    value: string;
};
type TControllerProps = UseControllerProps<any, any>;
type ImmediateControllerProps = 'control' | 'rules' | 'name' | 'disabled';
type TFieldProps = Pick<AutocompleteProps<Option | '', false, true, false>, 'id' | 'onInputChange'>;
type ImmediateFieldProps = 'onInputChange';
type TWrapperProps = RcSesFormControlWrapperProps;
type ImmediateWrapperProps = 'id' | 'label' | 'errors';
type Props = Pick<TControllerProps, ImmediateControllerProps> & Pick<TFieldProps, ImmediateFieldProps> & Pick<TWrapperProps, ImmediateWrapperProps> & {
    clearable?: boolean;
    loading?: boolean;
    options: (Option | '')[];
    slotProps?: {
        controller?: Partial<Omit<TControllerProps, ImmediateControllerProps>>;
        field?: Partial<Omit<TFieldProps, ImmediateFieldProps>>;
        wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>;
    };
};
declare function RcSesSelect(props: Props): import("react/jsx-runtime").JSX.Element;
export default RcSesSelect;
