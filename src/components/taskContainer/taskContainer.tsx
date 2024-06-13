import { Box, Grid } from '@mui/material';
import { format } from 'date-fns';
import React, { FC, ReactElement } from 'react';
import TaskCounter from '../taskCounter/taskCounter';
import { Status } from '../../enums/status';

const TaskContainer: FC = (): ReactElement => {
    return (
        <>
            <Box mb={8} px={4}>
                <h2>
                    Hey! here is the status of all your tasks as on{' '}
                    {format(new Date(), 'PPpp')}
                </h2>
            </Box>
            <Grid container display="flex" justifyContent="center">
                <Grid
                    item
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-around"
                    alignItems="center"
                    md={10}
                    xs={12}
                    mb={8}
                >
                    <TaskCounter count={10} status={Status.todo} />
                    <TaskCounter count={4} status={Status.inProgress} />
                    <TaskCounter count={8} status={Status.completed} />
                </Grid>
                <Grid item display="flex" flexDirection="column" xs={10} md={8}>
                    <Box>Task details 1</Box>
                    <Box>Task details 2</Box>
                </Grid>
            </Grid>
        </>
    );
};

export default TaskContainer;
