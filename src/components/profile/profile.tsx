import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const Profile: FC = (props: any): ReactElement => {
    const { name = 'Chandio' } = props;

    const date: Date = new Date();

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Avatar
                sx={{
                    width: '96px',
                    height: '96px',
                    backgroundColor: 'primary.main',
                    marginBottom: '16px',
                }}
            >
                <Typography variant="h4" color="text.primary">
                    {name.substring(0, 2)}
                </Typography>
            </Avatar>
            <Typography variant="h6" color="text.primary">
                Welcome {name}!
            </Typography>
            <Typography variant="body1" color="text.primary">
                Personal Todo Manager, Login Time: {date.getHours()}:
                {date.getMinutes()} {date.getSeconds()}
            </Typography>
        </Box>
    );
};

Profile.propTypes = {
    name: PropTypes.string,
};

export default Profile;
