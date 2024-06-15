import { Status } from '../../../enums/status';
import { TaskStatusType } from '../interfaces/ITaskCounter';

const emitBorderColor = (status: TaskStatusType) => {
    switch (status) {
        case Status.todo:
            return 'secondary.light';
        case Status.inProgress:
            return 'warning.light';
        case Status.completed:
            return 'primary.light';
    }
};

export default emitBorderColor;
