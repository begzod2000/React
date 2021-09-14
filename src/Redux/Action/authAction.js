import  axios from 'axios'


export const BEGIN_LOGIN    =   'BEGIN_LOGIN';
export const SUCCESS_LOGIN  =   'SUCCESS_LOGIN';
export const ERROR_LOGIN    =   'ERROR_LOGIN';


export const getLogin = (val) => async dispatch =>{
    dispatch ({type: BEGIN_LOGIN});
    try {
        const res =await axios.post( "http://localhost:8070/api/auth/login",val);
        if (res.status === 200 && res.data.message.code === 0){
            localStorage.setItem('setAppToken',res.data.data.tokenType+""+res.data.data.accessToken);
            dispatch ({type:SUCCESS_LOGIN, payload: res.data})
        }
    }catch (e) {
        dispatch ({type:ERROR_LOGIN,payload: e.massage});
        console.log(e.massage,"kirishda xatolik ketti")


    }
};
