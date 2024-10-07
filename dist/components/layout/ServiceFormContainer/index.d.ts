import { default as React } from 'react';
import { default as useAccordionController } from '../../common/Accordion/hooks/useAccordionController';
type Props = {
    accordionController: ReturnType<typeof useAccordionController>;
    children: React.ReactNode;
    showAccordionCollapseControls?: boolean;
    showProgressStepper?: boolean;
};
declare function ServiceFormContainer({ accordionController, children, showAccordionCollapseControls, showProgressStepper, }: Props): import("react/jsx-runtime").JSX.Element;
export default ServiceFormContainer;
