import { formatNumberToGilString } from "@/lib/format_function";

export default function LowHighPriceCard({ title, item, color }) {
	return (
		<div className="h-100 mt-3 p-4 rounded-lg bg-primary">
			<h1 className="text-gray-300 font-body">{title}</h1>
			<h1 className={`${color} font-body font-black text-xl mt-2`}>
				{item != null ? formatNumberToGilString(item.pricePerUnit) : "-"}
			</h1>
			{item != null && (
				<div className="flex items-center">
					<span className="flex-auto text-summary font-body font-[0]">
						{item.quantity} Unit{item.quantity > 1 ? "s" : ""}
					</span>
					<span className="flex-auto font-body font-semibold text-lg text-gray-400 text-right">
						{item.worldName}
					</span>
				</div>
			)}
		</div>
	);
}
