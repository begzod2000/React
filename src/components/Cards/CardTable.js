import React, {useEffect} from "react";

//* CSS for table
import "assets/styles/table.css";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {deleteReyting, getReyting} from "../../Redux/Action/Reducer/reytingAction";

export default function CardTable({ color }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const data = useSelector(state => state.reytingReducer.data);

  console.log(data);

  useEffect(()=>{
    dispatch(getReyting())
  },[]);

  const qwerty =(data)=>{
    localStorage.setItem("SetAppEditReyting", JSON.stringify(data));
    history.push('/admin/reyting')
  };

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-red-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-red-700" : "text-white")
                }
              >
                Kompaniyaning 25.02.2021 yil holatiga ishlayotgan agentlar to‘g‘risida ma'lumot.
              </h3>
            </div>
          </div>
        </div>
      <div className="block w-full overflow-x-auto">


      </div>
      </div>
        {/* test */}
        <table>
            <thead>
              <tr class="table100-head">
                <th class="column1">№</th>
                <th class="column3">Filiallar nomi</th>
                <th class="column7">Xodimlar bilan ishlash va ijro intizomga rioya etilishi yo‘nalishida</th>
                <th class="column7">Sug‘urta xizmatlarini rivojlantirish yo‘nalishida</th>
                <th class="column7">Axborot-tahlil va axborot-komunikasion texnologiyalari yo‘nalishida </th>
                <th class="column7">Sug‘urta da'volari bilan ishlash yo‘nalishida </th>
                <th class="column7">Buxgalteriya hisobi va mulk ishlarini boshqarish yo‘nali-shida </th>
                <th class="column7">Hududiy filiallar faoliyatini rivojlantirish yo‘nalishida</th>
                <th class="column7">Sifat va marketing yo‘nalishda</th>
                <th class="column7">Majburiy sug‘urta xizmatlarini rivojlantirish yo‘nalishida </th>
                <th class="column7">Malakaliy xodimlar tayyorlash yo‘nalishida</th>
                <th class="column7">Devonxona yo‘nalishda</th>
                <th class="column7">Umumiy yig‘ilgan balning o‘rtachasi</th>
                <th class="column7">Sug‘urta mukofoti bo‘yicha aprel oyi prognozni ijrosi</th>
                <th class="column7">Umumiy ko‘rsatkichi</th>
                <th class="column20" style={{textAlign:"center"}}>Action</th>
                {/*<th class="column20"></th>*/}
                {/*<th class="column20"></th>*/}


              </tr>
            </thead>
          <tbody>
          {data.map((item, index)=>
            <tr>
              <td className="column1">{index + 1}</td>
              <td className="column3">{item.name}</td>
              <td className="column3">{item.ball1}</td>
              <td className="column3">{item.ball2}</td>
              <td className="column3">{item.ball3}</td>
              <td className="column3">{item.ball4}</td>
              <td className="column3">{item.ball5}</td>
              <td className="column3">{item.ball6}</td>
              <td className="column3">{item.ball7}</td>
              <td className="column3">{item.ball8}</td>
              <td className="column3">{item.ball9}</td>
              <td className="column3">{item.ball10}</td>
              <td className="column3">{item.ball11}</td>
              <td className="column3">{item.foiz}</td>
              {/*<td className="column3">{item.hisob}</td>*/}
              <td className="column3">{item.middle}</td>
             <td style={{display:"flex"}}> <button
                 className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                 type="submit"
                 onClick={()=>qwerty(item)}
             >
               Update
             </button>
               <button
                   className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                   type="submit"
                   onClick={()=>dispatch(deleteReyting(item.id))}
               >
                 Delete
               </button>
               <button
                   className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                   type="submit"
                   onClick={()=>history.push("/admin/reyting")}
               >
                 CREATE
               </button>
             </td>
            </tr>
          )}
          </tbody>
          </table>
        {/* /test*/}
    </>
  );
}

// CardTable.defaultProps = {
//   color: "light",
// };

// CardTable.propTypes = {
//   color: PropTypes.oneOf(["light", "dark"]),
// };
