import { GET_PROJECT_TASK, GET_PROJECT_TASKS } from "../actions/actionTypes";
import { DELETE_PROJECT_TASK } from "../actions/actionTypes";

const initialState={
    project_tasks:[],
    project_task:{}
}

export default function projectTaskReducer(state=initialState,action){
    switch (action.type) {
        case GET_PROJECT_TASKS:
            return {...state,
                    project_tasks:action.payload};        
        case DELETE_PROJECT_TASK:
            return {...state,
                    project_tasks:state.project_tasks.filter(pt=>pt.id!==action.payload)};
        case GET_PROJECT_TASK:
            return {...state,
                    project_task:action.payload};
        default:
            return state;
    }
}