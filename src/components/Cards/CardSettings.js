import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getRegistter} from "../../Redux/Action/authRegister";
import authRegistter from "../../Redux/Action/Reducer/authRegistter";
import {editUser} from "../../Redux/Action/usersAction";


// components

export default function CardSettings() {

    const dispatch = useDispatch();

    const [id, setId] = useState(0);
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [firstname, setFirstname] = useState('');
    const [getUserList, setGetUserList] = useState('');
    const [lastName, setLastname] = useState('');
    const [role_user, setROLE_USER] = useState('ROLE_ADMIN');
    const [filal, setFilal] = useState('Bosh ofis');

    const success = useSelector(state => state.authRegistter.success);
    const error = useSelector(state => state.authRegistter.error);
    console.log(success);

    useEffect(() => {

        if (success.code === 0) {
            setPassword('');
            setUsername('');
            setEmail('');
            setPhone('');
            setFirstname('');
            setGetUserList('');
            setLastname('');
            setROLE_USER('');
            setFilal('');
            localStorage.removeItem("SetAppEditUser");
            alert('Success')
        }
    }, [success]);

    useEffect(() => {
        if (error) {
            alert('Error')
        }
    }, [error]);


    const SetApp = (e) => {
        e.preventDefault();
        let val = {
            username: username,
            email: email,
            firstName: firstname,
            lastName: lastName,
            phone: phone,
            roles: role_user,
            password: password,
        };
        if (id > 0) {
            dispatch(editUser(id, val))
        } else {
            dispatch(getRegistter(val))
        }
    };

    useEffect(() => {
        if (localStorage.getItem("SetAppEditUser")) {
            let data = JSON.parse(localStorage.getItem("SetAppEditUser"));
            setId(data.id);
            setPassword('');
            setUsername(data.username);
            setEmail(data.email);
            setPhone(data.phone);
            setFirstname(data.first_name);
            setGetUserList('');
            setLastname(data.last_name);
            setROLE_USER(data.role_name);
            setFilal('Bosh ofis');
        }
    }, []);

    return (
        <>
            <form onSubmit={SetApp}>
                <div
                    className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
                            <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="submit"
                            >
                                CREATE
                            </button>
                        </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            User Information
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue=""
                                        required value={username} onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue=""
                                        required value={password} onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue=""
                                        required value={email} onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        type=""
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue=""
                                        required value={phone} onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue=""
                                        required value={firstname} onChange={(e) => setFirstname(e.target.value)}
                                    />
                                </div>
                            </div>


                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue=""
                                        required value={lastName} onChange={(e) => setLastname(e.target.value)}
                                    />
                                </div>
                            </div>


                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Foydalanuvchi turi


                                    </label>
                                    <select
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        name="cars" id="cars"
                                        required value={role_user} onChange={(e) => setROLE_USER(e.target.value)}>
                                        <option value="ROLE_ADMIN">ADMIN</option>
                                        <option value="ROLE_MODERATOR">MODERATOR</option>
                                        <option value="ROLE_USER">USER</option>

                                    </select>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Filal


                                    </label>
                                    <select
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        name="cars" id="cars"
                                        required value={filal} onChange={(e) => setFilal(e.target.value)}>
                                        <option value="Bosh ofis">Bosh ofis</option>
                                        <option value="Toshkent shahar">Toshkent shahar</option>
                                        <option value="Xorazm viloyati">Xorazm viloyati</option>
                                        <option value="Buxora viloyati">Buxora viloyati</option>
                                    </select>
                                </div>
                            </div>


                        </div>


                    </div>
                </div>
            </form>
        </>
    );
}
