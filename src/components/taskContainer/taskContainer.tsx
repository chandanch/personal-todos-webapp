import { Alert, Box, Grid, LinearProgress, Drawer } from '@mui/material';
import { format } from 'date-fns';
import React, { FC, ReactElement, useContext, useEffect } from 'react';
import TaskCounter from '../taskCounter/taskCounter';
import { Status } from '../../enums/status';
import Task from '../task/task';
import { useQuery } from '@tanstack/react-query';
import makeHTTPRequest from '../../services/httpService';
import { ITaskDetails } from '../task/interfaces/ITaskDetails';
import { useMutation } from '@tanstack/react-query';
import { ITaskUpdate } from '../task/interfaces/ITaskUpdate';
import { countTasks } from '../task/helpers/taskCounter';
import { TaskStatusChangeContext } from '../../contexts';

const TaskContainer: FC = (): ReactElement => {
    const taskStatusChangeContext = useContext(TaskStatusChangeContext);

    const fetchTasks = async () => {
        return await makeHTTPRequest<ITaskDetails[]>(
            `${process.env.REACT_APP_BASE_URL}/tasks`,
            'GET',
        );
    };

    const updateTask = ({ id, status }: ITaskUpdate) => {
        return makeHTTPRequest(
            `${process.env.REACT_APP_BASE_URL}/tasks/${id}`,
            'PATCH',
            { status },
        );
    };

    const updateTaskMutation = useMutation({
        mutationFn: updateTask,
    });

    const { isPending, isError, data, error, isSuccess, refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: fetchTasks,
    });

    useEffect(() => {
        // refresh tasks list
        refetch();
    }, [taskStatusChangeContext.isUpdated]);

    useEffect(() => {
        if (updateTaskMutation.isSuccess) {
            taskStatusChangeContext.toggleStatus();
        }
    }, [updateTaskMutation.isSuccess]);

    if (isPending) {
        return <div>Fetching Tasks....</div>;
    }

    const onTaskStatusToggle = (
        e: React.ChangeEvent<HTMLInputElement>,
        id: string,
    ): void => {
        console.log(e.target.checked, id);

        updateTaskMutation.mutate(
            {
                status: e.target.checked ? Status.inProgress : Status.todo,
                id,
            },
            {
                onSuccess: () => {
                    console.log('Task Updated');
                },
                onError: (error) => {
                    console.log('error in updating task', error);
                },
            },
        );
    };

    const markTaskAsComplete = (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.MouseEvent<HTMLAnchorElement>,
        id: string,
    ) => {
        updateTaskMutation.mutate(
            {
                status: Status.completed,
                id,
            },
            {
                onSuccess: () => {
                    console.log('Task marked as complete');
                },
                onError: (error) => {
                    console.log('error in updating task', error);
                },
            },
        );
    };

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
                    <TaskCounter
                        count={data ? countTasks(data, Status.todo) : 0}
                        status={Status.todo}
                    />
                    <TaskCounter
                        count={data ? countTasks(data, Status.inProgress) : 0}
                        status={Status.inProgress}
                    />
                    <TaskCounter
                        count={data ? countTasks(data, Status.completed) : 0}
                        status={Status.completed}
                    />
                </Grid>

                <Grid item display="flex" flexDirection="column" xs={10} md={8}>
                    <>
                        {isError && (
                            <Alert severity="error">
                                Error in Fetching Tasks
                            </Alert>
                        )}

                        {!isError &&
                            Array.isArray(data) &&
                            data.length === 0 && (
                                <Alert severity="warning">
                                    No Tasks Found! Start Adding Tasks!
                                </Alert>
                            )}
                        {isPending ? (
                            <LinearProgress />
                        ) : (
                            Array.isArray(data) &&
                            data.length > 0 &&
                            data.map((task, index) => {
                                return task.status === Status.todo ||
                                    task.status === Status.inProgress ? (
                                    <Task
                                        id={task.id}
                                        title={task.title}
                                        description={task.description}
                                        status={task.status}
                                        priority={task.priority}
                                        taskDate={new Date(task.duedate)}
                                        key={index}
                                        onStatusToggle={onTaskStatusToggle}
                                        onmarkComplete={markTaskAsComplete}
                                    />
                                ) : (
                                    false
                                );
                            })
                        )}
                    </>
                </Grid>
            </Grid>
        </>
    );
};

export default TaskContainer;
