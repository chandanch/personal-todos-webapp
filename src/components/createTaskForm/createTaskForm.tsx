import { Box, Stack, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import TaskTitleField from './taskFields/taskTitleField';
import TaskDescField from './taskFields/taskDescriptionField';
import TaskDateField from './taskFields/taskDateField';
import TaskSelectField from './taskFields/taskSelectField';
import { ISelectOptions } from './interfaces/ISelectField';
import { Priority } from '../../enums/priority';
import { Status } from '../../enums/status';

const CreateTaskForm: FC = (): ReactElement => {
    const priorityOptions: ISelectOptions[] = [
        {
            label: Priority.low,
            value: Priority.low,
        },
        {
            label: Priority.high,
            value: Priority.high,
        },
        {
            label: Priority.normal,
            value: Priority.normal,
        },
    ];

    const statusOptions: Array<ISelectOptions> = [
        {
            label: Status.todo,
            value: Status.todo,
        },
        {
            label: Status.inProgress,
            value: Status.inProgress,
        },
        {
            label: Status.completed,
            value: Status.inProgress,
        },
    ];

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
                <Stack spacing={2} direction="row">
                    <TaskSelectField
                        name="priority"
                        label="Priority"
                        options={priorityOptions}
                    />
                    <TaskSelectField
                        name="status"
                        label="Status"
                        options={statusOptions}
                    />
                </Stack>
            </Stack>
        </Box>
    );
};

export default CreateTaskForm;
