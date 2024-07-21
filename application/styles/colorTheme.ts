import { PaletteOptions, createTheme } from '@mui/material';

// PaletteOptionsを拡張してカスタムカラーを追加
interface CustomPaletteOptions extends PaletteOptions {
  primary?: {
    main: string;
  };
  secondary?: {
    main: string;
  };
  success?: {
    main: string;
  };
  error?: {
    main: string;
  };
}
const theme = createTheme({
  palette: {
    primary: {
      main: '#EC4035', // 未対応
    },
    secondary: {
      main: '#078EDF', // 処理中
    },
    success: {
      main: '#0AB630', // 処理済
    },
    error: {
      main: '#5b5b5b', // 対応不要
    },
    // 他のカスタムカラーも同様に追加できます
  } as CustomPaletteOptions,
});

export default theme;

export const mainBlue = '#078EDF';
export const white = '#FFFFFF';
export const gray = '#AAAAAA';
export const refRed = '#D75E6D';
export const normalUser = '#68E5A2';
export const adminUser = '#1666DD';
export const mailGray = '#D9D9D9';
export const complete = '#0ECB65';
export const warningRed = '#FF857D';
export const errorRed = '#d32f2f';
