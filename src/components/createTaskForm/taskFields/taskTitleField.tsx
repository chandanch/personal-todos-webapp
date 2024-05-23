import { TextField } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITextField } from '../interfaces/ITextField';

const TaskTitleField: FC<ITextField> = (props): ReactElement => {
    const { onChange = () => {}, disabled = false } = props;

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
            disabled={disabled}
            onChange={onChange}
        />
    );
};

export default TaskTitleField;
