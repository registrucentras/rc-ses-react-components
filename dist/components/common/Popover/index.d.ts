import { PopoverProps } from '@mui/material';
type Props = Exclude<PopoverProps, 'content'> & {
    header?: React.ReactNode;
};
declare function RcSesPopover(props: Props): import("react/jsx-runtime").JSX.Element;
export default RcSesPopover;
