import { getDCs, getMainDC, setMainDC } from "@/lib/dc";
import store, { selectDCRedux, setDCRedux } from "@/store/ffxiv_store";
import { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

export default function DCSelector() {
	return (
		<Provider store={store}>
			<DCSelectorComponent />
		</Provider>
	);
}
export function DCSelectorComponent() {
	const main_dc = useSelector(selectDCRedux);
	const dispatch = useDispatch();
	const [dropdownOpened, setDropdownOpened] = useState(false);
	const [dataCenters, setDataCenters] = useState([]);

	useEffect(() => {
		getDCs().then((val) => {
			setDataCenters(val);
			getMainDC().then((main_dc) => dispatch(setDCRedux(main_dc)));
		});
	}, [dispatch]);
	
	function onSelectDC(name) {
		setMainDC(name).then(() => {
			dispatch(setDCRedux(name));
		});
	}
	return (
		<div>
			<button
				id="dc_button"
				data-dropdown-toggle="dropdown"
				className="w-full relative text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-md font-body font-[700] px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				type="button"
				onFocus={() => setDropdownOpened(true)}
				onBlur={() => setDropdownOpened(false)}
			>
				<span>{main_dc}</span>
				<svg
					className="w-4 h-4 ml-2 absolute right-3"
					aria-hidden="true"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>
			{dataCenters.length > 0 && (
				<div className="relative">
					<div
						id="dc_result_element"
						className={`${
							dropdownOpened ? "" : "hidden"
						} max-h-[32rem] overflow-y-auto w-full absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700`}
					>
						<ul
							className="w-full py-3 bg-secondary text-white"
							aria-labelledby="dropdownDefaultButton"
						>
							<h1 className="select-none text-gray-400 font-display font-bold text-lg ml-5 mt-3 mb-1">
								Data Center
							</h1>
							{dataCenters.map((dc) => (
								<li key={dc.name}>
									<div
										onMouseDown={() => onSelectDC(dc.name)}
										className="select-none mx-2 h-10 rounded-lg pl-3 cursor-pointer flex items-center hover:bg-blue-700"
									>
										{dc.name}
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
}
