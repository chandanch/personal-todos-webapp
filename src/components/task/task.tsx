import { Box } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import TaskHeader from './taskHeader';
import TaskBody from './taskBody';
import TaskFooter from './taskFooter';
import { ITask } from './interfaces/ITask';
import { Status } from '../../enums/status';
import { Priority } from '../../enums/priority';
import PropTypes from 'prop-types';
import emitPriorityBorderColor from './helpers/emitPriorityBorderColor';

const Task: FC<ITask> = (props): ReactElement => {
    const {
        title = 'Get Rolls From Stores',
        description = 'Get the Rolls from the stores',
        id = '',
        status = Status.completed,
        priority = Priority.high,
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
                    borderColor: `${emitPriorityBorderColor(priority)}`,
                }}
            >
                <TaskHeader title={title} taskDate={new Date()} />
                <TaskBody description={description} />
                <TaskFooter
                    onStatusToggle={onStatusToggle}
                    onmarkComplete={onmarkComplete}
                    id={id}
                    status={status}
                />
            </Box>
        </>
    );
};

Task.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    taskDate: PropTypes.instanceOf(Date),
    onmarkComplete: PropTypes.func,
    onStatusToggle: PropTypes.func,
    status: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    priority: PropTypes.string,
};

export default Task;
