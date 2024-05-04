import { Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';

const CreateTaskForm: FC = (): ReactElement => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            width={'100%'}
            px={4}
        >
            <Typography mb={2} component="h2" variant="h6">
                Create Task
            </Typography>
        </Box>
    );
};

export default CreateTaskForm;
