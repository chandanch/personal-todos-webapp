import { ITaskBody } from './ITaskBody';
import { ITaskFooter } from './ITaskFooter';
import { ITaskHeader } from './ITaskHeader';

export interface ITask extends ITaskHeader, ITaskBody, ITaskFooter {
    priority?: string;
}
