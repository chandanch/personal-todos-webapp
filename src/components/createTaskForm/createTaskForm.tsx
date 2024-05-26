import { Box, Stack, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import TaskTitleField from './taskFields/taskTitleField';
import TaskDescField from './taskFields/taskDescriptionField';
import TaskDateField from './taskFields/taskDateField';

const CreateTaskForm: FC = (): ReactElement => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
            px={4}
            my={6}
        >
            <Typography mb={2} component="h2" variant="h6">
                Create New Task
            </Typography>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <TaskTitleField disabled={false} />
                <TaskDescField disabled={false} />
                <TaskDateField />
            </Stack>
        </Box>
    );
};

export default CreateTaskForm;
