import { ThemeProvider, CssBaseline } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { customTheme } from './theme/customTheme';
import Dashboard from './pages/dashboard/dashboard';

const App: FC = (): ReactElement => {
    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <Dashboard />
        </ThemeProvider>
    );
};

export default App;
