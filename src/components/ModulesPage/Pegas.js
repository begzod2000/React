import React from "react";

//* CSS for table
import "assets/styles/table.css";

export default function Pegas({ color }) {
  return (
    <>
      	<div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-red-700 text-white")
        }
      	>
      		<div className="block w-full overflow-x-auto">


    		</div>
    	</div>
        {/* test */}
	<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
		<div className="rounded-t bg-white mb-0 px-6 py-6">
			<div className="text-center flex justify-between">
				<h6 className="text-blueGray-700 text-xl font-bold">Pegas</h6>
				<a
				href="https://kafil.i-polis.uz"
				target="_blank"
				className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-l px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
				type="button"
				>
				Kirish
				</a>
			</div>
			</div>

			<div className="container mx-auto px-4 pb-32 pt-48">
				<div className="items-center flex flex-wrap">
					<div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
					<div className="md:pr-12">
						<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
						<i className="fas fa-file-alt text-xl"></i>
						</div>
						<h3 className="text-3xl font-semibold">
						Biznes qog'oz hujjatlarni tark etmoqda
						</h3>
						<p className="mt-4 text-lg leading-relaxed text-blueGray-500">
						Sug'urtaning abadiy qog'ozli qizil lenta sifatida ildiz otgan g'oyasi uzoq vaqtdan beri ahamiyatsiz edi. 
						Har yili qog'ozlarning soni kamaymoqda va bu jarayonni elektron shaklga aylantirishda - Pegas dasturidan foydalanamiz.
						</p>
					<ul className="list-none mt-6">
						<li className="py-2">
							<div className="flex items-center">
							<div>
								<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
								<i className="fas fa-fingerprint"></i>
								</span>
							</div>
							<div>
								<h4 className="text-blueGray-500">
								Ijro intizomi
								</h4>
							</div>
							</div>
						</li>
						<li className="py-2">
							<div className="flex items-center">
							<div>
								<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
								<i className="fab fa-html5"></i>
								</span>
							</div>
							<div>
								<h4 className="text-blueGray-500">
								Tezkorlik
								</h4>
							</div>
							</div>
						</li>
						<li className="py-2">
							<div className="flex items-center">
							<div>
								<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
								<i className="far fa-paper-plane"></i>
								</span>
							</div>
							<div>
								<h4 className="text-blueGray-500">
								Dynamic Javascript Components
								</h4>
							</div>
							</div>
						</li>
						
					</ul>
					</div>
            	</div>

            	<div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
					<img
						alt="..."
						className="max-w-full rounded-lg shadow-xl"
						style={{
						transform:
							"scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
						}}
						src={require("assets/img/documentation.png").default}
					/>
            	</div>
        	</div>
        </div>
	</div>
        {/* /test*/}  
    </>
  );
}

// CardTable.defaultProps = {
//   color: "light",
// };
