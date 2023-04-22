import { getItem } from "@/database/item_db";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Market(props) {
	const router = useRouter();
	const { dc, item_id } = router.query;
	useEffect(() => {
		console.log(props.item);
	}, [props.item]);
	return (
		<div>
			{dc} {item_id}
		</div>
	);
}
export const getServerSideProps = async (context) => {
	const data = await getItem(parseInt(context.query.item_id));
	return { props: { item: data } };
};
