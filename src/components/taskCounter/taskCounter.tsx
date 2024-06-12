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
                    <Typography>10</Typography>
                </Avatar>
                <Typography>Subtitle</Typography>
            </Box>
        </>
    );
};

export default TaskCounter;
