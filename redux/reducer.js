import * as actions from '../js/constants';



// for now state = [] is the initial state, but later this will be something
// along the line of state = function_that_reads_state_from_file();

export default function reducer(state = {view: actions.TASK_VIEW}, action) {
    switch (action.type){

        // App navigation state

        case actions.NAVIGATION_CLICK:
            return {view : action.payload.view}
        
        default:
            return state;
    }
}