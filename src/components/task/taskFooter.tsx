import { Box, Button, FormControlLabel, Switch } from '@mui/material';
import React, { FC, ReactElement } from 'react';

const TaskFooter: FC = (): ReactElement => {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={4}
        >
            <FormControlLabel
                control={<Switch color="warning" />}
                label="In Progress"
            />
            <Button
                variant="contained"
                color="success"
                size="small"
                sx={{ color: '#ffffff' }}
            >
                Mark as Done
            </Button>
        </Box>
    );
};

export default TaskFooter;
