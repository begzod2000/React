import {
    BEGIN_LOGIN,
    SUCCESS_LOGIN,
    ERROR_LOGIN,

} from "../authAction";

const initialState = {
    loading: false,
    status:{},
    error: false,

};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case BEGIN_LOGIN:
            return {
                ...state,
                loading: true,
                error: false,
                status: {},
            };

        case SUCCESS_LOGIN:
            return {
                ...state,
                loading: false,
                status: action.payload.message,

            };
        case ERROR_LOGIN:
            return {
                ...state,
                loading: false,
                error: true,

            };
        default:
            return state


    }
};
export default authReducer