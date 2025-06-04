import { Meta, ReactRenderer } from '@storybook/react';
import { default as useAccordionController } from '../../../components/common/Accordion/hooks/useAccordionController';
import { default as RcSesServiceFormContainer } from '../../../components/layout/ServiceFormContainer';
import { AnnotatedStoryFn } from '@storybook/core/csf';
import { ContainerProps } from '@mui/system';
declare const meta: Meta<typeof RcSesServiceFormContainer>;
export default meta;
export declare const Main: AnnotatedStoryFn<ReactRenderer, {
    accordionController: ReturnType<typeof useAccordionController>;
    children: React.ReactNode;
    showAccordionCollapseControls?: boolean;
    showProgressStepper?: boolean;
    slotProps?: {
        container: Partial< ContainerProps>;
    };
}>;
