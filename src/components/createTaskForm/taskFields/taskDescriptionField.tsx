import { TextField } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';

import { ITextField } from '../interfaces/ITextField';

const TaskDescField: FC<ITextField> = (props): ReactElement => {
    const { onChange = () => {}, disabled = false } = props;
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
            disabled={disabled}
            onChange={onChange}
        />
    );
};

TaskDescField.propTypes = {
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
};

export default TaskDescField;
