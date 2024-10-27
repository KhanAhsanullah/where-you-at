import {ReactNode} from 'react';
import {Dimensions} from 'react-native';
import {SCREENS} from './ScreenNames';
import {navigate} from '../navigation/RootNavigation';
import {IMAGES} from '.';
interface Tab {
  key: number;
  title: string;
  navigateTo: string;
  image: ReactNode;
  imageActive: ReactNode;
  vector: string;
}
const {height, width} = Dimensions.get('screen');

export const SCREEN_HEIGHT = height;
export const SCREEN_WIDTH = width;

const fontRegularName = 'Poppins';

export const theme = {
  font: {
    regular: fontRegularName + '-Regular',
    semibold: fontRegularName + '-SemiBold',
    bold: fontRegularName + '-Bold',
    medium: fontRegularName + '-Medium',
  },
  fontSize: {
    tiny: 8,
    extraVSmall: 10,
    extraSmall12: 12,
    extraSmall: 13,
    small: 14,
    medium: 15,
    regular: 16,
    large: 18,
    large20: 20,
    headingSize: 22,
    large24: 24,
    large26: 26,
    extraLarge: 28,
  },
  color: {
    primary: '#2B3E68',
    secondry:'#92C020',
    cyan:'#9DE5FF',
    tgray: '#7C8BA0',
    descColor:'#8C8C8C',
    inputTypeColor:'#F5F9FE',
    darkGray:'#454857',
  
    divider: '#E6E8EE',
    black: '#000',
    white: '#fff',
    fieldColor:"#F9F9FC",

    lightGray:"#F5F5F5",
  
  },
};

export const CheckIfValid = (
  index: number,
  isValid: boolean,
  state: boolean[],
  setState: React.Dispatch<React.SetStateAction<boolean[]>>,
) => {
  const copy = [...state];
  copy[index] = isValid;
  setState(copy);
};

