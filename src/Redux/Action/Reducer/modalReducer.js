

export const MODAL_TRUE    =   'MODAL_TRUE';
export const MODAL_FALSE  =   'MODAL_FALSE';


const initialState = {
    visible:false
};

const modalReducer = (state= initialState, action)=>{
    switch (action.type) {
        case MODAL_TRUE:
            return{
                visible: true
            };
        case MODAL_FALSE:
            return {
                visible: false
            };
        default:
            return state
    }

};
export default modalReducer