import { Grid } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import SideBar from '../../components/sidebar/sidebar';
import TaskContainer from '../../components/taskContainer/taskContainer';

const Dashboard: FC = (): ReactElement => {
    return (
        <Grid container minHeight="100vh" m={0} p={0}>
            <Grid item md={8} sm={12} xs={12} px={4}>
                <TaskContainer />
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
                <SideBar />
            </Grid>
        </Grid>
    );
};

export default Dashboard;
