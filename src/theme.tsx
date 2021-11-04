import {DefaultTheme} from 'react-native-paper';

export const palette = {
  WHITE: '#ffffff',
  PALE_TEAL: '#69c0ba',
  LIGHT_TEAL: '#9adcd7',
  GREYISH_BROWN: '#4a4a4a',
  WARM_GREY: '#9b9b9b',
  BUBBLE_GUM: '#e97db5',
};

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: palette.PALE_TEAL,
    accent: 'yellow',
    placeholder: 'yellow',
    text: palette.WARM_GREY,
  },
  palette,
};
