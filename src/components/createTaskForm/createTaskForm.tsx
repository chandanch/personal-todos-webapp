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
import React, { FC, ReactElement, useContext, useState } from 'react';
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
import { TaskStatusChangeContext } from '../../contexts';

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
    const [duedate, setDueDate] = useState<Date | null>(new Date());
    const [status, setStatus] = useState<string>(Status.todo);
    const [priority, setPriority] = useState<string>(Priority.low);
    const [showSuccessAlert, setshowSuccessAlert] = useState<boolean>(false);

    const taskStatusChangeContext = useContext(TaskStatusChangeContext);

    const onTitleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setTitle(event.target.value);
    };

    const onDescChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setDescription(event.target.value);
    };

    const onDueDateChange = (newDate: Date | null) => {
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
        const apiUrl = process.env.REACT_APP_BASE_URL
            ? process.env.REACT_APP_BASE_URL
            : 'https://2c5df69e-f0ef-408c-9524-86f83c225768-dev.e1-us-cdp-2.choreoapis.dev/personaltodos/personaltodosbackend/v1.0';
        return makeHTTPRequest(`${apiUrl}/tasks`, 'POST', data);
    };

    // define create todo mutation
    const createTaskMutation = useMutation({
        mutationFn: createTask,
    });

    const onSubmitHandler = (): void => {
        if (!title || !description || !duedate) {
            alert('title, description and due date are required');
            return;
        }

        const taskReqData: ICreateTask = {
            title,
            description,
            duedate: duedate.toISOString(),
            priority,
            status,
        };

        console.log('creating task', taskReqData);

        createTaskMutation.mutate(taskReqData, {
            onSuccess: () => {
                // alert('Task Created');
                setshowSuccessAlert(true);

                // remove alert after interval
                setTimeout(() => {
                    setshowSuccessAlert(false);
                }, 5000);

                taskStatusChangeContext.toggleStatus();

                // reset input fields
                setTitle('');
                setDescription('');
                setDueDate(new Date());
                setStatus(Status.todo);
                setPriority(Priority.low);
            },
            onError: () => alert('Failed! Task creation'),
        });
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
            {showSuccessAlert && (
                <Alert
                    severity="success"
                    sx={{ width: '100%', marginBottom: '16px' }}
                >
                    <AlertTitle>Success</AlertTitle>
                    Todo has been added!
                </Alert>
            )}
            <Typography mb={2} component="h2" variant="h6">
                Create New Task
            </Typography>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <TaskTitleField
                    onChange={onTitleChange}
                    disabled={createTaskMutation.isPending}
                    value={title}
                />
                <TaskDescField
                    onChange={onDescChange}
                    disabled={createTaskMutation.isPending}
                    value={description}
                />
                <TaskDateField
                    value={duedate}
                    onChange={onDueDateChange}
                    disabled={createTaskMutation.isPending}
                />
                <Stack spacing={2} direction="row">
                    <TaskSelectField
                        name="priority"
                        label="Priority"
                        value={priority}
                        options={priorityOptions}
                        onChange={onPriorityChange}
                        disabled={createTaskMutation.isPending}
                    />
                    <TaskSelectField
                        name="status"
                        label="Status"
                        value={status}
                        options={statusOptions}
                        onChange={onStatusChange}
                        disabled={createTaskMutation.isPending}
                    />
                </Stack>
                {createTaskMutation.isPending && <LinearProgress />}
                <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    disabled={!title || !description || !duedate}
                    onClick={onSubmitHandler}
                >
                    Create Task
                </Button>
            </Stack>
        </Box>
    );
};

export default CreateTaskForm;
