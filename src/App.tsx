import { ThemeProvider, CssBaseline } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { customTheme } from './theme/customTheme';

const App: FC = (): ReactElement => {
    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <div>Personal Todos Manager</div>
        </ThemeProvider>
    );
};

export default App;
