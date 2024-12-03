import { Meta, ReactRenderer } from '@storybook/react';
import { default as RcSesAlert } from '../../components/common/Alert';
import { AnnotatedStoryFn } from '@storybook/csf';
import { AlertProps } from '@mui/material';
declare const meta: Meta<typeof RcSesAlert>;
export default meta;
export declare const Main: AnnotatedStoryFn<ReactRenderer, AlertProps>;
