import { Meta, ReactRenderer } from '@storybook/react';
import { default as RcSesSelect } from '../../../components/form/inputs/Select';
import { AnnotatedStoryFn } from '@storybook/csf';
import { RegisterOptions, Control } from 'react-hook-form';
import { SyntheticEvent } from 'react';
import { AutocompleteInputChangeReason } from '@mui/material';
import { RcSesFormControlWrapperProps } from '../../../components/form/components/FormControlWrapper';
declare const meta: Meta<typeof RcSesSelect>;
export default meta;
export declare const Main: AnnotatedStoryFn<ReactRenderer, Pick<{
    name: any;
    rules?: Omit< RegisterOptions<any, any>, "disabled" | "setValueAs" | "valueAsNumber" | "valueAsDate"> | undefined;
    shouldUnregister?: boolean;
    defaultValue?: any;
    control?: Control<any> | undefined;
    disabled?: boolean;
}, "disabled" | "name" | "rules" | "control"> & Pick<{
    id?: string | undefined;
    onInputChange?: ((event: SyntheticEvent, value: string, reason: AutocompleteInputChangeReason) => void) | undefined;
}, "onInputChange"> & Pick< RcSesFormControlWrapperProps, "label" | "id" | "errors"> & {
    clearable?: boolean;
    loading?: boolean;
    options: ({
        description?: string;
        label: string;
        value: string;
    } | "")[];
    placeholder?: string;
    slotProps?: {
        controller?: Partial<Omit<{
            name: any;
            rules?: Omit< RegisterOptions<any, any>, "disabled" | "setValueAs" | "valueAsNumber" | "valueAsDate"> | undefined;
            shouldUnregister?: boolean;
            defaultValue?: any;
            control?: Control<any> | undefined;
            disabled?: boolean;
        }, "disabled" | "name" | "rules" | "control">>;
        field?: Partial<Omit<{
            id?: string | undefined;
            onInputChange?: ((event: SyntheticEvent, value: string, reason: AutocompleteInputChangeReason) => void) | undefined;
        }, "onInputChange">>;
        wrapper?: Partial<Omit< RcSesFormControlWrapperProps, "label" | "id" | "errors">>;
    };
}>;
