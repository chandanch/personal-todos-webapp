import { Priority } from '../../../enums/priority';

export interface ITaskDetails {
    title: string;
    description: string;
    duedate: string;
    id: string;
    priority: `${Priority}`;
}
