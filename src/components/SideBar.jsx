import Link from "next/link";
import DCSelector from "./DCSelector";
import { useRouter } from "next/router";

export default function SideBar() {
	const links = [
		{ href: "/", label: "Home" },
		{ href: "/recent-activity", label: "Recent Activity" },
	];
	return (
		<div
			id="logo-sidebar"
			className="fixed top-0 left-0 w-[25rem] h-screen transition-transform -translate-x-full sm:translate-x-0"
			aria-label="Sidebar"
		>
			<div className="h-full px-6 py-9 overflow-y-auto">
				<Link href="/" className="mb-5 mt-3 w-full">
					<div className="flex relative items-center w-full h-[9rem]">
						<div className="w-full text-center text-4xl font-[900] font-market dark:text-white">
							XIV Market+
						</div>
					</div>
				</Link>
				<div className="ml-2 mt-9 grid grid-cols-2 gap-3">
					<DCSelector />
					{/* <WorldSelector on_select_world={onSelectWorld} /> */}
				</div>
				<ul className="space-y-2 text-gray-400 font-body font-semibold text-lg mt-5">
					{links.map((link) => (
						<SideBarLink key={link.href} href={link.href} label={link.label} />
					))}
				</ul>
			</div>
		</div>
	);
}

function SideBarLink({ href, label }) {
	const router = useRouter();
	return (
		<li>
			<Link
				href={href}
				className={`{${
					router.pathname == href ? "bg-item text-white" : ""
				} flex items-center p-2 rounded-lg hover:bg-higlight-1 hover:text-white`}
			>
				<svg
					aria-hidden="true"
					className="w-6 h-6 transition duration-75"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
					<path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
				</svg>
				<span className="ml-5">{label}</span>
			</Link>
		</li>
	);
}
