import { Priority } from '../../../enums/priority';
import { Status } from '../../../enums/status';

export interface ICreateTask {
    title: string;
    description: string;
    duedate: string;
    priority: string;
    status: string;
}

// usage of interface
const myTask: ICreateTask = {
    title: 'dd',
    description: 'dsdsd',
    duedate: new Date().toISOString(),
    priority: Priority.low,
    status: Status.completed,
};

type MyRatings = {
    rating: number;
    group: number;
};

const raters: MyRatings = {
    rating: 23,
    group: 2,
};
