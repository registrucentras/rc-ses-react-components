import { ComponentProps } from 'react';
import { default as RcSesBreadcrumbs } from '../../common/Breadcrumbs';
type Props = {
    breadcrumbsProps: ComponentProps<typeof RcSesBreadcrumbs>;
    children: React.ReactNode;
    title: string;
};
declare function ServiceHeader({ breadcrumbsProps, children, title }: Props): import("react/jsx-runtime").JSX.Element;
export default ServiceHeader;
