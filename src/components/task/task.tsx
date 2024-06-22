import { Box } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import TaskHeader from './taskHeader';
import TaskBody from './taskBody';
import TaskFooter from './taskFooter';
import { ITask } from './interfaces/ITask';
import { Status } from '../../enums/status';
import { Priority } from '../../enums/priority';

const Task: FC<ITask> = (props): ReactElement => {
    const {
        title = '',
        description = '',
        id = '',
        status = Status.completed,
        priority = Priority.normal,
        onStatusToggle = (e) => console.log('toggle status'),
        onmarkComplete = (e) => console.log('Task Completed'),
        taskDate = new Date(),
    } = props;

    return (
        <>
            <Box
                display="flex"
                width="100%"
                justifyContent="flex-start"
                flexDirection="column"
                mb={4}
                p={2}
                sx={{
                    width: '100%',
                    backgroundColor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'info.main',
                }}
            >
                <TaskHeader title={title} taskDate={new Date()} />
                <TaskBody description={description} />
                <TaskFooter
                    onStatusToggle={onStatusToggle}
                    onmarkComplete={onmarkComplete}
                />
            </Box>
        </>
    );
};

export default Task;
