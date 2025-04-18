import React from "react";
import copyright from "../../../assets/icons/copyright_cGainsboro_nobg.png";
import { TestBackend } from "../TestBackend";
import { AuthenticateDynamoDB } from "../AuthenticateDynamoDB";

export function Footer() {
	return (
		<footer>
			<hr />
			<div className="m-2">
				{" "}
				2025{" "}
				<img
					id="copyright"
					width="15px"
					src={copyright}
				/>{" "}
				Aleksandra Marjanovic
			</div>
			<div>
				<TestBackend />
			</div>
			<div>
				<AuthenticateDynamoDB/>
			</div>
		</footer>
	);
}
