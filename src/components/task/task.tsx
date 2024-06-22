import { Box } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import TaskHeader from './taskHeader';
import TaskBody from './taskBody';
import TaskFooter from './taskFooter';

const Task: FC = (): ReactElement => {
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
                <TaskHeader title="Get Spare Tyres" taskDate={new Date()} />
                <TaskBody description="Get some Types now for the car" />
                <TaskFooter
                    onStatusToggle={() => {}}
                    onmarkComplete={() => {}}
                />
            </Box>
        </>
    );
};

export default Task;
