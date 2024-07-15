import {
    Alert,
    AlertTitle,
    Box,
    Button,
    LinearProgress,
    SelectChangeEvent,
    Stack,
    Typography,
} from '@mui/material';
import React, { FC, ReactElement, useState } from 'react';
import TaskTitleField from './taskFields/taskTitleField';
import TaskDescField from './taskFields/taskDescriptionField';
import TaskDateField from './taskFields/taskDateField';
import TaskSelectField from './taskFields/taskSelectField';
import { ISelectOptions } from './interfaces/ISelectField';
import { Priority } from '../../enums/priority';
import { Status } from '../../enums/status';
import { useMutation } from '@tanstack/react-query';
import makeHTTPRequest from '../../services/httpService';
import { ICreateTask } from './interfaces/ICreateTask';

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
            value: Status.completed,
        },
    ];

    const [title, setTitle] = useState<string | undefined>(undefined);
    const [description, setDescription] = useState<string | undefined>(
        undefined,
    );
    const [dueDate, setDueDate] = useState<Date | null>(new Date());
    const [status, setStatus] = useState<string>(Status.todo);
    const [priority, setPriority] = useState<string>(Priority.low);
    const [isCreateBtnDisabled, setCreateBtnState] = useState(true);

    const onTitleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        title && description && dueDate
            ? setCreateBtnState(false)
            : setCreateBtnState(true);
        setTitle(event.target.value);
    };

    const onDescChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        title && description && dueDate
            ? setCreateBtnState(false)
            : setCreateBtnState(true);
        setDescription(event.target.value);
    };

    const onDueDateChange = (newDate: Date | null) => {
        title && description && dueDate
            ? setCreateBtnState(false)
            : setCreateBtnState(true);
        setDueDate(newDate);
    };

    const onStatusChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value);
    };

    const onPriorityChange = (event: SelectChangeEvent) => {
        setPriority(event.target.value);
    };

    // Define your mutation function
    const createTask = (data: ICreateTask) => {
        return makeHTTPRequest(
            `${process.env.REACT_APP_BASE_URL}/tasks`,
            'POST',
            data,
        );
    };

    // define create todo mutation
    const createTaskMutation = useMutation({
        mutationFn: createTask,
    });

    const onSubmitHandler = (): void => {
        if (!title || !description || !dueDate) {
            alert('title, description and due date are required');
            return;
        }
        console.log('creating task');
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
            px={4}
            my={6}
        >
            <Alert
                severity="success"
                sx={{ width: '100%', marginBottom: '16px' }}
            >
                <AlertTitle>Success</AlertTitle>
                Todo has been added!
            </Alert>
            <Typography mb={2} component="h2" variant="h6">
                Create New Task
            </Typography>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <TaskTitleField onChange={onTitleChange} disabled={false} />
                <TaskDescField onChange={onDescChange} disabled={false} />
                <TaskDateField value={dueDate} onChange={onDueDateChange} />
                <Stack spacing={2} direction="row">
                    <TaskSelectField
                        name="priority"
                        label="Priority"
                        value={priority}
                        options={priorityOptions}
                        onChange={onPriorityChange}
                    />
                    <TaskSelectField
                        name="status"
                        label="Status"
                        value={status}
                        options={statusOptions}
                        onChange={onStatusChange}
                    />
                </Stack>
                <LinearProgress />
                <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    disabled={isCreateBtnDisabled}
                    onClick={onSubmitHandler}
                >
                    Create Task
                </Button>
            </Stack>
        </Box>
    );
};

export default CreateTaskForm;
