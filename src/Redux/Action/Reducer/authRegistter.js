import {BEGIN_REGISTER, ERROR_REGISTER, SUCCESS_REGISTER} from "../authRegister";
import {
    USERS_POST_EDIT_START,
    USERS_POST_EDIT_SUCCESS,
    USERS_POST_EDIT_ERROR
} from "../usersAction";


const initialState = {
    loading: false,
    success: {},
    data: [],
    error: false,

};
const authRegistter = (state = initialState, action) => {
    switch (action.type) {
        case BEGIN_REGISTER:
            return {
                ...state,
                loading: true,
                error: false,
                success: {},
                data: [],
            };

        case SUCCESS_REGISTER:
            return {
                ...state,
                loading: false,
                data: action.payload,
                success: action.payload.message

            };
        case ERROR_REGISTER:
            return {
                ...state,
                loading: false,
                error: true,

            };
        case USERS_POST_EDIT_START:
            return {
                ...state,
                loading: true,
                error: false,
                success: {},
                data: [],
            };
        case USERS_POST_EDIT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                success: action.payload.message
            };
        case USERS_POST_EDIT_ERROR:
            return {
                ...state,
                loading: false,
                error: true,

            };
        default:
            return state


    }
};
export default authRegistter