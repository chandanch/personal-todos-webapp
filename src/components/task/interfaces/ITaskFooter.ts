import React from 'react';

export interface ITaskFooter {
    onStatusToggle?: (
        event: React.ChangeEvent<HTMLInputElement>,
        id: string,
    ) => void;
    onmarkComplete?: (
        event:
            | React.MouseEvent<HTMLButtonElement>
            | React.MouseEvent<HTMLAnchorElement>,
        id: string,
    ) => void;
    id: string;
    status: string;
}
