import { default as React } from 'react';
import { ColorType } from '../common/ColorType';
export type CardServiceProps = {
    title: string;
    Icon: React.FunctionComponent;
    iconColor?: ColorType;
};
