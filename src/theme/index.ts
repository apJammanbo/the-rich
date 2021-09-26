import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Gugi', cursive;, ${base.fonts?.heading}`,
    body: `'Gugi', cursive;, ${base.fonts?.heading}`,
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

export default theme;
