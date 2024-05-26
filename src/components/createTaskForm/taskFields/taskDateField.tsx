import React, { FC, ReactElement, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers';

const TaskDateField: FC = (): ReactElement => {
    const [dueDate, setDueDate] = useState<Date | null>(null);

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    label="Due Date"
                    format="dd/MM/yyyy"
                    value={dueDate}
                    onChange={(newValue) => setDueDate(newValue)}
                />
            </LocalizationProvider>
        </>
    );
};

export default TaskDateField;
