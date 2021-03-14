import * as actions from '../js/constants';


export function selectView(view) {
    return {
        type: actions.NAVIGATION_CLICK,
        payload: {
            view: view
        }
    };
}


// WHAT AM I DOIN WITH THIS LOCATION????
// IM CONFUSING MYSELF


export function finishTask(finishedTask, location) {
    return {
        type: actions.FINISH_TASK_CLICK,
        payload: {
            task: finishedTask,
            list: location
        }
    }
}   

export function unfinishTask(unfinishedTask, location) {
    return {
        type: actions.UN_FINISH_TASK_CLICK,
        payload: {
            task: unfinishedTask,
            list: location
        }
    }
}   