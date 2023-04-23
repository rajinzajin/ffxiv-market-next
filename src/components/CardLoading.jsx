export default function CardLoading({ show = true, absolute = true }) {
	return (
		<div
			className={`${show ? "" : "hidden"} ${
				absolute ? "absolute" : "relative"
			} w-full h-full`}
		>
			<div className="absolute rounded-lg w-full h-full bg-opacity-[0.1] blur-md bg-black backdrop-blur-sm" />
			<span className="absolute loader w-9 h-9 m-auto top-0 left-0 right-0 bottom-0" />
		</div>
	);
}
