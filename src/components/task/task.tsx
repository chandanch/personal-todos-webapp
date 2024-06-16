import { Box } from '@mui/material';
import React, { FC, ReactElement } from 'react';

const Task: FC = (): ReactElement => {
    return (
        <>
            <Box
                display="flex"
                width="100%"
                justifyContent="flex-start"
                flexDirection="column"
                mb={2}
                p={4}
                sx={{
                    width: '100%',
                    backgroundColor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'secondary.dark',
                }}
            >
                Task Details
            </Box>
        </>
    );
};

export default Task;
