import { Box } from '@mui/material';
import { format } from 'date-fns';
import React, { FC, ReactElement } from 'react';

const TaskContainer: FC = (): ReactElement => {
    return (
        <Box mb={8} px={4}>
            <h2>
                Hey! here is the status of all your tasks as on{' '}
                {format(new Date(), 'PPpp')}
            </h2>
        </Box>
    );
};

export default TaskContainer;
