import { createContext, FC, PropsWithChildren, useState } from 'react';

export const TaskStatusChangeContext = createContext({
    isUpdated: false,
    toggleStatus: () => {},
});

export const TaskStatusChangeContextProvider: FC<PropsWithChildren> = (
    props,
) => {
    const [isTaskUpdate, setTaskUpdate] = useState(false);

    const toggleHandler = () => {
        isTaskUpdate ? setTaskUpdate(false) : setTaskUpdate(true);
    };

    return (
        <TaskStatusChangeContext.Provider
            value={{
                isUpdated: isTaskUpdate,
                toggleStatus: toggleHandler,
            }}
        >
            {props.children}
        </TaskStatusChangeContext.Provider>
    );
};
