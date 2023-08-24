// src/styles/theme.ts

import { extendTheme } from 'native-base';

const theme = extendTheme({
  colors: {
    primary: '#171010',
    secondary: '#423F3E',
    tertiary: '#2B2B2B',
    quaternary: '#362222',
  },
  fonts: {
    heading: 'Roboto-Bold',
    body: 'Roboto-Regular',
    mono: 'Roboto-Medium',
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '10px',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
      },
      variants: {
        solid: (props: any) => ({
          bg: props.colorScheme === 'primary' ? 'primary' : 'secondary',
          _text: { color: 'white' },
        }),
      },
    },
    Text: {
      baseStyle: {
        fontFamily: 'Roboto-Bold',
      },
      variants: {
        title: {
          fontSize: '2xl',
          fontWeight: 'bold',
        },
        subtitle: {
          fontSize: 'lg',
          fontWeight: 'medium',
        },
      },
    },
  },
});

export default theme;
