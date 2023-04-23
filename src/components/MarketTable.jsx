import { getLowestPriceItem } from "@/lib/listings";
import { selectDCRedux, selectWorldsStore } from "@/store/ffxiv_store";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getWorld } from "@/lib/world";
import { formatNumberToGilString } from "@/lib/format_function";
export default function MarketTable({ listings = [] }) {
	const main_dc = useSelector(selectDCRedux);
	const all_worlds = useSelector(selectWorldsStore);
	const [isHqTable, setIsHqTable] = useState(false);
	const [selectedPrices, setSelectedPrices] = useState([]);
	const selectedStyle =
		"text-white font-medium rounded-lg text-sm px-5 py-2.5 bordered-active-1";
	const unSelectedStyle =
		"py-2.5 px-5 text-sm font-medium text-gray-400 rounded-lg bordered-hover-1 hover:text-white";

	const getWorldListing = useCallback(
		(worldName, hq) => {
			return listings.filter(
				(listing) => listing.worldName === worldName && listing.hq === hq
			);
		},
		[listings]
	);

	const updateData = useCallback(() => {
		var price_list = { nq: [], hq: [] };
		if (listings.length <= 0) {
			return price_list;
		}

		var worlds = main_dc.worlds ?? [];
		worlds.forEach((world_id) => {
			var world = getWorld(all_worlds, world_id);
			var nq = getWorldListing(world.name, false);
			var hq = getWorldListing(world.name, true);
			if (nq.length > 0) {
				price_list.nq.push(getLowestPriceItem(nq));
			}
			if (hq.length > 0) {
				price_list.hq.push(getLowestPriceItem(hq));
			}
		});
		price_list.nq.sort((a, b) => a.pricePerUnit - b.pricePerUnit);
		price_list.hq.sort((a, b) => a.pricePerUnit - b.pricePerUnit);
		return price_list;
	}, [all_worlds, getWorldListing, listings.length, main_dc.worlds]);

	useEffect(() => {
		const new_world_prices = updateData();
		setSelectedPrices(isHqTable ? new_world_prices.hq : new_world_prices.nq);
	}, [isHqTable, listings, updateData]);

	return (
		<div className="relative shadow-md sm:rounded-lg">
			<button
				onClick={() => setIsHqTable(false)}
				type="button"
				class={`${isHqTable ? unSelectedStyle : selectedStyle}`}
			>
				Normal Quality
			</button>
			<button
				onClick={() => setIsHqTable(true)}
				type="button"
				class={`${isHqTable ? selectedStyle : unSelectedStyle} ml-3`}
			>
				High Quality
			</button>
			{/* {#if selectedPrices.length > 0} */}
			<table className="w-full font-display text-sm text-left text-gray-300">
				<thead className="bg-item text-sm font-body uppercase text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							{" "}
							World{" "}
						</th>
						<th scope="col" className="px-6 py-3">
							{" "}
							Price{" "}
						</th>
						<th scope="col" className="px-6 py-3">
							{" "}
							Quantity{" "}
						</th>
						<th scope="col" className="px-6 py-3">
							{" "}
							Quality{" "}
						</th>
					</tr>
				</thead>
				<tbody class="font-body">
					{selectedPrices.map((item) => (
						<tr
							key={item.id}
							className="bg-primary text-base border-b border-gray-700 hover:bg-item"
						>
							<th
								scope="row"
								className="px-6 py-4 font-medium whitespace-nowrap text-white"
							>
								{item.worldName}
							</th>
							<td className="px-6 py-4 text-yellow-200">
								{formatNumberToGilString(item.pricePerUnit)}
							</td>
							<td className="px-6 py-4"> {item.quantity} </td>
							<td className="px-6 py-4">
								{item.hq === true ? "High" : "Normal"}
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{selectedPrices.length <= 0 && (
				<div className="bg-item text-sm font-body uppercase text-gray-400 py-3">
					<h1 className="font-body font-semibold text-base text-center">
						No Item Found.
					</h1>
				</div>
			)}
		</div>
	);
}
