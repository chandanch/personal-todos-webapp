import { TextField } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';

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

TaskTitleField.propTypes = {
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
};

export default TaskTitleField;
