import { getItemImageUrl } from "@/lib/item_utils";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import CardLoading from "./CardLoading";
import { useSelector } from "react-redux";
import { selectMarketableItemsStore } from "@/store/ffxiv_store";
import { useRouter } from "next/router";

export default function ItemCard({ item_id }) {
	const [imageLoaded, setImageLoaded] = useState(false);
	const [imageSrc, setImageSrc] = useState(getItemImageUrl(item_id));
	const marketable_items = useSelector(selectMarketableItemsStore)
	const router = useRouter()
	useEffect(() => {
		if (item_id == null) return;

		const image_src = getItemImageUrl(item_id);
		setImageSrc(image_src);
		updateImage(item_id, image_src, setImageLoaded);
	}, [item_id, setImageLoaded, setImageSrc]);

	function updateImage(id, image_src) {
		if (id == -1) return;

		setImageLoaded(false);
		const image = new Image();
		image.src = image_src;
		image.onload = () => setImageLoaded(true);
	}

	if (item_id == null) return <></>;

	return (
		<>
			<div className="w-full flex p-5 bg-primary rounded-lg items-center mb-10">
				<div className="w-20 h-20">
					{imageLoaded && (
						<NextImage
							width={80}
							height={80}
							className="w-full h-full"
							src={imageSrc}
							alt={item_id}
						/>
					)}
					{!imageLoaded && (
						<div className="w-full h-full">
							<CardLoading show={true} absolute={false} />
						</div>
					)}
				</div>
				<div className="ml-5">
					<h1 className="text-white font-display font-bold text-xl">{marketable_items[item_id].en}</h1>
					<button
					onClick={() => router.push(`market/${item_id}`)}
						type="button"
						className="text-white hover:border-blue-500 font-body text-base font-semibold mt-3 border-2 border-white rounded-lg px-5 py-2"
					>
						Check Price
					</button>
				</div>
			</div>
		</>
	);
}
