import * as actions from './constants';


export default function initState() {
    return {
        view: actions.TASK_VIEW,

        tasks: {
            standalone: [],
            daily: [],
            weekly: [],
            custom: [],
        },

        finishedTasks: {
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [],
            sunday: []
        },

        config: {
            allTasks: []
        }
    }
}



export function createTask(name, interval, nextOccurence, lastDone) {
    return {
        name: name,
        interval: interval,
        lastDone: lastDone,
        nextOccurence: nextOccurence, 
        //  last done and nextoccurence only matters for tasks with
        // montly or higher intervals
    }
}