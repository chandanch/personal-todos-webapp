import React, { FC, ReactElement } from 'react';
import Profile from '../profile/profile';
import CreateTaskForm from '../createTaskForm/createTaskForm';

const SideBar: FC = (): ReactElement => {
    return (
        <div>
            <Profile name="Mario" />
            <CreateTaskForm />
        </div>
    );
};

export default SideBar;
