import * as actions from '../js/constants';
import initState from '../js/init_state'



export default function reducer(state = initState(), action) {
    
    switch (action.type){

        // App navigation state

        case actions.NAVIGATION_CLICK:
            return {view : action.payload.view}
        
        default:
            return state;
    }
}