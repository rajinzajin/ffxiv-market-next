import ItemCard from "@/components/ItemCard";
import { MarketEvents } from "@/components/MarketEvents";
import { selectSelectedMarketEvent } from "@/store/ffxiv_store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function RecentActivity() {
	const [selectedItemId, setSelectedItemId] = useState(null)
	const selectedMarketEvent = useSelector(selectSelectedMarketEvent)
	useEffect(()=>{
		setSelectedItemId(selectedMarketEvent.item)
	},[selectedMarketEvent])
	return (
		<div className="grid grid-cols-12 mt-7 gap-5">
			<div className="col-span-12 2xl:col-span-6 w-full h-[35rem]">
				<MarketEvents />
			</div>
			<div className="col-span-12 2xl:col-span-6">
			<ItemCard item_id={selectedItemId}/>
				{/* <ItemCard item_id={selectedEvent.item} /> */}
				{/* <div class="h-[35rem]">
					<ListingTable listings={selectedEventListings} />
				</div> */}
			</div>
		</div>
	);
}
