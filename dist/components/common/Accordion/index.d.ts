import { Accordion } from '@mui/material';
import { default as React } from 'react';
import { default as useAccordionController } from './hooks/useAccordionController';
type Props = React.ComponentProps<typeof Accordion> & {
    id: string;
    controller: ReturnType<typeof useAccordionController>;
};
declare function RcSesAccordion(props: Props): import("react/jsx-runtime").JSX.Element;
export default RcSesAccordion;
