import {
    USERS_GET_ERROR,
    USERS_GET_START,
    USERS_GET_SUCCESS,
} from "../usersAction";


const initialState = {
    loading: false,
    isError: false,
    status: {},
    data: [],
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_GET_START:
            return {
                ...state,
                loading: true,
                status: {},
                data: []
            };
        case USERS_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                status: action.payload.message,
                data: action.payload.data
            };
        case USERS_GET_ERROR:
            return {
                ...state,
                loading: false,
                isError: true,
                status: action.payload
            };
        default:
            return state
    }
};

export default usersReducer