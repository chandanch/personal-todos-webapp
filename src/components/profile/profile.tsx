import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

const Profile: FC = (): ReactElement => {
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
                    CH
                </Typography>
            </Avatar>
            <Typography variant="h6" color="text.primary">
                Welcome Chandio!
            </Typography>
            <Typography variant="body1" color="text.primary">
                Personal Todo Manager, Login Time: {date.getHours()}:
                {date.getMinutes()} {date.getSeconds()}
            </Typography>
        </Box>
    );
};

export default Profile;
