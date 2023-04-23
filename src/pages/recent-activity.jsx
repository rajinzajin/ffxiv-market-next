import { MarketEvents } from "@/components/MarketEvents";

export default function RecentActivity() {
	return (
		<div className="grid grid-cols-12">
			<div className="col-span-12 2xl:col-span-6 mt-7 w-full h-[35rem]">
				<MarketEvents />
			</div>
		</div>
	);
}
