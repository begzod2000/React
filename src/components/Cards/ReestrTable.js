import React from "react";

//* CSS for table
import "assets/styles/table.css";

export default function ReestrTable({ color }) {
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
                  (color === "light" ? "text-blueGray-700" : "text-white")
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
								<th class="column5">Agentning nomi</th>
								<th class="column1">STIR</th>
								<th class="column1">Jis / Yur</th>
								<th class="column5">Filial nomi</th>
								<th class="column5">Agentlik shartnomasi</th>
								<th class="column5">Guvohnomaning amal qilish muddati</th>
								<th class="column5">Agentlik mukofoti</th>
								<th class="column5">Izox</th>
							</tr>

						</thead>
						<tbody>
						<tr>
							<td class="column1">1</td>
							<td class="column5">YaTT </td>
							<td class="column1">Umarov Odiljon Аbdumannopovich</td>
							<td class="column1"> 605922328</td>
							<td class="column5">fiz Аndijon viloyati filiali </td>
							<td class="column5">05 01.12.2020</td>
							<td class="column5">31.12.2023</td>
							<td class="column5"> 25%</td>
							<td class="column5">Shart/guvox</td>
						</tr>
						<tr>
							<td class="column1">2</td>
							<td class="column5">YaTT </td>
							<td class="column1">Xasanov Mirjalol Аbdukaxxor oʼgʼli</td>
							<td class="column1"> 586218776</td>
							<td class="column5">fiz Аndijon viloyati filiali </td>
							<td class="column5">01 01.01.2019</td>
							<td class="column5"> 31.03.2022 </td>
							<td class="column5"> 25%</td>
							<td class="column5">Shart/guvox</td>
						</tr>
						<tr>
							<td class="column1">3</td>
							<td class="column5">YaTT </td>
							<td class="column1">Xasanov Mirjalol Аbdukaxor oʼgʼli"</td>
							<td class="column1"> 586218776</td>
							<td class="column5">fiz Аsaka tumani filiali </td>
							<td class="column5"> 3 21.05.2020</td>
							<td class="column5">31.03.2022</td>
							<td class="column5"> 25%</td>
							<td class="column5">Shart/guvox</td>
						</tr>
						<tr>
							<td class="column1">4</td>
							<td class="column5">YaTT </td>
							<td class="column1">Аbdullaeva Risolatxon Gulomkodir qizi"</td>
							<td class="column1"> 543111008</td>
							<td class="column5">fiz Аsaka tumani filiali </td>
							<td class="column5"> 03 02.12.2020 </td>
							<td class="column5">31.12.2023</td>
							<td class="column5"> 25%</td>
							<td class="column5">Shart/guvox</td>
						</tr>
						<tr>
							<td class="column1">5</td>
							<td class="column5">YaTT </td>
							<td class="column1">Umarov Odiljon Аbdumannopovich</td>
							<td class="column1"> 605922328</td>
							<td class="column5"> fiz Shaxrixon filiali </td>
							<td class="column5"> 02 01.12.2020 </td>
							<td class="column5"> 31.12.2023</td>
							<td class="column5"> 25%</td>
							<td class="column5">Shart/guvox</td>
						</tr>
						<tr>
							<td class="column1">6</td>
							<td class="column5">YaTT </td>
							<td class="column1">Rabiev Elyor Doniyorovich</td>
							<td class="column1">564455716</td>
							<td class="column5">fiz Buxoro viloyat filiali </td>
							<td class="column5"> 30.06.2020</td>
							<td class="column5">31.07.2022</td>
							<td class="column5"> 25%</td>
							<td class="column5">Shart/guvox</td>
						</tr>
						<tr>
							<td class="column1">7</td>
							<td class="column5">YaTT </td>
							<td class="column1"> Isoev Shaxriyorjon Mayor ugʼli</td>
							<td class="column1"> 612689384</td>
							<td class="column5">fiz Gʼijduvon tumani filiali </td>
							<td class="column5"> 2 07.12.2020</td>
							<td class="column5">31.12.2022 </td>
							<td class="column5"> 25%</td>
							<td class="column5">Shart/guvox</td>
						</tr>
						<tr>
							<td class="column1">8</td>
							<td class="column5">YaTT </td>
							<td class="column1"> Safoev Muxammadiyor Shuxratovich</td>
							<td class="column1"> 512919384</td>
							<td class="column5">fiz Gʼijduvon tumani filiali </td>
							<td class="column5"> 29.10.2020 </td>
							<td class="column5"> 30.11.2021 </td>
							<td class="column5"> 25%</td>
							<td class="column5">Shart/guvox</td>
						</tr>
						<tr>
							<td class="column1">9</td>
							<td class="column5">YaTT </td>
							<td class="column1">Tuychiev Ulugbek Аlikulovich</td>
							<td class="column1">461350496</td>
							<td class="column5">fiz Jizzax shaxar filiali </td>
							<td class="column5"> 2020/09 04</td>
							<td class="column5">31.08.2023 </td>
							<td class="column5"> 25%</td>
							<td class="column5">Shart/guvox</td>
						</tr>
						<tr>
							<td class="column1">10</td>
							<td class="column5">YaTT </td>
							<td class="column1"> Karimova Zarrina Ulugʼbekovna</td>
							<td class="column1"> 602867224 </td>
							<td class="column5">fiz Navoiy viloyati filiali </td>
							<td class="column5">03 15.09.2020</td>
							<td class="column5">30.09.2023 </td>
							<td class="column5"> 25%</td>
							<td class="column5">Shart/guvox</td>
						</tr>
						</tbody>
					</table>
        {/* /test*/}  
    </>
  );
}

// CardTable.defaultProps = {
//   color: "light",
// };
