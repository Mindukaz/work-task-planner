// this file will have a fcuntion for setting up the app state on app startup every time.

import * as actions from './constants';


export default function initState() {
    return {
        view: actions.TASK_VIEW
    }
}