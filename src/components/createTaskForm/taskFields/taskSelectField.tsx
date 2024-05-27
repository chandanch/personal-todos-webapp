import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { FC, ReactElement } from 'react';

const TaskSelectField: FC = (): ReactElement => {
    return (
        <FormControl fullWidth size="small">
            <InputLabel>Status</InputLabel>
            <Select
                labelId="status"
                id="status-select"
                value=""
                label="Status"
                name="status"
            >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
            </Select>
        </FormControl>
    );
};

export default TaskSelectField;
