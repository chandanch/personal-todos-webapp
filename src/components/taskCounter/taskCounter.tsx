import { Avatar, Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITaskCounter } from './interfaces/ITaskCounter';

const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
    const { count, status } = props;

    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Avatar
                    sx={{
                        backgroundColor: 'transparent',
                        border: '5px solid',
                        width: '96px',
                        height: '96px',
                        marginBottom: '16px',
                        borderColor: 'primary.light',
                    }}
                >
                    <Typography color="#ffffff" variant="h4">
                        {count}
                    </Typography>
                </Avatar>
                <Typography color="#ffffff" variant="h5" fontWeight="bold">
                    {status}
                </Typography>
            </Box>
        </>
    );
};

export default TaskCounter;
