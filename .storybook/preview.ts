import { CssBaseline, ThemeProvider } from '@mui/material'
import type { Preview } from '@storybook/react'
import React from 'react'

import lightTheme from '../src/theme/light'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    /*a11y: {
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
    },*/
  },

  decorators: [
    (Story) =>
      React.createElement(
        ThemeProvider,
        { theme: lightTheme },
        React.createElement(CssBaseline),
        React.createElement(Story),
      ),
  ],
}

export default preview
