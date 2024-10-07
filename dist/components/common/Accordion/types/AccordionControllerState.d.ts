export type AccordionState = {
    canToggle?: boolean | undefined;
    disabled?: boolean | undefined;
    expanded: boolean | undefined;
    state: 'active' | 'completed' | 'pending';
    title: string;
};
export type AccordionControllerState = Record<string, AccordionState>;
