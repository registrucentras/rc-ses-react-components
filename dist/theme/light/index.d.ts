import { Theme } from '@mui/material';
declare module '@mui/material/styles' {
    interface Palette {
        dark: Palette['grey'];
        grey: Palette['grey'];
    }
    interface PaletteOptions {
        dark?: PaletteOptions['grey'];
        grey?: PaletteOptions['grey'];
    }
}
declare module '@mui/material' {
    interface AlertPropsColorOverrides {
        grey: true;
    }
    interface AlertClasses {
        standardGrey: string;
        outlinedGrey: string;
        filledGrey: string;
    }
    interface ButtonPropsVariantOverrides {
        link: true;
    }
    interface ButtonPropsColorOverrides {
        grey: any;
        dark: any;
    }
    interface RadioPropsColorOverrides {
        grey: true;
    }
    interface TabsPropsVariantOverrides {
        grey: true;
    }
}
declare const theme: Theme;
export default theme;
