// The theme declares `fontFamily: 'Public sans, ...'` but nothing used to load
// the font, so Storybook rendered in whichever generic sans-serif the OS
// supplied - DejaVu on Linux, Arial/Helvetica on Windows. Bundling it here makes
// Storybook render what users actually see and, critically, makes visual
// regression baselines reproducible across machines and CI.
import '@fontsource/public-sans/400.css'
import '@fontsource/public-sans/500.css'
import '@fontsource/public-sans/600.css'
import '@fontsource/public-sans/700.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react-vite'

import lightTheme from '../src/theme/light'

// There is no dark theme yet - the addon's dark entry deliberately points at the
// light theme so the theme switcher stays wired up. Replace when one exists.
const darkTheme = lightTheme

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    /* a11y: {
      // Optional selector to inspect
      element: '#storybook-root',
      config: {
        rules: [
          {
            // The autocomplete rule will not run based on the CSS selector provided
            id: 'autocomplete-valid',
            selector: '*:not([autocomplete="nope"])',
          },
          {
            // Setting the enabled option to false will disable checks for this particular rule on all stories.
            id: 'image-alt',
            enabled: false,
          },
        ],
      },
      // Axe's options parameter
      options: {},
      // Optional flag to prevent the automatic check
      manual: true,
    }, */
  },

  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles: CssBaseline,
      Provider: ThemeProvider,
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: 'light',
    }),
  ],
}

export default preview
