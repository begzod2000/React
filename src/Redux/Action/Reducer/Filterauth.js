import {
    FILTER_GET_ERROR,
    FILTER_GET_START,
    FILTER_GET_SUCCES
} from "./FilterReducer";


const initialState = {
    loading: false,
    success: {},
    data: [],
    error: false,
};

const FilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_GET_START:
            return{
                ...state,
                loading: true,
                error: false,
                success: false,
                data: {},
            };
        case FILTER_GET_SUCCES:
            return{
                ...state,
                loading: false,
                data: action.payload.data,
            };
        case FILTER_GET_ERROR:
            return {
                ...state,
                loading: false,
                success: action.payload.message
            }
        default:
            return state
    }
    }
    export default FilterReducer