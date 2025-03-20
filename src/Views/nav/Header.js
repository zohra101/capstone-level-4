import React from "react";
import { NavbarCollapsible } from "./NavbarCollapsible.js";
import { ImageMap } from "./ImageMap.js";

export function Header() {
	return (
		<header>
			<NavbarCollapsible />
			<ImageMap />
		</header>
	);
}
