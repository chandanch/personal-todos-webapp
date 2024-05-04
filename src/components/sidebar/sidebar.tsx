import React, { FC, ReactElement } from 'react';
import Profile from '../profile/profile';
import CreateTask from '../createTask/createTask';

const SideBar: FC = (): ReactElement => {
    return (
        <div>
            <Profile name="Mario" />
            <CreateTask />
        </div>
    );
};

export default SideBar;
