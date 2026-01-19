import { RadioGroupProps, Theme } from '@mui/material';
import { UseControllerProps } from 'react-hook-form';
import { RcSesFormControlWrapperProps } from '../components/FormControlWrapper';
import { StyledComponent } from '@emotion/styled';
import { MUIStyledCommonProps } from '@mui/system';
export type RadioOption = {
    label: string;
    value: string;
};
type TControllerProps = UseControllerProps<any, any>;
type ImmediateControllerProps = 'control' | 'rules' | 'name';
type TWrapperProps = RcSesFormControlWrapperProps;
type ImmediateWrapperProps = 'label' | 'errors';
declare const RcSesRadioButtonGroup: StyledComponent<Pick<TControllerProps, ImmediateControllerProps> & Pick<RadioGroupProps, "name"> & Pick<RcSesFormControlWrapperProps, ImmediateWrapperProps> & {
    id?: string;
    className?: string;
    hideNativeRadio?: boolean;
    options: Array<RadioOption>;
    variant?: "flat" | "outlined" | "filled";
    slotProps?: {
        controller?: Partial<Omit<TControllerProps, ImmediateControllerProps>>;
        wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>;
    };
} & MUIStyledCommonProps<Theme>, {}, {}>;
export default RcSesRadioButtonGroup;
