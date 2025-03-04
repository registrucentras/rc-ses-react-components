import { FormControlLabelProps, AutocompleteProps as MuiAutocompleteProps } from '@mui/material';
import { UseControllerProps } from 'react-hook-form';
import { RcSesFormControlWrapperProps } from '../../components/FormControlWrapper';
import { default as Country } from './types/Country';
type TControllerProps = UseControllerProps<any, any>;
type ImmediateControllerProps = 'control' | 'disabled' | 'name' | 'rules';
type TAutocompleteProps = MuiAutocompleteProps<Country, false, true, false, any>;
type ImmediateAutocompleteProps = never;
type TWrapperProps = RcSesFormControlWrapperProps;
type ImmediateWrapperProps = 'errors' | 'label';
type Props = Pick<TControllerProps, ImmediateControllerProps> & Pick<TAutocompleteProps, ImmediateAutocompleteProps> & Pick<TWrapperProps, ImmediateWrapperProps> & {
    id?: string;
    slotProps?: {
        autocomplete?: Partial<Omit<TAutocompleteProps, ImmediateAutocompleteProps>>;
        label?: Partial<FormControlLabelProps>;
        wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>;
    };
};
declare function RcSesPhoneInputFormControl(props: Props): import("react/jsx-runtime").JSX.Element;
export type { Props as RcSesPhoneInputFormControlProps };
export default RcSesPhoneInputFormControl;
