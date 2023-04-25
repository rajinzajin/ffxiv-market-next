import { getAssetPath } from "@/lib/env";
export const bg_custom_ffxiv = {
	backgroundImage:
		`linear-gradient(rgba(var(--rgb-secondary), var(--bg-ffxiv-opacity)), rgba(var(--rgb-secondary), var(--bg-ffxiv-opacity))), url(${getAssetPath()}img/tiny/ffxiv.webp)`,
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
};
