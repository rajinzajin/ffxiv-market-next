export default function Footer() {
	return (
		<div className="grid grid-cols-8 mt-[4rem] gap-y-9 text-gray-300 font-[400]">
			<div className="text-center 2xl:text-left col-span-12 2xl:col-span-5 font-body text-md border-gray-500 2xl:border-r">
				Created by{" "}
				<a
					className="text-white"
					href="https://github.com/rajinzajin"
					target="_blank"
				>
					RajinZajin
				</a>
				<br />
				XIV Market+ is not affiliated with SQUARE ENIX.
				<br />
				<br />© 2010 - 2023 SQUARE ENIX CO., LTD. All Rights Reserved.
				<br />
				FINAL FANTASY, FINAL FANTASY XIV, FFXIV are registered trademarks or
				trademarks of Square Enix Holdings Co., Ltd.
				<br />
				Game content and materials are registered trademarks or trademarks of
				Square Enix Co., Ltd.
			</div>

			<div className="col-span-12 2xl:col-span-1 border-gray-500 2xl:border-r flex items-center justify-center">
				<div>
					<div className="flex items-center justify-center mb-5">
						<a
							className="font-body hover:text-white"
							href="https://github.com/rajinzajin/ffxiv-market-plus"
							target="_blank"
						>
							<div className="flex items-center">
								<i className="fa fa-github text-3xl mr-3" />
								Github
							</div>
						</a>
					</div>
					<div className="flex justify-center">
						<a className="font-body hover:text-white" href="/privacy-policy">
							Privacy Policy
						</a>
					</div>

					<div className="flex justify-center mt-2">
						<a
							target="_blank"
							className="font-body hover:text-white"
							href="https://github.com/rajinzajin/ffxiv-market-plus/blob/main/LICENSE"
						>
							MIT License
						</a>
					</div>
				</div>
			</div>
			<div className="col-span-12 2xl:col-span-1 text-lg flex items-center justify-center">
				<div>
					<div>Powered by</div>
					<a
						href="https://universalis.app/"
						className="hover:text-white font-bold"
						target="_blank"
					>
						Universalis
					</a>
				</div>
			</div>
		</div>
	);
}
