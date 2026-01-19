import { AccordionControllerState } from '../types/AccordionControllerState';
type Props = {
    initialState: AccordionControllerState;
};
declare function useAccordionController({ initialState }: Props): {
    collapseAll: () => void;
    expandAll: () => void;
    state: AccordionControllerState;
    toggleAccordion: (id: string, isExpanded: boolean) => void;
};
export default useAccordionController;
