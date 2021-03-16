import * as actions from '../js/constants';


export function selectView(view) {
    return {
        type: actions.NAVIGATION_CLICK,
        payload: {
            view: view
        }
    };
}


export function finishTask(finishedTask, location) {
    console.log("finishedTask")
    return {
        type: actions.FINISH_TASK_CLICK,
        payload: {
            task: finishedTask,
            location: location
        }
    }
}   

export function unfinishTask(unfinishedTask, location) {
    console.log("unnnnnfinishedTask")
    return {
        type: actions.UN_FINISH_TASK_CLICK,
        payload: {
            task: unfinishedTask,
            location: location
        }
    }
}   

/// currently not being used
export function editTask(name, location) {
    console.log(location)
    return {
        type: actions.EDIT_TASK,
        payload: {
            task: name,
            location: location
        }
    }
}

export function addTask(name, interval){
    return {
        type: actions.ADD_TASK,
        payload: {
            name: name,
            interval: interval
        }
    }
}

