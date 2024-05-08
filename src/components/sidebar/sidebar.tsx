import React, { FC, ReactElement } from 'react';
import Profile from '../profile/profile';
import CreateTaskForm from '../createTaskForm/createTaskForm';

const SideBar: FC = (): ReactElement => {
    return (
        <>
            <Profile name="Mario" />
            <CreateTaskForm />
        </>
    );
};

export default SideBar;
