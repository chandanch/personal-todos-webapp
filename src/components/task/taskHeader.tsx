import { Box, Chip, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';

const TaskHeader: FC = (): ReactElement => {
    return (
        <Box display="flex" width="100%" justifyContent="space-between" mb={4}>
            <Box>
                <Typography>Get Spare Tyres</Typography>
            </Box>
            <Box>
                <Chip variant="filled" label="June 12 2024" />
            </Box>
        </Box>
    );
};

export default TaskHeader;
