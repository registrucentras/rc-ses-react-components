import { Meta, ReactRenderer } from '@storybook/react';
import { default as RcSesCheckboxFormControl } from '../../../components/form/inputs/CheckboxFormControl';
import { AnnotatedStoryFn } from '@storybook/core/csf';
import { RegisterOptions, Control } from 'react-hook-form';
import { CheckboxProps, FormControlLabelProps } from '@mui/material';
import { RcSesFormControlWrapperProps } from '../../../components/form/components/FormControlWrapper';
declare const meta: Meta<typeof RcSesCheckboxFormControl>;
export default meta;
export declare const Main: AnnotatedStoryFn<ReactRenderer, Pick<{
    name: any;
    rules?: Omit< RegisterOptions<any, any>, "disabled" | "setValueAs" | "valueAsNumber" | "valueAsDate"> | undefined;
    shouldUnregister?: boolean;
    defaultValue?: any;
    control?: Control<any> | undefined;
    disabled?: boolean;
}, "rules" | "control"> & Pick< CheckboxProps, "onChange" | "onBlur" | "disabled" | "name"> & Pick< RcSesFormControlWrapperProps, "label" | "errors"> & {
    id?: string;
    children: React.ReactNode;
    loading?: boolean;
    variant?: "flat" | "outlined";
    slotProps?: {
        field?: Partial<Omit< CheckboxProps, "onChange" | "onBlur" | "disabled" | "name">>;
        label?: Partial< FormControlLabelProps>;
        wrapper?: Partial<Omit< RcSesFormControlWrapperProps, "label" | "errors">>;
    };
}>;
