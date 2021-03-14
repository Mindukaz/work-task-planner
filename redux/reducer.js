import * as actions from '../js/constants';
import initState from '../js/state'



export default function reducer(state = initState(), action) {
    
    switch (action.type){

        // App navigation state

        case actions.NAVIGATION_CLICK:
            return {
                ...state,
                view : action.payload.view
            }

        // Task management

        case actions.FINISH_TASK_CLICK:
            return {
                ...state,

            }
        
        default:
            return state;
    }
}