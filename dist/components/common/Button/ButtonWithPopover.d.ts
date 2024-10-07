import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { PopoverProps } from '@mui/material/Popover';
type Props = MuiButtonProps & {
    popoverHeader?: React.ReactNode;
    popoverContent?: React.ReactNode;
    slotProps?: {
        popover?: Partial<PopoverProps>;
    };
};
declare function RcSesButtonWithPopover(props: Props): import("react/jsx-runtime").JSX.Element;
export default RcSesButtonWithPopover;
