import { Meta, ReactRenderer } from '@storybook/react';
import { default as RcSesServiceFormActions } from '../../../components/layout/ServiceFormActions';
import { AnnotatedStoryFn } from '@storybook/core/csf';
declare const meta: Meta<typeof RcSesServiceFormActions>;
export default meta;
export declare const Main: AnnotatedStoryFn<ReactRenderer, {
    onDiscard: () => void;
    onSaveDraft: () => void;
    onSubmit: () => void;
    draftDisabled?: boolean;
    submitDisabled?: boolean;
}>;
