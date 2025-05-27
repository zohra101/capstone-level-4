import React from "react";

export function SignInContent(props) {
	const errorMessage = props.errorMessage;
	return (
		<>
			<fieldset className="ms-1">
				<div className="mb-3">
					<label
						htmlFor="email"
						className="htmlForm-label"
					>
						Email address
					</label>
					<input
						type="email"
						required
						className="htmlForm-control ms-3"
						id="email"
						name="userEmail"
						placeholder="name@example.com"
					/>
				</div>
				<div className="mb-3">
					<label
						htmlFor="password"
						className="htmlForm-label"
					>
						Password
					</label>
					<input
						type="password"
						required
						className="htmlForm-control ms-5"
						id="password"
						name = "userPassword"
						placeholder="************"
					/>
				</div>
			</fieldset>
			<div
				className="m-1"
				style={{ color: "red" }}
			>
				{" "}
				{errorMessage}
			</div>
		</>
	);
}
