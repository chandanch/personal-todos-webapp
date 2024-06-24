import { Priority } from '../../../enums/priority';

const emitPriorityBorderColor = (priority: string) => {
    switch (priority) {
        case Priority.low:
            return 'green.900';
        case Priority.normal:
            return 'warning.light';
        case Priority.high:
            return 'error.light';
    }
};

export default emitPriorityBorderColor;
