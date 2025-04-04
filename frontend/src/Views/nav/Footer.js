import React from "react";
import copyright from "../../../assets/icons/copyright_cGainsboro_nobg.png";

export function Footer() {
	return (
			<footer>
				<hr />
				<div className="m-2">
					{" "}
					2024{" "}
					<img
						id="copyright"
						width="15px"
						src={copyright}
					/>{" "}
					Aleksandra Marjanovic
				</div>
			</footer>
	);
}
