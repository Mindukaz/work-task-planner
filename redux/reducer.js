import * as actions from '../js/constants';
import initState from '../js/state'
import { createTask } from '../js/state'



export default function reducer(state = initState(), action) {
    
    switch (action.type){

        // App navigation state

        case actions.NAVIGATION_CLICK:
            return {
                ...state,
                view : action.payload.view
            }

        // Task management

        case actions.ADD_TASK:
            var task = createTask(action.payload.name, action.payload.interval, null, null)
            var taskL = state.config.allTasks
            taskL.push(task)
            console.log(taskL)
            return {
                ...state,
                allTasks: taskL
            }
        
        default:
            return state;
    }
}