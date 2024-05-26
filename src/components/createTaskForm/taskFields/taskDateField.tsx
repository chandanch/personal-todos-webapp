import React, { FC, ReactElement } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { IDateField } from '../interfaces/IDateField';
import PropTypes from 'prop-types';

const TaskDateField: FC<IDateField> = (props): ReactElement => {
    const { value = new Date(), disabled = false, onChange = () => {} } = props;

    return (
        <>
            {/* LocalizationProvider is a context provider component from the MUI (Material-UI) 
                X Date Pickers library. 
                It is used to provide a localization context for the date pickers in the application. 
                
                This allows the date pickers to be formatted and displayed according to the 
                specified locale and date management library
            */}
            {/* AdapterDateFns is an adapter for the date-fns library, which is a popular date utility library for JavaScript.
                
                It provides the necessary methods and functionalities required by the MUI 
                date pickers to handle dates. 
                
                This includes parsing, formatting, and date calculations
                AdapterDateFns is passed as a prop to the LocalizationProvider, 
                which then uses it to handle all date-related operations within the date picker.

            */}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                {/* DesktopDatePicker is a component from the MUI X Date Pickers library that provides a date picker 
                    interface optimized for desktop environment
                */}

                <DesktopDatePicker
                    label="Due Date"
                    format="dd/MM/yyyy"
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                />

                {/*
                    The LocalizationProvider wraps the DesktopDatePicker component, providing it with the 
                    AdapterDateFns as the date adapter.
                    
                    AdapterDateFns handles all date-related operations within the DesktopDatePicker, 
                    ensuring that dates are correctly parsed, formatted, and manipulated according to the locale.
                    
                    DesktopDatePicker uses the context from LocalizationProvider to display 
                    the date picker with the correct localization settings. 
                
                */}
            </LocalizationProvider>
        </>
    );
};

TaskDateField.propTypes = {
    disabled: PropTypes.bool,
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
};

export default TaskDateField;
