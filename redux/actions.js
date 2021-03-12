import * as actions from '../js/constants';


export function selectView(view) {
    return {
        type: actions.NAVIGATION_CLICK,
        payload: {
            view: view
        }
    };
}