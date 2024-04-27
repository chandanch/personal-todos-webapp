import React, { FC, ReactElement } from 'react';
import Profile from '../profile/profile';

const SideBar: FC = (): ReactElement => {
    return (
        <div>
            <Profile name="Mario" />
        </div>
    );
};

export default SideBar;
