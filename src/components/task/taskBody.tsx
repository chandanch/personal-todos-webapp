import React, { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import { ITaskBody } from './interfaces/ITaskBody';

const TaskBody: FC<ITaskBody> = (props): ReactElement => {
    const { description = '' } = props;

    return (
        <Box>
            <Typography>{description}</Typography>
        </Box>
    );
};

TaskBody.propTypes = {
    description: PropTypes.string,
};

export default TaskBody;
