import { TextField } from '@mui/material';
import React, { FC, ReactElement } from 'react';

const TaskDescField: FC = (): ReactElement => {
    return (
        <TextField
            id="description"
            label="Task Description"
            placeholder="Enter Task Description"
            variant="outlined"
            size="small"
            name="description"
            multiline
            rows={5}
            fullWidth
            color="info"
        />
    );
};

export default TaskDescField;
