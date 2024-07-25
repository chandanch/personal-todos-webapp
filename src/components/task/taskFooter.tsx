import { Box, Button, FormControlLabel, Switch } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITaskFooter } from './interfaces/ITaskFooter';

import PropTypes from 'prop-types';
import { Status } from '../../enums/status';

const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
    const {
        onStatusToggle = (e) => console.log(e.target.value),
        onmarkComplete = (e) => console.log(e),
        id,
        status,
    } = props;

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={4}
        >
            <FormControlLabel
                control={
                    <Switch
                        onChange={(e) => onStatusToggle(e, id)}
                        color="warning"
                        checked={status === Status.inProgress}
                    />
                }
                label="In Progress"
            />
            <Button
                variant="contained"
                color="success"
                size="small"
                sx={{ color: '#ffffff' }}
                onClick={(e) => onmarkComplete(e)}
            >
                Mark as Done
            </Button>
        </Box>
    );
};

TaskFooter.propTypes = {
    onmarkComplete: PropTypes.func.isRequired,
    onStatusToggle: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
};

export default TaskFooter;
