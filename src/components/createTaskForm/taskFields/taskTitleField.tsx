import { TextField } from '@mui/material';
import React, { FC, ReactElement } from 'react';

const TaskTitleField: FC = (): ReactElement => {
    return (
        <TextField
            id="title"
            label="Task Title"
            placeholder="Enter Task Title"
            variant="outlined"
            size="small"
            name="title"
            fullWidth
            color="info"
            disabled={false}
            onChange={(e) => console.log(e.target.value)}
        />
    );
};

export default TaskTitleField;
