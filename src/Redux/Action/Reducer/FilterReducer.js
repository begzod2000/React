import axios from "axios";
import {USERS_GETS_START, USERS_POSTS_EDIT_ERROR, USERS_POSTS_EDIT_SUCCESS} from "./reytingAction";

export const FILTER_GET_START = 'FILTER_GET_START';
export const FILTER_GET_SUCCES = 'FILTER_GET_SUCCES';
export const FILTER_GET_ERROR = 'FILTER_GET-START'


export const getCardReyting = (val) => async dispatch => {
    dispatch({type: FILTER_GET_START});
    try {
        let Filter;
        Filter = await axios.post('localhost:8070/api/ballXodim/filter', val, {
            headers: {"Authorization": localStorage.getItem("setAppToken")}
        });
        if (Filter.status === 200 && Filter.data.message.code === 0) {
            dispatch({type: FILTER_GET_SUCCES, payload: Filter.data})
        }
        console.log(Filter, 'Filter');

    } catch (e) {
        dispatch({type: FILTER_GET_ERROR, payload: e.message});
    }
};