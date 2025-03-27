import React from "react";
import { NavbarCollapsible } from "../nav/NavbarCollapsible";
import { ImageMap } from "../nav/ImageMap";

export function Header() {
	return (
		<header>
			<NavbarCollapsible />
			<ImageMap />
		</header>
	);
}
