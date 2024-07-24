import { Alert, Box, Grid, LinearProgress, Drawer } from '@mui/material';
import { format } from 'date-fns';
import React, { FC, ReactElement, useEffect } from 'react';
import TaskCounter from '../taskCounter/taskCounter';
import { Status } from '../../enums/status';
import Task from '../task/task';
import { useQuery } from '@tanstack/react-query';
import makeHTTPRequest from '../../services/httpService';
import { ITaskDetails } from '../task/interfaces/ITaskDetails';

const TaskContainer: FC = (): ReactElement => {
    const fetchTasks = async () => {
        return await makeHTTPRequest<ITaskDetails[]>(
            `${process.env.REACT_APP_BASE_URL}/tasks`,
            'GET',
        );
    };

    const { isPending, isError, data, error, isSuccess } = useQuery({
        queryKey: ['tasks'],
        queryFn: fetchTasks,
    });

    if (isPending) {
        return <div>Fetching Tasks....</div>;
    }

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
                        count={
                            Array.isArray(data) &&
                            data.length > 0 &&
                            data.length
                                ? data.length
                                : 5
                        }
                        status={Status.todo}
                    />
                    <TaskCounter count={4} status={Status.inProgress} />
                    <TaskCounter count={10} status={Status.completed} />
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
