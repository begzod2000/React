import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {deleteUser, getUser} from "../../Redux/Action/usersAction";
import usersReducer from "../../Redux/Action/Reducer/usersReducer";
import {toEditorSettings} from "typescript/lib/tsserverlibrary";


const Users = () => {

    const dispatch = useDispatch();
    const history  = useHistory();

    const data = useSelector(state => state.usersReducer.data);
    console.log(data);
    useEffect(() => {
        // debugger
        localStorage.removeItem("SetAppEditUser");
        dispatch(getUser())
    },[]);

    const editButton = (data) => {
          localStorage.setItem("SetAppEditUser", JSON.stringify(data));
      history.push("/admin/settings")
    };

    const toEditorSettings = () => {
        history.push("/admin/settings")
    };

    return (
        <div>
            <div>
                <h1>Users</h1>
                <table>
                    <thead>
                    <tr className="table100-head">

                        <th className="">Username</th>
                        <th className="">Last_Name</th>
                        <th className="">First_Name</th>
                        <th className="">Phone</th>
                        <th className="">Email</th>
                        <th className="">Action</th>

                    </tr>
                    </thead>
                    <tbody>
                    {data.map(i=>
                        <tr>
                            <td>{i.username}</td>
                            <td>{i.last_name}</td>
                            <td>{i.first_name}</td>
                            <td>{i.phone}</td>
                            <td>{i.email}</td>
                            <button
                                className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={()=>dispatch(deleteUser(i.id))}
                            >
                                Delete
                            </button>
                            <button
                                className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={()=>editButton(i)}
                            >
                                Edit
                            </button>
                            <button
                                className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={toEditorSettings}
                            >
                                Create
                            </button>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;