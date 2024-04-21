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
            paper: '#151515',
            default: '#263238',
        },
        error: {
            main: '#f44336',
        },
        warning: {
            main: '#ffa726',
        },
    },
});
