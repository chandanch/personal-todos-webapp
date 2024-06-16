import { ThemeOptions, createTheme } from '@mui/material';

export const customTheme: ThemeOptions = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#2962FF',
            light: '#1976D2',
            dark: '#0D47A1',
        },
        background: {
            paper: '#37474f',
            default: '#263238',
        },
        error: {
            main: '#f44336',
        },
        warning: {
            main: '#ffa726',
        },
        secondary: {
            main: '#ff5722',
            light: '#9500ae',
            dark: '#4500ae',
        },
        info: {
            main: '#00E5FF',
        },
    },
});
