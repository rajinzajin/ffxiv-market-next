import ItemSearchBar from "@/components/ItemSearchBar";
import { getItem } from "@/database/item_db";
import { getItemImageUrl } from "@/lib/item_utils";
import Image from "next/image";

export default function Market(props) {
	return (
		<div>
			<div className="grid grid-cols-12 gap-y-6 gap-x-4">
				<div className="col-span-12 2xl:col-span-9 flex items-center">
					<div className="relative h-[6rem] w-[6rem] min-h-[6rem] min-w-[6rem]">
						<Image
							className="w-full h-full"
							width={96}
							height={96}
							src={getItemImageUrl(props.item.id)}
							onError="this.src='/img/error.png';"
							alt={props.item.Name}
						/>
					</div>
					<div className="ml-5 font-display">
						<h1 className="text-white text-4xl font-black">
							{props.item.Name}
						</h1>
						<h1 className="text-gray-400 text-lg font-black">
							{props.item.Description !== null ? props.item.Description : ""}
						</h1>
					</div>
				</div>
				<div className="col-span-12 2xl:col-span-3 px-2 w-full h-[3.7rem] items-center justify-center">
					<div className="w-full h-full flex items-center">
						<ItemSearchBar />
					</div>
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps({ params }) {
	const data = await getItem(parseInt(params.item_id));
	return { props: { item: data } };
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: "blocking",
	};
}
