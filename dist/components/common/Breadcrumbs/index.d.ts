export type BreadcrumbItem = {
    label: string;
    path: string;
};
type Props = {
    path: BreadcrumbItem[];
};
declare function RcSesBreadcrumbs({ path }: Props): import("react/jsx-runtime").JSX.Element;
export default RcSesBreadcrumbs;
