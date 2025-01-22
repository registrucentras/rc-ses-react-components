import { Meta, ReactRenderer } from '@storybook/react';
import { default as RcSesAccordion } from '../../components/common/Accordion';
import { default as useAccordionController } from '../../components/common/Accordion/hooks/useAccordionController';
import { AnnotatedStoryFn } from '@storybook/csf';
import { AccordionClasses, Theme, AccordionSlotsAndSlotProps, PaperOwnProps } from '@mui/material';
import { SxProps } from '@mui/system';
import { TransitionProps } from '@mui/material/transitions';
import { CommonProps } from '@mui/material/OverridableComponent';
import { DetailedHTMLProps, HTMLAttributes, DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES, RefObject } from 'react';
declare const meta: Meta<typeof RcSesAccordion>;
export default meta;
export declare const Main: AnnotatedStoryFn<ReactRenderer, {
    children: NonNullable<React.ReactNode>;
    classes?: Partial< AccordionClasses>;
    defaultExpanded?: boolean;
    disabled?: boolean;
    disableGutters?: boolean;
    expanded?: boolean;
    onChange?: (event: React.SyntheticEvent, expanded: boolean) => void;
    sx?: SxProps<Theme>;
    TransitionComponent?: React.JSXElementConstructor< TransitionProps & {
        children?: React.ReactElement<any, any>;
    }>;
    TransitionProps?: TransitionProps;
} & AccordionSlotsAndSlotProps & Omit< PaperOwnProps, "classes" | "onChange"> & CommonProps & Omit<Omit< DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined;
}, keyof CommonProps | "onChange" | "children" | "elevation" | "square" | "sx" | "variant" | "defaultExpanded" | "disabled" | "disableGutters" | "expanded" | "TransitionComponent" | "TransitionProps" | keyof AccordionSlotsAndSlotProps> & {
    id: string;
    controller: ReturnType<typeof useAccordionController>;
}>;
