import axios from "axios";
import { GET_ERRORS } from "./actionTypes";
import { GET_PROJECT_TASKS } from "./actionTypes";
import { DELETE_PROJECT_TASK } from "./actionTypes";
import { GET_PROJECT_TASK } from "./actionTypes";

export const addProjectTask = (project_task, navigate) => {
    return async (dispatch) => {
        try {
            await axios.post("http://localhost:8080/api/board", project_task);
            navigate("/");
            dispatch(errorFunc({}))
        } catch (error) {
            dispatch(errorFunc(error.response.data))

        }


    }
}
export const errorFunc = (error) => {
    return {
        type: GET_ERRORS,
        payload: error
    }

}

export const getProjectTasks = () => {
    return async (dispatch) => {
        const projectTasks = await axios.get("http://localhost:8080/api/board/all");
        dispatch({ type: GET_PROJECT_TASKS, payload: projectTasks.data });
    }
}

export const deleteProjectTask = (ptId) => {
    return async (dispatch) => {
        if (window.confirm(`Are you sure you want to delete the project task?`)) {
            await axios.delete(`http://localhost:8080/api/board/${ptId}`);
            dispatch({
                type: DELETE_PROJECT_TASK,
                payload: ptId
            })
        }

    }
}

export const getProjectTask = (ptId, navigate) => {
    return async (dispatch) => {
        try {
            const projectTask = await axios.get(`http://localhost:8080/api/board/${ptId}`);
            dispatch({
                type: GET_PROJECT_TASK,
                payload: projectTask.data
            })
        } catch (error) {
            navigate("/");
        }

    }
}