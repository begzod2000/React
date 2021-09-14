import  axios from 'axios'

export const MODAL_TRUE    =   'MODAL_TRUE';
export const MODAL_FALSE  =   'MODAL_FALSE';


export const modalTrue = ()=>{
    return {
        type: MODAL_TRUE
    }
};

export const modalFalse = ()=>{
    return {
        type: MODAL_FALSE
    }
};