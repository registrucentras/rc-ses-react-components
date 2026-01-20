type Props = {
    onDiscard: () => void;
    onSaveDraft: () => void;
    onSubmit: () => void;
    draftDisabled?: boolean;
    submitDisabled?: boolean;
};
declare function ServiceFormActions({ onDiscard, onSaveDraft, onSubmit, draftDisabled, submitDisabled, }: Props): import("react/jsx-runtime").JSX.Element;
export default ServiceFormActions;
