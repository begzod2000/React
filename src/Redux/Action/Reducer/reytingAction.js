import axios from 'axios'


export const USERS_GETS_START = 'USERS_GETS_STARTS';
export const USERS_GETS_SUCCESS = 'USERS_GETS_SUCCESS';
export const USERS_GETS_ERROR = 'USERS_GETS_ERROR';

export const USERS_POSTS_EDIT_START = 'USERS_POSTS_EDIT_START';
export const USERS_POSTS_EDIT_SUCCESS = 'USERS_POSTS_EDIT_SUCCESS';
export const USERS_POSTS_EDIT_ERROR = 'USERS_POSTS_EDIT_ERROR';

export const USERS_POSTS_DELETE_START = 'USERS_POSTS_DELETE_START';
export const USERS_POST_DELETE_SUCCESS = 'USERS_POSTS_DELETE_SUCCESS';
export const USERS_POSTS_DELETE_ERROR = 'USERS_POSTS_DELETE_ERROR';

export const getReyting = () => async dispatch => {
    // debugger
    dispatch({type: USERS_GETS_START});
    try {
        const productList = await axios.get('http://localhost:8070/api/reyting/list', {
            headers: {"Authorization": localStorage.getItem("setAppToken")}
        });
        if (productList.status === 200 && productList.data.message.code === 0) {
            dispatch({type: USERS_GETS_SUCCESS, payload: productList.data})
        }
        console.log(productList, 'users');

    } catch (e) {
        dispatch({type: USERS_GETS_ERROR, payload: e.message});
    }
};

export const editReyting = (id, val) => async dispatch => {
    // debugger
    dispatch({type: USERS_POSTS_EDIT_START});
    try {
        let userEdit;
        if (id > 0){
            userEdit = await axios.post('http://localhost:8070/api/reyting/update/ '+id, val,  {
                headers: {"Authorization": localStorage.getItem("setAppToken")}
            });
        }else{
            userEdit = await axios.post('http://localhost:8070/api/reyting/create', val,  {
                headers: {"Authorization": localStorage.getItem("setAppToken")}
            });
        }
        if (userEdit.status === 200 && userEdit.data.message.code === 0) {
            dispatch({type: USERS_POSTS_EDIT_SUCCESS, payload: userEdit.data})
        }
        console.log(userEdit, 'usersEdit');

    } catch (e) {
        dispatch({type: USERS_POSTS_EDIT_ERROR, payload: e.message});
    }
};

export const deleteReyting = (id) => async dispatch => {
    // debugger
    dispatch({type: USERS_POSTS_DELETE_START});
    try {
        const userEdit = await axios.get('http://localhost:8070/api/reyting/delete/'+id,  {
            headers: {"Authorization": localStorage.getItem("setAppToken")}
        });
        if (userEdit.status === 200 && userEdit.data.message.code === 0) {
            dispatch({type: USERS_POST_DELETE_SUCCESS, payload: userEdit.data})
        }
        dispatch({type: USERS_GETS_START});
        try {
            const productList = await axios.get('http://localhost:8070/api/reyting/list', {
                headers: {"Authorization": localStorage.getItem("setAppToken")}
            });
            if (productList.status === 200 && productList.data.message.code === 0) {
                dispatch({type: USERS_GETS_SUCCESS, payload: productList.data})
            }
            console.log(productList, 'users');

        } catch (e) {
            dispatch({type: USERS_GETS_ERROR, payload: e.message});
        }
        console.log(userEdit, 'usersEdit');

    } catch (e) {
        dispatch({type: USERS_POSTS_DELETE_ERROR, payload: e.message});
    }
};

