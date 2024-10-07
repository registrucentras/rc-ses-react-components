import { FieldError } from 'react-hook-form';
type Props = {
    children: React.ReactNode;
    className?: string;
    description?: React.ReactNode;
    errors?: FieldError | undefined;
    fieldSuffix?: React.ReactNode;
    hideLabel?: boolean;
    id: string;
    label?: React.ReactNode;
    labelSubtitle?: React.ReactNode;
    labelOnTop?: boolean;
};
declare function RcSesFormControlWrapper({ children, className, description, errors, fieldSuffix, hideLabel, id, label, labelSubtitle, labelOnTop, }: Props): import("react/jsx-runtime").JSX.Element;
export default RcSesFormControlWrapper;
export { type Props as RcSesFormControlWrapperProps };
