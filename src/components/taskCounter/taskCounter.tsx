import { Avatar, Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';

const TaskCounter: FC = (): ReactElement => {
    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Avatar>
                    <Typography>10</Typography>
                </Avatar>
                <Typography>Subtitle</Typography>
            </Box>
        </>
    );
};

export default TaskCounter;
