import { TaskStatusType } from '../../taskCounter/interfaces/ITaskCounter';
import { ITaskDetails } from '../interfaces/ITaskDetails';

export const countTasks = (
    tasks: Array<ITaskDetails>,
    status: TaskStatusType,
) => {
    if (!Array.isArray(tasks)) {
        return 0;
    }

    const filteredTasks = tasks.filter((task) => task.status === status);
    return filteredTasks.length;
};
