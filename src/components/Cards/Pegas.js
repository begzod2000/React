import React from "react";

//* CSS for table
import "assets/styles/table.css";

export default function Pegas({ color }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
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
									<td class="column5">уцйуцй</td>
									<td class="column1">кцйук</td>
									<td class="column1">уцйуцй</td>
									<td class="column5">уцйуйц</td>
									<td class="column5">уцйуцй</td>
									<td class="column5">уцйуйц</td>
									<td class="column5">уцйуцй</td>
									<td class="column5">уцйуйц</td>
								</tr>
								<tr>
									<td class="column1">1</td>
									<td class="column5">уцйуцй</td>
									<td class="column1">кцйук</td>
									<td class="column1">уцйуцй</td>
									<td class="column5">уцйуйц</td>
									<td class="column5">уцйуцй</td>
									<td class="column5">уцйуйц</td>
									<td class="column5">уцйуцй</td>
									<td class="column5">уцйуйц</td>
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
