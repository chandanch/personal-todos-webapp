import { Priority } from '../../../enums/priority';
import { Status } from '../../../enums/status';

export interface ITaskDetails {
    title: string;
    description: string;
    duedate: string;
    id: string;
    priority: `${Priority}`;
    status: `${Status}`;
}
