import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';

import { ISelectField } from '../interfaces/ISelectField';

const TaskSelectField: FC<ISelectField> = (props): ReactElement => {
    const {
        label = 'Select Box',
        value = '',
        name = 'selectBox',
        disabled = false,
        onChange = (e: SelectChangeEvent) => {},
        options = [{ label: 'Add Item', value: 'Add Item' }],
    } = props;

    return (
        <FormControl fullWidth size="small">
            <InputLabel id={`${name}-id`} color="info">
                {label}
            </InputLabel>
            <Select
                labelId="status"
                id={`${name}-id`}
                value={value}
                label="Status"
                name={name}
                color="info"
                disabled={disabled}
                onChange={onChange}
            >
                {options.map((item, index) => {
                    return (
                        <MenuItem key={item.value + index} value={item.value}>
                            {item.label}
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
};

TaskSelectField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        }).isRequired,
    ),
};

export default TaskSelectField;
