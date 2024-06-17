import { Box, Chip, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITaskHeader } from './interfaces/ITaskHeader';
import { format } from 'date-fns';

const TaskHeader: FC<ITaskHeader> = (props): ReactElement => {
    const { title, taskDate } = props;

    return (
        <Box display="flex" width="100%" justifyContent="space-between" mb={4}>
            <Box>
                <Typography>{title}</Typography>
            </Box>
            <Box>
                <Chip variant="filled" label={format(taskDate, 'PPP')} />
            </Box>
        </Box>
    );
};

export default TaskHeader;
