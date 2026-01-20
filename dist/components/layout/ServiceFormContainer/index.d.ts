import { ContainerProps } from '@mui/system';
import { default as React } from 'react';
import { default as useAccordionController } from '../../common/Accordion/hooks/useAccordionController';
type Props = {
    accordionController: ReturnType<typeof useAccordionController>;
    children: React.ReactNode;
    showAccordionCollapseControls?: boolean;
    showProgressStepper?: boolean;
    slotProps?: {
        container: Partial<ContainerProps>;
    };
};
declare function RcSesServiceFormContainer({ accordionController, children, showAccordionCollapseControls, showProgressStepper, slotProps, }: Props): import("react/jsx-runtime").JSX.Element;
export default RcSesServiceFormContainer;
