import { Meta, ReactRenderer } from '@storybook/react';
import { default as RcSesDatepicker } from '../../../components/form/inputs/Datepicker';
import { AnnotatedStoryFn } from '@storybook/core/csf';
import { RegisterOptions, Control } from 'react-hook-form';
import { RcSesFormControlWrapperProps } from '../../../components/form/components/FormControlWrapper';
import { DatePickerProps } from '@mui/x-date-pickers';
import { RefAttributes } from 'react';
declare const meta: Meta<typeof RcSesDatepicker>;
export default meta;
export declare const Main: AnnotatedStoryFn<ReactRenderer, {
    name: any;
    rules?: Omit< RegisterOptions<any, any>, "disabled" | "setValueAs" | "valueAsNumber" | "valueAsDate"> | undefined;
    shouldUnregister?: boolean;
    defaultValue?: any;
    control?: Control<any> | undefined;
    disabled?: boolean;
} & Pick< RcSesFormControlWrapperProps, "label" | "errors"> & {
    id?: string;
    clearable?: boolean;
    slotProps?: {
        datepicker?: DatePickerProps<Date, boolean>;
        wrapper?: Partial<Omit< RcSesFormControlWrapperProps, "label" | "errors">>;
    };
} & RefAttributes<HTMLInputElement>>;
