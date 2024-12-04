import { Meta, ReactRenderer } from '@storybook/react';
import { default as RcSesTextField } from '../../../components/form/inputs/TextField';
import { AnnotatedStoryFn } from '@storybook/csf';
import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES, RefObject, CSSProperties, ReactNode, Key, AriaRole, ClipboardEventHandler, CompositionEventHandler, FocusEventHandler, FormEventHandler, ReactEventHandler, KeyboardEventHandler, MouseEventHandler, DragEventHandler, TouchEventHandler, PointerEventHandler, UIEventHandler, WheelEventHandler, AnimationEventHandler, TransitionEventHandler, InputHTMLAttributes, ElementType, Ref, RefAttributes } from 'react';
import { TextFieldClasses, OutlinedInputProps, FormControlProps, Theme, TextFieldPropsColorOverrides, InputProps, InputBaseProps, TextFieldPropsSizeOverrides, FormHelperTextProps, InputLabelProps, SelectProps } from '@mui/material';
import { SxProps } from '@mui/system';
import { OverridableStringUnion } from '@mui/types';
import { RcSesFormControlWrapperProps } from '../../../components/form/components/FormControlWrapper';
declare const meta: Meta<typeof RcSesTextField>;
export default meta;
export declare const Main: AnnotatedStoryFn<ReactRenderer, Omit<Pick<{
    ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined;
    className?: string | undefined;
    style?: CSSProperties | undefined;
    classes?: Partial< TextFieldClasses> | undefined;
    onChange?: OutlinedInputProps["onChange"];
    children?: FormControlProps["children"];
    sx?: SxProps<Theme> | undefined;
    label?: ReactNode;
    slot?: string | undefined;
    select?: boolean | undefined;
    title?: string | undefined;
    key?: Key | null | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: unknown;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    autoFocus?: boolean | undefined;
    contentEditable?: (boolean | "true" | "false") | "inherit" | "plaintext-only" | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | "true" | "false") | undefined;
    hidden?: boolean | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    nonce?: string | undefined;
    spellCheck?: (boolean | "true" | "false") | undefined;
    tabIndex?: number | undefined;
    translate?: "yes" | "no" | undefined;
    radioGroup?: string | undefined;
    role?: AriaRole | undefined;
    about?: string | undefined;
    content?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    rel?: string | undefined;
    resource?: string | undefined;
    rev?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: OverridableStringUnion<"primary" | "secondary" | "error" | "info" | "success" | "warning", TextFieldPropsColorOverrides> | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
    is?: string | undefined;
    "aria-activedescendant"?: string | undefined;
    "aria-atomic"?: (boolean | "true" | "false") | undefined;
    "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined;
    "aria-braillelabel"?: string | undefined;
    "aria-brailleroledescription"?: string | undefined;
    "aria-busy"?: (boolean | "true" | "false") | undefined;
    "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined;
    "aria-colcount"?: number | undefined;
    "aria-colindex"?: number | undefined;
    "aria-colindextext"?: string | undefined;
    "aria-colspan"?: number | undefined;
    "aria-controls"?: string | undefined;
    "aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined;
    "aria-describedby"?: string | undefined;
    "aria-description"?: string | undefined;
    "aria-details"?: string | undefined;
    "aria-disabled"?: (boolean | "true" | "false") | undefined;
    "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined;
    "aria-errormessage"?: string | undefined;
    "aria-expanded"?: (boolean | "true" | "false") | undefined;
    "aria-flowto"?: string | undefined;
    "aria-grabbed"?: (boolean | "true" | "false") | undefined;
    "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
    "aria-hidden"?: (boolean | "true" | "false") | undefined;
    "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
    "aria-keyshortcuts"?: string | undefined;
    "aria-label"?: string | undefined;
    "aria-labelledby"?: string | undefined;
    "aria-level"?: number | undefined;
    "aria-live"?: "off" | "assertive" | "polite" | undefined;
    "aria-modal"?: (boolean | "true" | "false") | undefined;
    "aria-multiline"?: (boolean | "true" | "false") | undefined;
    "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
    "aria-orientation"?: "horizontal" | "vertical" | undefined;
    "aria-owns"?: string | undefined;
    "aria-placeholder"?: string | undefined;
    "aria-posinset"?: number | undefined;
    "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined;
    "aria-readonly"?: (boolean | "true" | "false") | undefined;
    "aria-relevant"?: "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined;
    "aria-required"?: (boolean | "true" | "false") | undefined;
    "aria-roledescription"?: string | undefined;
    "aria-rowcount"?: number | undefined;
    "aria-rowindex"?: number | undefined;
    "aria-rowindextext"?: string | undefined;
    "aria-rowspan"?: number | undefined;
    "aria-selected"?: (boolean | "true" | "false") | undefined;
    "aria-setsize"?: number | undefined;
    "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
    "aria-valuemax"?: number | undefined;
    "aria-valuemin"?: number | undefined;
    "aria-valuenow"?: number | undefined;
    "aria-valuetext"?: string | undefined;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    } | undefined;
    onCopy?: ClipboardEventHandler<HTMLDivElement> | undefined;
    onCopyCapture?: ClipboardEventHandler<HTMLDivElement> | undefined;
    onCut?: ClipboardEventHandler<HTMLDivElement> | undefined;
    onCutCapture?: ClipboardEventHandler<HTMLDivElement> | undefined;
    onPaste?: ClipboardEventHandler<HTMLDivElement> | undefined;
    onPasteCapture?: ClipboardEventHandler<HTMLDivElement> | undefined;
    onCompositionEnd?: CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionEndCapture?: CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionStart?: CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionStartCapture?: CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionUpdate?: CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionUpdateCapture?: CompositionEventHandler<HTMLDivElement> | undefined;
    onFocus?: InputProps["onFocus"];
    onFocusCapture?: FocusEventHandler<HTMLDivElement> | undefined;
    onBlur?: InputBaseProps["onBlur"];
    onBlurCapture?: FocusEventHandler<HTMLDivElement> | undefined;
    onChangeCapture?: FormEventHandler<HTMLDivElement> | undefined;
    onBeforeInput?: FormEventHandler<HTMLDivElement> | undefined;
    onBeforeInputCapture?: FormEventHandler<HTMLDivElement> | undefined;
    onInput?: FormEventHandler<HTMLDivElement> | undefined;
    onInputCapture?: FormEventHandler<HTMLDivElement> | undefined;
    onReset?: FormEventHandler<HTMLDivElement> | undefined;
    onResetCapture?: FormEventHandler<HTMLDivElement> | undefined;
    onSubmit?: FormEventHandler<HTMLDivElement> | undefined;
    onSubmitCapture?: FormEventHandler<HTMLDivElement> | undefined;
    onInvalid?: FormEventHandler<HTMLDivElement> | undefined;
    onInvalidCapture?: FormEventHandler<HTMLDivElement> | undefined;
    onLoad?: ReactEventHandler<HTMLDivElement> | undefined;
    onLoadCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onError?: ReactEventHandler<HTMLDivElement> | undefined;
    onErrorCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onKeyDown?: KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyDownCapture?: KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyPress?: KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyPressCapture?: KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyUp?: KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyUpCapture?: KeyboardEventHandler<HTMLDivElement> | undefined;
    onAbort?: ReactEventHandler<HTMLDivElement> | undefined;
    onAbortCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlay?: ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlayCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlayThrough?: ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlayThroughCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onDurationChange?: ReactEventHandler<HTMLDivElement> | undefined;
    onDurationChangeCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onEmptied?: ReactEventHandler<HTMLDivElement> | undefined;
    onEmptiedCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onEncrypted?: ReactEventHandler<HTMLDivElement> | undefined;
    onEncryptedCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onEnded?: ReactEventHandler<HTMLDivElement> | undefined;
    onEndedCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedData?: ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedDataCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedMetadata?: ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedMetadataCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onLoadStart?: ReactEventHandler<HTMLDivElement> | undefined;
    onLoadStartCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onPause?: ReactEventHandler<HTMLDivElement> | undefined;
    onPauseCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onPlay?: ReactEventHandler<HTMLDivElement> | undefined;
    onPlayCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onPlaying?: ReactEventHandler<HTMLDivElement> | undefined;
    onPlayingCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onProgress?: ReactEventHandler<HTMLDivElement> | undefined;
    onProgressCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onRateChange?: ReactEventHandler<HTMLDivElement> | undefined;
    onRateChangeCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onResize?: ReactEventHandler<HTMLDivElement> | undefined;
    onResizeCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onSeeked?: ReactEventHandler<HTMLDivElement> | undefined;
    onSeekedCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onSeeking?: ReactEventHandler<HTMLDivElement> | undefined;
    onSeekingCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onStalled?: ReactEventHandler<HTMLDivElement> | undefined;
    onStalledCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onSuspend?: ReactEventHandler<HTMLDivElement> | undefined;
    onSuspendCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onTimeUpdate?: ReactEventHandler<HTMLDivElement> | undefined;
    onTimeUpdateCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onVolumeChange?: ReactEventHandler<HTMLDivElement> | undefined;
    onVolumeChangeCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onWaiting?: ReactEventHandler<HTMLDivElement> | undefined;
    onWaitingCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onAuxClick?: MouseEventHandler<HTMLDivElement> | undefined;
    onAuxClickCapture?: MouseEventHandler<HTMLDivElement> | undefined;
    onClick?: MouseEventHandler<HTMLDivElement> | undefined;
    onClickCapture?: MouseEventHandler<HTMLDivElement> | undefined;
    onContextMenu?: MouseEventHandler<HTMLDivElement> | undefined;
    onContextMenuCapture?: MouseEventHandler<HTMLDivElement> | undefined;
    onDoubleClick?: MouseEventHandler<HTMLDivElement> | undefined;
    onDoubleClickCapture?: MouseEventHandler<HTMLDivElement> | undefined;
    onDrag?: DragEventHandler<HTMLDivElement> | undefined;
    onDragCapture?: DragEventHandler<HTMLDivElement> | undefined;
    onDragEnd?: DragEventHandler<HTMLDivElement> | undefined;
    onDragEndCapture?: DragEventHandler<HTMLDivElement> | undefined;
    onDragEnter?: DragEventHandler<HTMLDivElement> | undefined;
    onDragEnterCapture?: DragEventHandler<HTMLDivElement> | undefined;
    onDragExit?: DragEventHandler<HTMLDivElement> | undefined;
    onDragExitCapture?: DragEventHandler<HTMLDivElement> | undefined;
    onDragLeave?: DragEventHandler<HTMLDivElement> | undefined;
    onDragLeaveCapture?: DragEventHandler<HTMLDivElement> | undefined;
    onDragOver?: DragEventHandler<HTMLDivElement> | undefined;
    onDragOverCapture?: DragEventHandler<HTMLDivElement> | undefined;
    onDragStart?: DragEventHandler<HTMLDivElement> | undefined;
    onDragStartCapture?: DragEventHandler<HTMLDivElement> | undefined;
    onDrop?: DragEventHandler<HTMLDivElement> | undefined;
    onDropCapture?: DragEventHandler<HTMLDivElement> | undefined;
    onMouseDown?: MouseEventHandler<HTMLDivElement> | undefined;
    onMouseDownCapture?: MouseEventHandler<HTMLDivElement> | undefined;
    onMouseEnter?: MouseEventHandler<HTMLDivElement> | undefined;
    onMouseLeave?: MouseEventHandler<HTMLDivElement> | undefined;
    onMouseMove?: MouseEventHandler<HTMLDivElement> | undefined;
    onMouseMoveCapture?: MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOut?: MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOutCapture?: MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOver?: MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOverCapture?: MouseEventHandler<HTMLDivElement> | undefined;
    onMouseUp?: MouseEventHandler<HTMLDivElement> | undefined;
    onMouseUpCapture?: MouseEventHandler<HTMLDivElement> | undefined;
    onSelect?: ReactEventHandler<HTMLDivElement> | undefined;
    onSelectCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onTouchCancel?: TouchEventHandler<HTMLDivElement> | undefined;
    onTouchCancelCapture?: TouchEventHandler<HTMLDivElement> | undefined;
    onTouchEnd?: TouchEventHandler<HTMLDivElement> | undefined;
    onTouchEndCapture?: TouchEventHandler<HTMLDivElement> | undefined;
    onTouchMove?: TouchEventHandler<HTMLDivElement> | undefined;
    onTouchMoveCapture?: TouchEventHandler<HTMLDivElement> | undefined;
    onTouchStart?: TouchEventHandler<HTMLDivElement> | undefined;
    onTouchStartCapture?: TouchEventHandler<HTMLDivElement> | undefined;
    onPointerDown?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerDownCapture?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerMove?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerMoveCapture?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerUp?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerUpCapture?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerCancel?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerCancelCapture?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerEnter?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerLeave?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOver?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOverCapture?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOut?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOutCapture?: PointerEventHandler<HTMLDivElement> | undefined;
    onGotPointerCapture?: PointerEventHandler<HTMLDivElement> | undefined;
    onGotPointerCaptureCapture?: PointerEventHandler<HTMLDivElement> | undefined;
    onLostPointerCapture?: PointerEventHandler<HTMLDivElement> | undefined;
    onLostPointerCaptureCapture?: PointerEventHandler<HTMLDivElement> | undefined;
    onScroll?: UIEventHandler<HTMLDivElement> | undefined;
    onScrollCapture?: UIEventHandler<HTMLDivElement> | undefined;
    onWheel?: WheelEventHandler<HTMLDivElement> | undefined;
    onWheelCapture?: WheelEventHandler<HTMLDivElement> | undefined;
    onAnimationStart?: AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationStartCapture?: AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationEnd?: AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationEndCapture?: AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationIteration?: AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationIterationCapture?: AnimationEventHandler<HTMLDivElement> | undefined;
    onTransitionEnd?: TransitionEventHandler<HTMLDivElement> | undefined;
    onTransitionEndCapture?: TransitionEventHandler<HTMLDivElement> | undefined;
    margin?: ("dense" | "normal" | "none") | undefined;
    disabled?: boolean | undefined;
    name?: string | undefined;
    type?: InputHTMLAttributes<unknown>["type"];
    value?: unknown;
    autoComplete?: string | undefined;
    placeholder?: string | undefined;
    required?: boolean | undefined;
    size?: OverridableStringUnion<"small" | "medium", TextFieldPropsSizeOverrides> | undefined;
    rows?: (string | number) | undefined;
    component?: ElementType | undefined;
    error?: boolean | undefined;
    fullWidth?: boolean | undefined;
    focused?: boolean | undefined;
    inputProps?: InputBaseProps["inputProps"];
    inputRef?: Ref<any> | undefined;
    hiddenLabel?: boolean | undefined;
    multiline?: boolean | undefined;
    maxRows?: (string | number) | undefined;
    minRows?: (string | number) | undefined;
    InputProps?: Partial< OutlinedInputProps> | undefined;
    FormHelperTextProps?: Partial< FormHelperTextProps> | undefined;
    helperText?: ReactNode;
    InputLabelProps?: Partial< InputLabelProps> | undefined;
    SelectProps?: Partial< SelectProps> | undefined;
}, "ref" | "onChange" | "onBlur" | "disabled" | "name" | "required" | "multiline"> & Pick< RcSesFormControlWrapperProps, "label" | "errors"> & {
    id?: string;
    slotProps?: {
        field?: Partial<Omit<{
            ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined;
            className?: string | undefined;
            style?: CSSProperties | undefined;
            classes?: Partial< TextFieldClasses> | undefined;
            onChange?: OutlinedInputProps["onChange"];
            children?: FormControlProps["children"];
            sx?: SxProps<Theme> | undefined;
            label?: ReactNode;
            slot?: string | undefined;
            select?: boolean | undefined;
            title?: string | undefined;
            key?: Key | null | undefined;
            defaultChecked?: boolean | undefined;
            defaultValue?: unknown;
            suppressContentEditableWarning?: boolean | undefined;
            suppressHydrationWarning?: boolean | undefined;
            accessKey?: string | undefined;
            autoFocus?: boolean | undefined;
            contentEditable?: (boolean | "true" | "false") | "inherit" | "plaintext-only" | undefined;
            contextMenu?: string | undefined;
            dir?: string | undefined;
            draggable?: (boolean | "true" | "false") | undefined;
            hidden?: boolean | undefined;
            id?: string | undefined;
            lang?: string | undefined;
            nonce?: string | undefined;
            spellCheck?: (boolean | "true" | "false") | undefined;
            tabIndex?: number | undefined;
            translate?: "yes" | "no" | undefined;
            radioGroup?: string | undefined;
            role?: AriaRole | undefined;
            about?: string | undefined;
            content?: string | undefined;
            datatype?: string | undefined;
            inlist?: any;
            prefix?: string | undefined;
            property?: string | undefined;
            rel?: string | undefined;
            resource?: string | undefined;
            rev?: string | undefined;
            typeof?: string | undefined;
            vocab?: string | undefined;
            autoCapitalize?: string | undefined;
            autoCorrect?: string | undefined;
            autoSave?: string | undefined;
            color?: OverridableStringUnion<"primary" | "secondary" | "error" | "info" | "success" | "warning", TextFieldPropsColorOverrides> | undefined;
            itemProp?: string | undefined;
            itemScope?: boolean | undefined;
            itemType?: string | undefined;
            itemID?: string | undefined;
            itemRef?: string | undefined;
            results?: number | undefined;
            security?: string | undefined;
            unselectable?: "on" | "off" | undefined;
            inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
            is?: string | undefined;
            "aria-activedescendant"?: string | undefined;
            "aria-atomic"?: (boolean | "true" | "false") | undefined;
            "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined;
            "aria-braillelabel"?: string | undefined;
            "aria-brailleroledescription"?: string | undefined;
            "aria-busy"?: (boolean | "true" | "false") | undefined;
            "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined;
            "aria-colcount"?: number | undefined;
            "aria-colindex"?: number | undefined;
            "aria-colindextext"?: string | undefined;
            "aria-colspan"?: number | undefined;
            "aria-controls"?: string | undefined;
            "aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined;
            "aria-describedby"?: string | undefined;
            "aria-description"?: string | undefined;
            "aria-details"?: string | undefined;
            "aria-disabled"?: (boolean | "true" | "false") | undefined;
            "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined;
            "aria-errormessage"?: string | undefined;
            "aria-expanded"?: (boolean | "true" | "false") | undefined;
            "aria-flowto"?: string | undefined;
            "aria-grabbed"?: (boolean | "true" | "false") | undefined;
            "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
            "aria-hidden"?: (boolean | "true" | "false") | undefined;
            "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
            "aria-keyshortcuts"?: string | undefined;
            "aria-label"?: string | undefined;
            "aria-labelledby"?: string | undefined;
            "aria-level"?: number | undefined;
            "aria-live"?: "off" | "assertive" | "polite" | undefined;
            "aria-modal"?: (boolean | "true" | "false") | undefined;
            "aria-multiline"?: (boolean | "true" | "false") | undefined;
            "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
            "aria-orientation"?: "horizontal" | "vertical" | undefined;
            "aria-owns"?: string | undefined;
            "aria-placeholder"?: string | undefined;
            "aria-posinset"?: number | undefined;
            "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined;
            "aria-readonly"?: (boolean | "true" | "false") | undefined;
            "aria-relevant"?: "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined;
            "aria-required"?: (boolean | "true" | "false") | undefined;
            "aria-roledescription"?: string | undefined;
            "aria-rowcount"?: number | undefined;
            "aria-rowindex"?: number | undefined;
            "aria-rowindextext"?: string | undefined;
            "aria-rowspan"?: number | undefined;
            "aria-selected"?: (boolean | "true" | "false") | undefined;
            "aria-setsize"?: number | undefined;
            "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
            "aria-valuemax"?: number | undefined;
            "aria-valuemin"?: number | undefined;
            "aria-valuenow"?: number | undefined;
            "aria-valuetext"?: string | undefined;
            dangerouslySetInnerHTML?: {
                __html: string | TrustedHTML;
            } | undefined;
            onCopy?: ClipboardEventHandler<HTMLDivElement> | undefined;
            onCopyCapture?: ClipboardEventHandler<HTMLDivElement> | undefined;
            onCut?: ClipboardEventHandler<HTMLDivElement> | undefined;
            onCutCapture?: ClipboardEventHandler<HTMLDivElement> | undefined;
            onPaste?: ClipboardEventHandler<HTMLDivElement> | undefined;
            onPasteCapture?: ClipboardEventHandler<HTMLDivElement> | undefined;
            onCompositionEnd?: CompositionEventHandler<HTMLDivElement> | undefined;
            onCompositionEndCapture?: CompositionEventHandler<HTMLDivElement> | undefined;
            onCompositionStart?: CompositionEventHandler<HTMLDivElement> | undefined;
            onCompositionStartCapture?: CompositionEventHandler<HTMLDivElement> | undefined;
            onCompositionUpdate?: CompositionEventHandler<HTMLDivElement> | undefined;
            onCompositionUpdateCapture?: CompositionEventHandler<HTMLDivElement> | undefined;
            onFocus?: InputProps["onFocus"];
            onFocusCapture?: FocusEventHandler<HTMLDivElement> | undefined;
            onBlur?: InputBaseProps["onBlur"];
            onBlurCapture?: FocusEventHandler<HTMLDivElement> | undefined;
            onChangeCapture?: FormEventHandler<HTMLDivElement> | undefined;
            onBeforeInput?: FormEventHandler<HTMLDivElement> | undefined;
            onBeforeInputCapture?: FormEventHandler<HTMLDivElement> | undefined;
            onInput?: FormEventHandler<HTMLDivElement> | undefined;
            onInputCapture?: FormEventHandler<HTMLDivElement> | undefined;
            onReset?: FormEventHandler<HTMLDivElement> | undefined;
            onResetCapture?: FormEventHandler<HTMLDivElement> | undefined;
            onSubmit?: FormEventHandler<HTMLDivElement> | undefined;
            onSubmitCapture?: FormEventHandler<HTMLDivElement> | undefined;
            onInvalid?: FormEventHandler<HTMLDivElement> | undefined;
            onInvalidCapture?: FormEventHandler<HTMLDivElement> | undefined;
            onLoad?: ReactEventHandler<HTMLDivElement> | undefined;
            onLoadCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onError?: ReactEventHandler<HTMLDivElement> | undefined;
            onErrorCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onKeyDown?: KeyboardEventHandler<HTMLDivElement> | undefined;
            onKeyDownCapture?: KeyboardEventHandler<HTMLDivElement> | undefined;
            onKeyPress?: KeyboardEventHandler<HTMLDivElement> | undefined;
            onKeyPressCapture?: KeyboardEventHandler<HTMLDivElement> | undefined;
            onKeyUp?: KeyboardEventHandler<HTMLDivElement> | undefined;
            onKeyUpCapture?: KeyboardEventHandler<HTMLDivElement> | undefined;
            onAbort?: ReactEventHandler<HTMLDivElement> | undefined;
            onAbortCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onCanPlay?: ReactEventHandler<HTMLDivElement> | undefined;
            onCanPlayCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onCanPlayThrough?: ReactEventHandler<HTMLDivElement> | undefined;
            onCanPlayThroughCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onDurationChange?: ReactEventHandler<HTMLDivElement> | undefined;
            onDurationChangeCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onEmptied?: ReactEventHandler<HTMLDivElement> | undefined;
            onEmptiedCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onEncrypted?: ReactEventHandler<HTMLDivElement> | undefined;
            onEncryptedCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onEnded?: ReactEventHandler<HTMLDivElement> | undefined;
            onEndedCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onLoadedData?: ReactEventHandler<HTMLDivElement> | undefined;
            onLoadedDataCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onLoadedMetadata?: ReactEventHandler<HTMLDivElement> | undefined;
            onLoadedMetadataCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onLoadStart?: ReactEventHandler<HTMLDivElement> | undefined;
            onLoadStartCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onPause?: ReactEventHandler<HTMLDivElement> | undefined;
            onPauseCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onPlay?: ReactEventHandler<HTMLDivElement> | undefined;
            onPlayCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onPlaying?: ReactEventHandler<HTMLDivElement> | undefined;
            onPlayingCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onProgress?: ReactEventHandler<HTMLDivElement> | undefined;
            onProgressCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onRateChange?: ReactEventHandler<HTMLDivElement> | undefined;
            onRateChangeCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onResize?: ReactEventHandler<HTMLDivElement> | undefined;
            onResizeCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onSeeked?: ReactEventHandler<HTMLDivElement> | undefined;
            onSeekedCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onSeeking?: ReactEventHandler<HTMLDivElement> | undefined;
            onSeekingCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onStalled?: ReactEventHandler<HTMLDivElement> | undefined;
            onStalledCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onSuspend?: ReactEventHandler<HTMLDivElement> | undefined;
            onSuspendCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onTimeUpdate?: ReactEventHandler<HTMLDivElement> | undefined;
            onTimeUpdateCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onVolumeChange?: ReactEventHandler<HTMLDivElement> | undefined;
            onVolumeChangeCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onWaiting?: ReactEventHandler<HTMLDivElement> | undefined;
            onWaitingCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onAuxClick?: MouseEventHandler<HTMLDivElement> | undefined;
            onAuxClickCapture?: MouseEventHandler<HTMLDivElement> | undefined;
            onClick?: MouseEventHandler<HTMLDivElement> | undefined;
            onClickCapture?: MouseEventHandler<HTMLDivElement> | undefined;
            onContextMenu?: MouseEventHandler<HTMLDivElement> | undefined;
            onContextMenuCapture?: MouseEventHandler<HTMLDivElement> | undefined;
            onDoubleClick?: MouseEventHandler<HTMLDivElement> | undefined;
            onDoubleClickCapture?: MouseEventHandler<HTMLDivElement> | undefined;
            onDrag?: DragEventHandler<HTMLDivElement> | undefined;
            onDragCapture?: DragEventHandler<HTMLDivElement> | undefined;
            onDragEnd?: DragEventHandler<HTMLDivElement> | undefined;
            onDragEndCapture?: DragEventHandler<HTMLDivElement> | undefined;
            onDragEnter?: DragEventHandler<HTMLDivElement> | undefined;
            onDragEnterCapture?: DragEventHandler<HTMLDivElement> | undefined;
            onDragExit?: DragEventHandler<HTMLDivElement> | undefined;
            onDragExitCapture?: DragEventHandler<HTMLDivElement> | undefined;
            onDragLeave?: DragEventHandler<HTMLDivElement> | undefined;
            onDragLeaveCapture?: DragEventHandler<HTMLDivElement> | undefined;
            onDragOver?: DragEventHandler<HTMLDivElement> | undefined;
            onDragOverCapture?: DragEventHandler<HTMLDivElement> | undefined;
            onDragStart?: DragEventHandler<HTMLDivElement> | undefined;
            onDragStartCapture?: DragEventHandler<HTMLDivElement> | undefined;
            onDrop?: DragEventHandler<HTMLDivElement> | undefined;
            onDropCapture?: DragEventHandler<HTMLDivElement> | undefined;
            onMouseDown?: MouseEventHandler<HTMLDivElement> | undefined;
            onMouseDownCapture?: MouseEventHandler<HTMLDivElement> | undefined;
            onMouseEnter?: MouseEventHandler<HTMLDivElement> | undefined;
            onMouseLeave?: MouseEventHandler<HTMLDivElement> | undefined;
            onMouseMove?: MouseEventHandler<HTMLDivElement> | undefined;
            onMouseMoveCapture?: MouseEventHandler<HTMLDivElement> | undefined;
            onMouseOut?: MouseEventHandler<HTMLDivElement> | undefined;
            onMouseOutCapture?: MouseEventHandler<HTMLDivElement> | undefined;
            onMouseOver?: MouseEventHandler<HTMLDivElement> | undefined;
            onMouseOverCapture?: MouseEventHandler<HTMLDivElement> | undefined;
            onMouseUp?: MouseEventHandler<HTMLDivElement> | undefined;
            onMouseUpCapture?: MouseEventHandler<HTMLDivElement> | undefined;
            onSelect?: ReactEventHandler<HTMLDivElement> | undefined;
            onSelectCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onTouchCancel?: TouchEventHandler<HTMLDivElement> | undefined;
            onTouchCancelCapture?: TouchEventHandler<HTMLDivElement> | undefined;
            onTouchEnd?: TouchEventHandler<HTMLDivElement> | undefined;
            onTouchEndCapture?: TouchEventHandler<HTMLDivElement> | undefined;
            onTouchMove?: TouchEventHandler<HTMLDivElement> | undefined;
            onTouchMoveCapture?: TouchEventHandler<HTMLDivElement> | undefined;
            onTouchStart?: TouchEventHandler<HTMLDivElement> | undefined;
            onTouchStartCapture?: TouchEventHandler<HTMLDivElement> | undefined;
            onPointerDown?: PointerEventHandler<HTMLDivElement> | undefined;
            onPointerDownCapture?: PointerEventHandler<HTMLDivElement> | undefined;
            onPointerMove?: PointerEventHandler<HTMLDivElement> | undefined;
            onPointerMoveCapture?: PointerEventHandler<HTMLDivElement> | undefined;
            onPointerUp?: PointerEventHandler<HTMLDivElement> | undefined;
            onPointerUpCapture?: PointerEventHandler<HTMLDivElement> | undefined;
            onPointerCancel?: PointerEventHandler<HTMLDivElement> | undefined;
            onPointerCancelCapture?: PointerEventHandler<HTMLDivElement> | undefined;
            onPointerEnter?: PointerEventHandler<HTMLDivElement> | undefined;
            onPointerLeave?: PointerEventHandler<HTMLDivElement> | undefined;
            onPointerOver?: PointerEventHandler<HTMLDivElement> | undefined;
            onPointerOverCapture?: PointerEventHandler<HTMLDivElement> | undefined;
            onPointerOut?: PointerEventHandler<HTMLDivElement> | undefined;
            onPointerOutCapture?: PointerEventHandler<HTMLDivElement> | undefined;
            onGotPointerCapture?: PointerEventHandler<HTMLDivElement> | undefined;
            onGotPointerCaptureCapture?: PointerEventHandler<HTMLDivElement> | undefined;
            onLostPointerCapture?: PointerEventHandler<HTMLDivElement> | undefined;
            onLostPointerCaptureCapture?: PointerEventHandler<HTMLDivElement> | undefined;
            onScroll?: UIEventHandler<HTMLDivElement> | undefined;
            onScrollCapture?: UIEventHandler<HTMLDivElement> | undefined;
            onWheel?: WheelEventHandler<HTMLDivElement> | undefined;
            onWheelCapture?: WheelEventHandler<HTMLDivElement> | undefined;
            onAnimationStart?: AnimationEventHandler<HTMLDivElement> | undefined;
            onAnimationStartCapture?: AnimationEventHandler<HTMLDivElement> | undefined;
            onAnimationEnd?: AnimationEventHandler<HTMLDivElement> | undefined;
            onAnimationEndCapture?: AnimationEventHandler<HTMLDivElement> | undefined;
            onAnimationIteration?: AnimationEventHandler<HTMLDivElement> | undefined;
            onAnimationIterationCapture?: AnimationEventHandler<HTMLDivElement> | undefined;
            onTransitionEnd?: TransitionEventHandler<HTMLDivElement> | undefined;
            onTransitionEndCapture?: TransitionEventHandler<HTMLDivElement> | undefined;
            margin?: ("dense" | "normal" | "none") | undefined;
            disabled?: boolean | undefined;
            name?: string | undefined;
            type?: InputHTMLAttributes<unknown>["type"];
            value?: unknown;
            autoComplete?: string | undefined;
            placeholder?: string | undefined;
            required?: boolean | undefined;
            size?: OverridableStringUnion<"small" | "medium", TextFieldPropsSizeOverrides> | undefined;
            rows?: (string | number) | undefined;
            component?: ElementType | undefined;
            error?: boolean | undefined;
            fullWidth?: boolean | undefined;
            focused?: boolean | undefined;
            inputProps?: InputBaseProps["inputProps"];
            inputRef?: Ref<any> | undefined;
            hiddenLabel?: boolean | undefined;
            multiline?: boolean | undefined;
            maxRows?: (string | number) | undefined;
            minRows?: (string | number) | undefined;
            InputProps?: Partial< OutlinedInputProps> | undefined;
            FormHelperTextProps?: Partial< FormHelperTextProps> | undefined;
            helperText?: ReactNode;
            InputLabelProps?: Partial< InputLabelProps> | undefined;
            SelectProps?: Partial< SelectProps> | undefined;
        }, "ref" | "onChange" | "onBlur" | "disabled" | "name" | "required" | "multiline">>;
        wrapper?: Partial<Omit< RcSesFormControlWrapperProps, "label" | "errors">>;
    };
}, "ref"> & RefAttributes<HTMLInputElement>>;
