import React from "react";

// components


export default function CardSocialTraffic() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                TOP-10
                </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <a
                href="/admin/tables"
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Toʼliq roʼyhat
              </a>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <tr>
                 <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                  №
                </th>
                <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Filial nomi
                </th>
                <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Umumiy
                </th>
                <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">
                  Prognoz ijrosi
                </th>
              </tr>
            </thead>
            
            <tbody>
            {/*Table Rating TOP10 #1*/}
              <tr>
                <th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  1
                </th>
                <th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  Bogʼot tumani
                </th>
                
                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    1,480
                </td>

                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2">100%</span>
                      <div className="relative w-full">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                          <div
                            style={{ width: "100%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                          ></div>
                        </div>
                      </div>
                    </div>
                </td>
              </tr>
              {/*Table Rating TOP10 #1*/}
              {/*Table Rating TOP10 #2*/}  
              <tr>
                <th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                2
                </th>
                <th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                Qashqadaryo viloyati
                </th>
                
                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                7,57
                </td>

                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2">100%</span>
                      <div className="relative w-full">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                          <div
                            style={{ width: "100%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                          ></div>
                        </div>
                      </div>
                    </div>
                </td>
              </tr>
              {/*Table Rating TOP10 #2*/}
              {/*Table Rating TOP10 #3*/}  
              <tr>
                <th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                 3
                </th>
                <th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                Xorazm viloyati
                </th>
                
                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                7,43
                </td>

                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2">100%</span>
                      <div className="relative w-full">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                          <div
                            style={{ width: "100%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                          ></div>
                        </div>
                      </div>
                    </div>
                </td>
              </tr>
              {/*Table Rating TOP10 #3*/} 
              {/*Table Rating TOP10 #4*/}  
              <tr>
                <th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                4
                </th>
                <th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                Toshkent viloyati
                </th>
                
                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                7,32
                </td>

                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2">100%</span>
                      <div className="relative w-full">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                          <div
                            style={{ width: "100%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                          ></div>
                        </div>
                      </div>
                    </div>
                </td>
              </tr>
              {/*Table Rating TOP10 #4*/}  
              {/*Table Rating TOP10 #5*/}  
              <tr>
                <th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  5
                </th>
                <th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                Farg'ona viloyati
                </th>
                
                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                7,12
                </td>

                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2">96,4%</span>
                      <div className="relative w-full">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                          <div
                            style={{ width: "96.4%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                          ></div>
                        </div>
                      </div>
                    </div>
                </td>
              </tr>
              {/*Table Rating TOP10 #5*/}  
              {/*Table Rating TOP10 #6*/}  
              <tr>
                <th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  6
                </th>
                <th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                Samarqand viloyati
                </th>
                
                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                6,80
                </td>

                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2">100%</span>
                      <div className="relative w-full">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                          <div
                            style={{ width: "100%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                          ></div>
                        </div>
                      </div>
                    </div>
                </td>
              </tr>
              {/*Table Rating TOP10 #6*/}  
              {/*Table Rating TOP10 #7*/}  
              <tr>
                <th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  7
                </th>
                <th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                Buxora viloyati
                </th>
                
                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                6,78
                </td>

                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2">100%</span>
                      <div className="relative w-full">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                          <div
                            style={{ width: "100%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                          ></div>
                        </div>
                      </div>
                    </div>
                </td>
              </tr>
              {/*Table Rating TOP10 #7*/}  
              {/*Table Rating TOP10 #8*/}  
              <tr>
                <th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  8
                </th>
                <th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                Andijov viloyati
                </th>
                
                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                6,76
                </td>

                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2">100%</span>
                      <div className="relative w-full">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                          <div
                            style={{ width: "100%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                          ></div>
                        </div>
                      </div>
                    </div>
                </td>
              </tr>
              {/*Table Rating TOP10 #8*/}  
              {/*Table Rating TOP10 #9*/}  
              <tr>
                <th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  9
                </th>
                <th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                KAFIL-EXIM filiali
                </th>
                
                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                6,42
                </td>

                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2">100%</span>
                      <div className="relative w-full">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                          <div
                            style={{ width: "100%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                          ></div>
                        </div>
                      </div>
                    </div>
                </td>
              </tr>
              {/*Table Rating TOP10 #9*/}  
              {/*Table Rating TOP10 #10*/}  
              <tr>
                <th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  10
                </th>
                <th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                Surxondaryo viloyati
                </th>
                
                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    6,42
                </td>

                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2">83,6%</span>
                      <div className="relative w-full">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-yellow-900">
                          <div
                            style={{ width: "83.6%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                          ></div>
                        </div>
                      </div>
                    </div>
                </td>
              </tr>
              {/*Table Rating TOP10 #10*/}  
         

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
