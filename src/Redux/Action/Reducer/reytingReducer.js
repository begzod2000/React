import {
    USERS_GETS_START,
    USERS_GETS_SUCCESS,
    USERS_GETS_ERROR,
    USERS_POSTS_EDIT_START,
    USERS_POSTS_EDIT_SUCCESS,
    USERS_POSTS_EDIT_ERROR,
} from './reytingAction'


const initialState = {
    loading: false,
    success: {},
    data: [],
    error: false,

};
const reytingReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_GETS_START:
            return {
                ...state,
                loading: true,
                error: false,
                success: {},
                data: [],
            };

        case USERS_GETS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data,
                // success: action.payload.message

            };
        case USERS_GETS_ERROR:
            return {
                ...state,
                loading: false,
                error: true,

            };
        case USERS_POSTS_EDIT_START:
            return {
                ...state,
                loading: true,
                error: false,
                success: {},
                data: [],
            };
        case USERS_POSTS_EDIT_SUCCESS:
            return {
                ...state,
                loading: false,
                // data: action.payload,
                success: action.payload.    message
            };
        case USERS_POSTS_EDIT_ERROR:
            return {
                ...state,
                loading: false,
                error: true,

            };
        default:
            return state


    }
};
export default reytingReducer