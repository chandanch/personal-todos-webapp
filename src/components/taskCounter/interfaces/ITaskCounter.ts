import { Status } from '../../../enums/status';

export type TaskStatusType = Status.todo | Status.inProgress | Status.completed;

export interface ITaskCounter {
    count: number;
    status: TaskStatusType;
}
