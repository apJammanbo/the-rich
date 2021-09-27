import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Noto Sans KR', sans-serif, ${base.fonts?.heading}`,
    body: `'Noto Sans KR', sans-serif, ${base.fonts?.heading}`,
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

export default theme;
