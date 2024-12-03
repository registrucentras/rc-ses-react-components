import { Meta, ReactRenderer } from '@storybook/react';
import { default as RcSesBreadcrumbs, BreadcrumbItem } from '../../components/common/Breadcrumbs';
import { AnnotatedStoryFn } from '@storybook/csf';
declare const meta: Meta<typeof RcSesBreadcrumbs>;
export default meta;
export declare const Main: AnnotatedStoryFn<ReactRenderer, {
    path: BreadcrumbItem[];
}>;
