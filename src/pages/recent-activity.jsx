import ItemCard from "@/components/ItemCard";
import ListingTable from "@/components/ListingTable";
import { MarketEvents } from "@/components/MarketEvents";
import { selectSelectedMarketEvent } from "@/store/ffxiv_store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function RecentActivity() {
	const [selectedItemId, setSelectedItemId] = useState(null);
	const selectedMarketEvent = useSelector(selectSelectedMarketEvent);

	useEffect(() => {
		setSelectedItemId(selectedMarketEvent.item);
	}, [selectedMarketEvent]);

	return (
		<div className="grid grid-cols-2 mt-7 gap-5">
			<div className="col-span-2 grid grid-cols-2 gap-5">
				<div className="col-span-2 2xl:col-span-1">
					<h1 className="w-full font-display text-center text-3xl font-bold">
						Recent Activity
					</h1>
				</div>
			</div>
			<div className="col-span-2 2xl:col-span-1 w-full h-[35rem]">
				<MarketEvents />
			</div>
			<div className="col-span-2 2xl:col-span-1">
				<div className="mb-6">
					<ItemCard item_id={selectedItemId} />
				</div>
				<div className="h-[35rem]">
					<ListingTable listings={selectedMarketEvent.listings} />
				</div>
			</div>
		</div>
	);
}
