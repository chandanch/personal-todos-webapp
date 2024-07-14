import { Priority } from '../../../enums/priority';
import { Status } from '../../../enums/status';

export interface ICreateTask {
    title: string;
    description: string;
    dueDate: Date;
    priority: Priority.high | Priority.normal | Priority.low;
    status: Status.todo | Status.inProgress | Status.completed;
}

// usage of interface
const myTask: ICreateTask = {
    title: 'dd',
    description: 'dsdsd',
    dueDate: new Date(),
    priority: Priority.low,
    status: Status.completed,
};
