import { Meta, ReactRenderer } from '@storybook/react';
import { default as RcSesFileUpload } from '../../../components/form/inputs/FileUpload';
import { AnnotatedStoryFn } from '@storybook/core/csf';
import { RegisterOptions, Control } from 'react-hook-form';
import { InputHTMLAttributes } from 'react';
import { RcSesFormControlWrapperProps } from '../../../components/form/components/FormControlWrapper';
declare const meta: Meta<typeof RcSesFileUpload>;
export default meta;
export declare const Main: AnnotatedStoryFn<ReactRenderer, Pick<{
    name: any;
    rules?: Omit< RegisterOptions<any, any>, "disabled" | "setValueAs" | "valueAsNumber" | "valueAsDate"> | undefined;
    shouldUnregister?: boolean;
    defaultValue?: any;
    control?: Control<any> | undefined;
    disabled?: boolean;
}, "rules" | "control"> & Pick< InputHTMLAttributes<HTMLInputElement>, "onChange" | "onBlur" | "disabled" | "name"> & Pick< RcSesFormControlWrapperProps, "label" | "errors"> & {
    id?: string;
    slotProps?: {
        controller?: Partial<Omit<{
            name: any;
            rules?: Omit< RegisterOptions<any, any>, "disabled" | "setValueAs" | "valueAsNumber" | "valueAsDate"> | undefined;
            shouldUnregister?: boolean;
            defaultValue?: any;
            control?: Control<any> | undefined;
            disabled?: boolean;
        }, "rules" | "control">>;
        field?: Partial<Omit< InputHTMLAttributes<HTMLInputElement>, "onChange" | "onBlur" | "disabled" | "name">>;
        wrapper?: Partial<Omit< RcSesFormControlWrapperProps, "label" | "errors">>;
    };
}>;
