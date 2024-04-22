import { Grid } from '@mui/material';
import React, { FC, ReactElement } from 'react';

const Dashboard: FC = (): ReactElement => {
    return (
        <Grid container minHeight="100vh" m={0} p={0}>
            <Grid item md={8} sm={12} xs={12} px={4}>
                <h2>Todos List Area</h2>
            </Grid>
            <Grid
                item
                md={4}
                sm={12}
                xs={12}
                sx={{
                    height: '100vh',
                    position: 'fixed',
                    right: 0,
                    top: 0,
                    width: '100%',
                    backgroundColor: 'background.paper',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <h2>Todos Create & profile </h2>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
