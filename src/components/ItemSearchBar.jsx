import {
	convertToArray,
	filterItemJsonObjects,
	getItemImageUrl,
} from "@/lib/item_utils";
import { useEffect, useState } from "react";
import marketable_item from "@/data/marketable_items.json";
import Image from "next/image";
import Link from "next/link";

export default function ItemSearchBar(props) {
	const [searchResult, setSearchResult] = useState([]);
	const [isSearchFocus, setSearchFocus] = useState(false);
	const [isSearchResultClicked, setSearchResultClicked] = useState(false);

	function onSearch(e) {
		const item_name = e.target.value;
		const filteredJson = filterItemJsonObjects(marketable_item, item_name, 15);
		setSearchResult(convertToArray(filteredJson));
	}
	useEffect(() => {}, [props]);
	return (
		<div className="w-full">
			<div
				onFocus={() => {
					setSearchFocus(true);
				}}
				onBlur={() => {
					if (!isSearchResultClicked) {
						setSearchFocus(false);
						setSearchResultClicked(false);
					}
				}}
			>
				<input
					autoComplete="off"
					type="text"
					id="search_input"
					className="px-5 font-body h-14 bg-primary w-full outline-none focus:outline-none placeholder:text-gray-200 text-gray-200 text-base rounded-lg block p-2.5"
					placeholder="Search item"
					onInput={onSearch}
				/>
				{(isSearchFocus && searchResult.length > 0) && (
					<div className="relative" onMouseDown={()=>setSearchResultClicked(true)}>
						<div
							id="search_result"
							className="{searchResultVisible} bg-primary absolute max-h-80 rounded-xl overflow-y-auto mt-2 p-2 w-full z-50 text-white"
						>
							<ul>
								{searchResult.map((item) => {
									return (
										<li
											key={item._id}
											className="group h-auto cursor-pointer font-body font-bold text-gray-300"
										>
											<Link
												href={`/market/Materia/${item._id}`}
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
											</Link>
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
// export async function getStaticProps() {
// 	const objectData = filterItemJsonObjects()

// 	return {
// 		props: objectData,
// 	};
// }
