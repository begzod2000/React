import axios from 'axios'


export const USERS_GET_START = 'USERS_GET_START';
export const USERS_GET_SUCCESS = 'USERS_GET_SUCCESS';
export const USERS_GET_ERROR = 'USERS_GET_ERROR';

export const USERS_POST_EDIT_START = 'USERS_POST_EDIT_START';
export const USERS_POST_EDIT_SUCCESS = 'USERS_POST_EDIT_SUCCESS';
export const USERS_POST_EDIT_ERROR = 'USERS_POST_EDIT_ERROR';

export const USERS_POST_DELETE_START = 'USERS_POST_DELETE_START';
export const USERS_POST_DELETE_SUCCESS = 'USERS_POST_DELETE_SUCCESS';
export const USERS_POST_DELETE_ERROR = 'USERS_POST_DELETE_ERROR';

export const getUser = () => async dispatch => {
    // debugger
    dispatch({type: USERS_GET_START});
    try {
        const productList = await axios.get('http://localhost:8070/api/profile/list', {
            headers: {"Authorization": localStorage.getItem("setAppToken")}
        });
        if (productList.status === 200 && productList.data.message.code === 0) {
            dispatch({type: USERS_GET_SUCCESS, payload: productList.data})
        }
        console.log(productList, 'users');

    } catch (e) {
        dispatch({type: USERS_GET_ERROR, payload: e.message});
    }
};

export const editUser = (id, val) => async dispatch => {
    // debugger
    dispatch({type: USERS_POST_EDIT_START});
    try {
        const userEdit = await axios.post('http://localhost:8070/api/auth/update/'+id, val,  {
            headers: {"Authorization": localStorage.getItem("setAppToken")}
        });
        if (userEdit.status === 200 && userEdit.data.message.code === 0) {
            dispatch({type: USERS_POST_EDIT_SUCCESS, payload: userEdit.data})
        }
        console.log(userEdit, 'usersEdit');

    } catch (e) {
        dispatch({type: USERS_POST_EDIT_ERROR, payload: e.message});
    }
};

export const deleteUser = (id) => async dispatch => {
    // debugger
    dispatch({type: USERS_POST_DELETE_START});
    try {
        const userEdit = await axios.get('http://localhost:8070/api/auth/delete/'+id,  {
            headers: {"Authorization": localStorage.getItem("setAppToken")}
        });
        if (userEdit.status === 200 && userEdit.data.message.code === 0) {
            dispatch({type: USERS_POST_DELETE_SUCCESS, payload: userEdit.data})
        }
        dispatch({type: USERS_GET_START});
        try {
            const productList = await axios.get('http://localhost:8070/api/profile/list', {
                headers: {"Authorization": localStorage.getItem("setAppToken")}
            });
            if (productList.status === 200 && productList.data.message.code === 0) {
                dispatch({type: USERS_GET_SUCCESS, payload: productList.data})
            }
            console.log(productList, 'users');

        } catch (e) {
            dispatch({type: USERS_GET_ERROR, payload: e.message});
        }
        console.log(userEdit, 'usersEdit');

    } catch (e) {
        dispatch({type: USERS_POST_DELETE_ERROR, payload: e.message});
    }
};

