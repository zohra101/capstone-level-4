import React, { useEffect, useState } from "react";
import "../../src/index.scss";
import { handleSubmitEmail } from "../../modules/email/handleSubmitEmail";

export function CreateAccount() {
	const [didMount, setDidMount] = useState(false);

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate);
	useEffect(componentDidUnmount, []);

	return (
		<main>
			<div className="container m-3">
				<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1">
					<div className="col">
						<h3 id="sendEmail">Send an email</h3>
						<p>
							To register for your Nivedana Consulting account, please complete
							the fields below and submit the form.
						</p>
					</div>
				</div>
				<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 center">
					<div className="col">
						<form
							id="outputTag"
							// onSubmit={handleSubmitEmail}
						>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="userEmail">User Email</label>
										<br />
									</span>
									<input
										required
										type="email"
										id="userEmail"
										className="inputs"
										placeholder="address@domain.com"
									/>
								</div>
							</div>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="userName">User Email</label>
										<br />
									</span>
									<input
										required
										type="userName"
										id="userName"
										className="inputs"
										placeholder="YourUserName"
									/>
								</div>
							</div>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="userPassword">User Passaword</label>
										<br />
									</span>
									<input
										required
										type="password"
										id="userPassword"
										className="inputs"
										placeholder="Strong25@pass#"
									/>
								</div>
							</div>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="userPhone">User Phone</label>
										<br />
									</span>
									<input
										required
										type="tel"
										pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
										id="userPhone"
										className="inputs"
										placeholder="01 5555555555"
									/>
								</div>
							</div>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<button className="btn btn-dark animation">Submit</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div id="spinner"></div>
				<div id="outputTag2"></div>
				<br />
			</div>
		</main>
	);

	function componentDidMount() {
		setDidMount(true);
		console.log("The Create Account component mounted.");

		const titleTag = document.getElementById("titleTag");
		titleTag.innerHTML = "Alex M - Create Account ";
	}

	function componentDidUpdate() {
		if (didMount) console.log("The Create Account  component updated.");
	}
	function componentDidUnmount() {
		return function displayMessage() {
			console.log("The Create Account  component unmounted.");
		};
	}
}
