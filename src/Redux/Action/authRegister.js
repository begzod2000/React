import  axios from 'axios'



export const BEGIN_REGISTER    =   'BEGIN_REGISTER';
export const SUCCESS_REGISTER  =   'SUCCESS_REGISTER';
export const ERROR_REGISTER    =   'ERROR_REGISTER';


export const getRegistter = (val) => async dispatch =>{

    dispatch ({type: BEGIN_REGISTER});
    try {
        const res =await axios.post( "http://localhost:8070/api/auth/create",val);
        if (res.status === 200 && res.data.message.code === 0){

            dispatch ({type:SUCCESS_REGISTER,payload: res.data})
        }
    }catch (e) {
        dispatch ({type:ERROR_REGISTER,payload: e.massage});
        console.log(e.massage,"kirishda xatolik ketti")


    }
};
