import { Meta, ReactRenderer } from '@storybook/react';
import { default as RcSesRadioButtonGroup, RadioOption } from '../../../components/form/inputs/RadioButtonGroup';
import { AnnotatedStoryFn } from '@storybook/csf';
import { RegisterOptions, Control } from 'react-hook-form';
import { RadioGroupProps, Theme } from '@mui/material';
import { RcSesFormControlWrapperProps } from '../../../components/form/components/FormControlWrapper';
import { MUIStyledCommonProps } from '@mui/system';
declare const meta: Meta<typeof RcSesRadioButtonGroup>;
export default meta;
export declare const Main: AnnotatedStoryFn<ReactRenderer, Pick<{
    name: any;
    rules?: Omit< RegisterOptions<any, any>, "disabled" | "setValueAs" | "valueAsNumber" | "valueAsDate"> | undefined;
    shouldUnregister?: boolean;
    defaultValue?: any;
    control?: Control<any> | undefined;
    disabled?: boolean;
}, "name" | "rules" | "control"> & Pick< RadioGroupProps, "name"> & Pick< RcSesFormControlWrapperProps, "label" | "errors"> & {
    id?: string;
    className?: string;
    hideNativeRadio?: boolean;
    options: Array< RadioOption>;
    variant?: "flat" | "outlined" | "filled";
    slotProps?: {
        controller?: Partial<Omit<{
            name: any;
            rules?: Omit< RegisterOptions<any, any>, "disabled" | "setValueAs" | "valueAsNumber" | "valueAsDate"> | undefined;
            shouldUnregister?: boolean;
            defaultValue?: any;
            control?: Control<any> | undefined;
            disabled?: boolean;
        }, "name" | "rules" | "control">>;
        wrapper?: Partial<Omit< RcSesFormControlWrapperProps, "label" | "errors">>;
    };
} & MUIStyledCommonProps<Theme>>;
