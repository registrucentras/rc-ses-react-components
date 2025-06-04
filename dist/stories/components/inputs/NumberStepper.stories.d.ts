import { Meta, ReactRenderer } from '@storybook/react';
import { default as RcSesNumberStepper } from '../../../components/form/inputs/NumberStepper';
import { AnnotatedStoryFn } from '@storybook/core/csf';
import { RegisterOptions, Control } from 'react-hook-form';
import { OutlinedInputProps } from '@mui/material';
import { RcSesFormControlWrapperProps } from '../../../components/form/components/FormControlWrapper';
declare const meta: Meta<typeof RcSesNumberStepper>;
export default meta;
export declare const Main: AnnotatedStoryFn<ReactRenderer, Pick<{
    name: any;
    rules?: Omit< RegisterOptions<any, any>, "disabled" | "setValueAs" | "valueAsNumber" | "valueAsDate"> | undefined;
    shouldUnregister?: boolean;
    defaultValue?: any;
    control?: Control<any> | undefined;
    disabled?: boolean;
}, "rules" | "control"> & Pick< OutlinedInputProps, "onChange" | "onBlur" | "disabled" | "name"> & Pick< RcSesFormControlWrapperProps, "label" | "errors"> & {
    id?: string;
    displayStepperControls?: boolean;
    min?: string | number;
    max?: string | number;
    step?: string | number;
    slotProps?: {
        controller?: Partial<Omit<{
            name: any;
            rules?: Omit< RegisterOptions<any, any>, "disabled" | "setValueAs" | "valueAsNumber" | "valueAsDate"> | undefined;
            shouldUnregister?: boolean;
            defaultValue?: any;
            control?: Control<any> | undefined;
            disabled?: boolean;
        }, "rules" | "control">>;
        field?: Partial<Omit< OutlinedInputProps, "onChange" | "onBlur" | "disabled" | "name">>;
        wrapper?: Partial<Omit< RcSesFormControlWrapperProps, "label" | "errors">>;
    };
}>;
