import React from 'react';

export interface ITaskFooter {
    onStatusToggle: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onmarkComplete: (
        event:
            | React.MouseEvent<HTMLButtonElement>
            | React.MouseEvent<HTMLAnchorElement>,
    ) => void;
}
