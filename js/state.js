// this file will have a fcuntion for setting up the app state on app startup every time.

import * as actions from './constants';


export default function initState() {
    return {
        view: actions.TASK_VIEW,

        tasks: {
            standalone: ["hoses"],

            daily: ["dustpans", "oil bycket"],

            weekly: ["freezer"],
            
            custom: ["bobobo"],
        },

        finishedTasks: {
            monday: ["hello"],
            tuesday: ["bogo sort"],
            wednesday: ["sicko moe"],
            thursday: [],
            friday: ["caviar"],
            saturday: ["trebushe"],
            sunday: []
        },
    }
}


// currently not being used, when task are used as objects, then.

export function createTask(name, interval, nextOccurence, lastDone) {
    return {
        name: name,
        interval: interval,
        lastDone: lastDone,
        nextOccurence: nextOccurence
    }
}