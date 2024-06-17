import { Box } from '@mui/material';
import React, { FC, ReactElement } from 'react';

const TaskHeader: FC = (): ReactElement => {
    return (
        <Box display="flex" width="100%" justifyContent="space-between" mb={4}>
            <Box>Task Title</Box>
            <Box>Date</Box>
        </Box>
    );
};

export default TaskHeader;
