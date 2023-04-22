import {
	convertToArray,
	filterItemJsonObjects,
	getItemImageUrl,
} from "@/lib/item_utils";
import { useEffect, useState } from "react";
import marketable_item from "@/data/marketable_items.json";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ItemSearchBar(props) {
	const router = useRouter()
	const [searchResult, setSearchResult] = useState([]);
	const [isSearchFocus, setSearchFocus] = useState(false);
	const [inputNameValue, setinputNameValue] = useState("")

	function onSearch(e) {
		setinputNameValue(e.target.value)
		const filteredJson = filterItemJsonObjects(marketable_item, e.target.value, 15);
		setSearchResult(convertToArray(filteredJson));
	}
	function selectItem(item){
		setinputNameValue(item.en)
		router.push(`/market/${item._id}`)
	}
	useEffect(() => {}, [props]);
	return (
		<div className="w-full">
			<div
				onFocus={() => {
					setSearchFocus(true);
				}}
				onBlur={() => {
					setSearchFocus(false);
				}}
			>
				<input
					autoComplete="off"
					type="text"
					id="search_input"
					className="px-5 font-body h-14 bg-primary w-full outline-none focus:outline-none placeholder:text-gray-200 text-gray-200 text-base rounded-lg block p-2.5"
					placeholder="Search item"
					value={inputNameValue}
					onChange={onSearch}
				/>
				{(isSearchFocus && searchResult.length > 0) && (
					<div className="relative">
						<div
							id="search_result"
							className="{searchResultVisible} bg-primary absolute max-h-80 rounded-xl overflow-y-auto mt-2 p-2 w-full z-50 text-white"
						>
							<ul>
								{searchResult.map((item) => {
									return (
										<li
											key={item._id}
											onMouseDown={()=>{selectItem(item)}}
											className="group h-auto cursor-pointer font-body font-bold text-gray-300"
										>
											<div
												className="flex m-auto group-hover:bg-higlight-1 py-2 rounded-lg"
											>
												<Image
													src={getItemImageUrl(item._id)}
													alt={item.en}
													width={40}
													height={40}
													className="ml-3 w-10 h-10"
												/>
												<div className="flex-1 h-full ml-3 my-auto group-hover:text-white">
													{item.en}
												</div>
											</div>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}