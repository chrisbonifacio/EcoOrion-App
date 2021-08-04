import {extendTheme} from 'native-base';

export const theme = extendTheme({
  colors: {
    default: {
      primary: '#80A241',
      secondary: '#5d5d5d',
      bgdark: '#5A6459',
      bglight: '#FFFFFF',
    },
  },
  components: {
    Button: {
      variants: {
        ghosted: ({}) => {
          return {
            bg: 'default.bgdark',
            color: 'red.500',
          };
        },
      },
    },
  },
});
