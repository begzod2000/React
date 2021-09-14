import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom"
import {editReyting, getReyting} from "../../Redux/Action/Reducer/reytingAction";
import {data} from "autoprefixer";
import {getCardReyting} from "../../Redux/Action/Reducer/FilterReducer";


function CardReyting() {
    const dispatch = useDispatch();
    const hisytory = useHistory();


    const [id, setId] = useState(0);
    const [username, setUsername] = useState('');
    const [ball1, setBall1] = useState('');
    const [ball2, setBall2] = useState('');
    const [ball3, setBall3] = useState('');
    const [ball4, setBall4] = useState('');
    const [ball5, setBall5] = useState('');
    const [ball6, setBall6] = useState('');
    const [ball7, setBall7] = useState('');
    const [ball8, setBall8] = useState('');
    const [ball9, setBall9] = useState('');
    const [ball10, setBall10] = useState('');
    const [company, setCompany] = useState(0);
    const [date, setDate] = useState('');
    // const [Xodimlar, setXodimlar] = useState("");
    // const [Sugurta, setSugurta] = useState("");
    // const [Axborat, setAxborat] = useState("");
    // const [Davo, setDavo] = useState("");
    // const [Bugalterya, setBugalterya] = useState("");
    // const [Hududiy, setHududiy] = useState("");
    // const [Sifat, setSifat] = useState("");
    // const [Majburiy, setMajburiy] = useState("");
    // const [Malkaliy, setMalakaliy] = useState("")


    const success = useSelector(state => state.reytingReducer.success);
    const error = useSelector(state => state.reytingReducer.error);
    console.log(success);

    const filterCompany = (e) => {
        e.preventDefault();
        let val = {xodimId: company, orderDate_ot: date};
        console.log(val, 'conmany')
        dispatch(getCardReyting(val))
    };

    console.log(company);
    console.log(date);
    useEffect(() => {

        if (success.code === 0) {
            setId(0);
            setUsername('');
            setBall1('');
            setBall2('');
            setBall3('');
            setBall4('');
            setBall5('');
            setBall6('');
            setBall7('');
            setBall8('');
            setBall9('');
            setBall10('');
            // setMalakaliy("");
            // setMajburiy("");
            // setSifat("");
            // setHududiy("");
            // setBugalterya("");
            // setDavo("");
            // setAxborat("");
            // setSugurta("");
            // setXodimlar("");

            localStorage.removeItem("SetAppEditReyting");
            alert("OK");
            hisytory.push('/admin/tables')
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
            name: username,
            ball1: ball1,
            ball2: ball2,
            ball3: ball3,
            ball4: ball4,
            ball5: ball5,
            ball6: ball6,
            ball7: ball7,
            ball8: ball8,
            ball9: ball9,
            // ball10: ball10,
            // Malkaliy: Malkaliy,
            // Majburiy:Majburiy,
            // Sifat: Sifat,
            // Hududiy: Hududiy,
            // Bugalterya: Bugalterya,
            // Davo:Davo,
            // Axborat:Axborat,
            // Sugurta:Sugurta,
            // Xodimlar: Xodimlar,
        };

        dispatch(editReyting(id, val))

    };


    useEffect(() => {
        if (localStorage.getItem("SetAppEditReyting")) {
            let data = JSON.parse(localStorage.getItem("SetAppEditReyting"));
            setId(data.id);
            setUsername(data.name);
            setBall1(data.ball1);
            setBall2(data.ball2);
            setBall3(data.ball3);
            setBall4(data.ball4);
            setBall5(data.ball5);
            setBall6(data.ball6);
            setBall7(data.ball7);
            setBall8(data.ball8);
            setBall9(data.ball9);
            setBall10(data.ball10);
            // setMalakaliy(data.Malkaliy);
            // setMajburiy(data.Majburiy);
            // setSifat(data.Sifat);
            // setHududiy(data.Hududiy);
            // setBugalterya(data.Bugalterya);
            // setDavo(data.Davo);
            // setAxborat(data.Axborat);
            // setSugurta(data.Sugurta);
            // setXodimlar(data.Xodimlar);
        }
    });

    return (
        <>


            <div
                className={
                    "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-lightBlue-900 text-black"

                }
            >
                <>

                </>
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3
                                className={
                                    "font-semibold text-lg "
                                }
                            >
                                {/*Filter*/}
                                <div className="rounded-t mb-0 px-4 py-3 border-0">
                                    <div className="flex flex-wrap ">
                                        <form onSubmit={filterCompany}>
                                            <input value={date} onChange={(e) => setDate(e.target.value)} type="date" id="start"
                                                   name="trip-start"
                                                   min="2015-01-01" max="2050-12-31">
                                            </input>
                                            <select value={company} onChange={(e) => setCompany(e.target.value)}>

                                                <option value={0}></option>
                                                <option value={1}> Axborat taxlil depatament</option>
                                                <option value={2}>Xodimlar bilan ishlash va ijro intizomga rioya
                                                    etilishi yo‘nalishida
                                                </option>
                                                <option value={3}>Sug‘urta xizmatlarini rivojlantirish yo‘nalishida
                                                </option>
                                                <option value={4}>Sug‘urta da'volari bilan ishlash yo‘nalishida</option>
                                                <option value={5}>Buxgalteriya hisobi va mulk ishlarini boshqarish
                                                    yo‘nali-shida
                                                </option>
                                                <option value={6}>Hududiy filiallar faoliyatini rivojlantirish
                                                    yo‘nalishida
                                                </option>
                                                <option value={7}>Sifat va marketing yo‘nalishda</option>
                                                <option value={8}>Majburiy sug‘urta xizmatlarini rivojlantirish
                                                    yo‘nalishida
                                                </option>
                                                <option value={9}>Malakaliy xodimlar tayyorlash yo‘nalishida</option>
                                                <option value={10}>Devonxona yo‘nalishda</option>
                                            </select>

                                            <button
                                                className="bg-lightBlue-500 text-white active:bg-lightBlue-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                                type="submit"
                                            >
                                                CREATE
                                            </button>
                                        </form>

                                    </div>
                                </div>
                                {/*End Filter*/}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                </div>

                <table>
                    <thead>
                    <tr className="table100-head">
                        <th className="column1">№</th>
                        <th className="column5">Agentning nomi</th>
                        <th className="column5">Agentning nomi</th>
                        <th className="column5">Agentning nomi</th>
                        <th className="column5">Umumiy</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="column1">1</td>
                        <td className="column5">YaTT</td>
                        <td className="column1">
                            <input
                                type="text"

                                name="ball1"
                                value=""
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"

                            />
                        </td>


                        <td className="column1">

                            <input
                                type="text"
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column5"> required value={ball1}
                            onChange={(e) => setBall2(e.target.value)}>{(ball1 + ball1 + ball1 + ball1)}</td>
                        <td className="column5"></td>
                    </tr>
                    </tbody>
                </table>

                {/* Start Axborat taxlil depatament*/}
                <table id="1" name="axborot">
                    <thead>
                    <tr className="table100-head">
                        <th className="column1">№</th>
                        <th className="column5">Filial nomi</th>
                        <th className="column5">1</th>
                        <th className="column5">2</th>
                        <th className="column5">3</th>
                        <th className="column5">4</th>
                        <th className="column5">5</th>
                        <th className="column5">Umumiy</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="column1">1</td>
                        <td className="column5">YaTT</td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column1">
                            <input
                                type="text"
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column5" required value={ball2}
                            onChange={(e) => setBall2(e.target.value)}>{(ball2 + ball2 + ball2 + ball2)}</td>
                        {/*<td className="column5">Text</td>*/}
                    </tr>
                    </tbody>
                </table>
                {/*End Axborot taxlil*/}

                {/*Xodimlar bilan ishlash va ijro intizomga rioya etilishi yo‘nalishida*/}
                <table id="1" hidden>
                    <thead>
                    <tr className="table100-head">
                        <th className="column1">№</th>
                        <th className="column5">Filial nomi</th>
                        <th className="column5">4</th>
                        <th className="column5">5</th>
                        <th className="column5">Umumiy</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>

                        <td className="column1">1</td>
                        <td className="column5">YaTT</td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                value=""
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column1">
                            <input
                                type="text"
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column5">
                            required value={ball3}
                            onChange={(e) => setBall3(e.target.value)}>{(ball3 + ball3 + ball3 + ball3)}</td>
                        <td className="column5"></td>
                    </tr>
                    </tbody>
                </table>
                {/*Xodimlar bilan ishlash va ijro intizomga rioya etilishi yo‘nalishida*/}

                {/*Sug‘urta xizmatlarini rivojlantirish yo‘nalishida*/}
                <table id="1" hidden>
                    <thead>
                    <tr className="table100-head">
                        <th className="column1">№</th>
                        <th className="column5">Filial nomi</th>
                        <th className="column5">1</th>
                        <th className="column5">2</th>
                        <th className="column5">3</th>
                        <th className="column5">Umumiy</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>

                        <td className="column1">1</td>
                        <td className="column5">YaTT</td>

                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                value=""
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                value=""
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column1">
                            <input
                                type="text"
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column5"> required value={ball4}
                            onChange={(e) => setBall4(e.target.value)}>{(ball4 + ball4 + ball4 + ball4)}</td>
                        <td className="column5"></td>
                    </tr>
                    </tbody>
                </table>
                {/*Sug‘urta xizmatlarini rivojlantirish yo‘nalishida*/}


                {/*Sug‘urta da'volari bilan ishlash yo‘nalishida*/}
                <table id="1" hidden>
                    <thead>
                    <tr className="table100-head">
                        <th className="column1">№</th>
                        <th className="column5">Filial nomi</th>
                        <th className="column5">1</th>
                        <th className="column5">2</th>
                        <th className="column5">3</th>
                        <th className="column5">4</th>
                        <th className="column5">5</th>
                        <th className="column5">Umumiy</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>

                        <td className="column1">1</td>
                        <td className="column5">YaTT</td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                value=""
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                value=""
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                value=""
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                value=""
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column1">
                            <input
                                type="text"
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column5"></td>
                    </tr>
                    <td className="column5"> required value={ball5}
                        onChange={(e) => setBall5(e.target.value)}>{(ball5 + ball5 + ball5 + ball5)}</td>
                    </tbody>
                </table>
                {/*Sug‘urta da'volari bilan ishlash yo‘nalishida*/}
                {/*Buxgalteriya hisobi va mulk ishlarini boshqarish yo‘nali-shida*/}
                <table id="1" hidden>
                    <thead>
                    <tr className="table100-head">
                        <th className="column1">№</th>
                        <th className="column5">Filial nomi</th>
                        <th className="column5">1</th>
                        <th className="column5">2</th>
                        <th className="column5">3</th>
                        <th className="column5">4</th>
                        <th className="column5">5</th>
                        <th className="column5">Umumiy</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>

                        <td className="column1">1</td>
                        <td className="column5">YaTT</td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                value=""
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                value=""
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                value=""
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                value=""
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column1">
                            <input
                                type="text"
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column5"></td>
                    </tr>
                    <td className="column5"> required value={ball6}
                        onChange={(e) => setBall6(e.target.value)}>{(ball6 + ball6 + ball6 + ball6)}</td>
                    </tbody>
                </table>
                {/*Buxgalteriya hisobi va mulk ishlarini boshqarish yo‘nali-shida*/}


                {/*Hududiy filiallar faoliyatini rivojlantirish yo‘nalishida*/}
                <table id="1" hidden>
                    <thead>
                    <tr className="table100-head">
                        <th className="column1">№</th>
                        <th className="column5">Filial nomi</th>
                        <th className="column5">1</th>
                        <th className="column5">2</th>
                        <th className="column5">3</th>
                        <th className="column5">4</th>
                        {/*<th className="column5">5</th>*/}
                        <th className="column5">Umumiy</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>

                        <td className="column1">1</td>
                        <td className="column5">YaTT</td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                value=""
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                value=""
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                value=""
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column5" required value={ball7}
                            onChange={(e) => setBall7(e.target.value)}>{(ball7 + ball7 + ball7 + ball7)}</td>
                        <td className="column1">
                            <input
                                type="text"
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column5"></td>
                    </tr>

                    </tbody>
                </table>
                {/*Hududiy filiallar faoliyatini rivojlantirish yo‘nalishida*/}


                {/*Sifat va marketing yo‘nalishda  */}
                <table id="1" hidden>
                    <thead>
                    <tr className="table100-head">
                        <th className="column1">№</th>
                        <th className="column5">Filial nomi</th>
                        <th className="column5">1</th>
                        <th className="column5">2</th>
                        <th className="column5">Umumiy</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>

                        <td className="column1">1</td>
                        <td className="column5">YaTT</td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                value=""
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                value=""
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                    </tr>
                    <td className="column5"> required value={ball8}
                        onChange={(e) => setBall8(e.target.value)}>{(ball8 + ball8 + ball8 + ball8)}</td>
                    </tbody>
                </table>
                {/*Sifat va marketing yo‘nalishda*/}
                {/*Majburiy sug‘urta xizmatlarini rivojlantirish yo‘nalishida*/}
                <table id="1">
                    <thead>
                    <tr className="table100-head">
                        <th className="column1">№</th>
                        <th className="column5">Filial nomi</th>
                        <th className="column5">1</th>
                        <th className="column5">2</th>
                        <th className="column5">3</th>
                        <th className="column5">4</th>
                        <th className="column5">5</th>
                        <th className="column5">Umumiy</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>

                        <td className="column1">1</td>
                        <td className="column5">YaTT</td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                value=""
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                value=""
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                value=""
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                value=""
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column1">
                            <input
                                type="text"
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column5"> required value={ball8}
                            onChange={(e) => setBall8(e.target.value)}>{(ball5 + ball6 + ball7 + ball8)}</td>
                    </tr>

                    </tbody>
                </table>
                {/*Majburiy sug‘urta xizmatlarini rivojlantirish yo‘nalishida*/}
                {/*Malakaliy xodimlar tayyorlash yo‘nalishida*/}
                <table id="1">
                    <thead>
                    <tr className="table100-head">
                        <th className="column1">№</th>
                        <th className="column5">Filial nomi</th>
                        <th className="column5">1</th>
                        <th className="column5">2</th>
                        <th className="column5">3</th>
                        <th className="column5">4</th>
                        <th className="column5">5</th>
                        <th className="column5">Umumiy</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>

                        <td className="column1">1</td>
                        <td className="column5">YaTT</td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                value=""
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                value=""
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                value=""
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column1">
                            <input
                                type="text"
                                id="ball1"
                                name="ball1"
                                value=""
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column1">
                            <input
                                type="text"
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column5"> required value={ball10 + ball9 + ball8}
                            onChange={(e) => setBall10(e.target.value)}>{(ball9 + ball10 + ball10 + ball10)}</td>
                    </tr>
                    </tbody>
                </table>
                {/*Malakaliy xodimlar tayyorlash yo‘nalishida*/}
                {/*Devonxona yo‘nalishda*/}
                <table id="1" hidden>
                    <thead>
                    <tr className="table100-head">
                        <th className="column1">№</th>
                        <th className="column5">Filial nomi</th>
                        <th className="column5">1</th>
                        {/*<th className="column5">2</th>*/}
                        {/*<th className="column5">3</th>*/}
                        {/*<th className="column5">4</th>*/}
                        {/*<th className="column5">5</th>*/}
                        <th className="column5">Umumiy</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>

                        <td className="column1">1</td>
                        <td className="column5">YaTT</td>

                        <td className="column1">
                            <input
                                type="text"
                                placeholder="ball"
                                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                            />
                        </td>
                        <td className="column5"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default CardReyting


