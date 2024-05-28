import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ISelectField } from '../interfaces/ISelectField';

const TaskSelectField: FC<ISelectField> = (props): ReactElement => {
    const {
        label = 'Select Box',
        value = '',
        name = 'selectBox',
        disabled = false,
        onChange = (e) => {},
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

export default TaskSelectField;
