import { default as React } from 'react';
import { default as IconProps } from '../../assets/IconProps';
import { default as palette } from '../../theme/palette';
type Shade = keyof (typeof palette)[keyof typeof palette];
type Props = {
    bgShade?: Shade | 'white';
    color?: keyof typeof palette;
    Icon: React.JSXElementConstructor<IconProps>;
    iconShade?: Shade | 'white';
    size?: 'tiny' | 'small' | 'medium' | 'mediumLarge' | 'large';
};
declare function IconWithCircularBackground(props: Props): import("react/jsx-runtime").JSX.Element;
declare const _default: React.MemoExoticComponent<typeof IconWithCircularBackground>;
export default _default;
