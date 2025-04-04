import React from "react";
import { NavLink } from "react-router";
import { getRootPath } from "../../utils/getRootPath.js";
import linkedInIcon from "../../../assets/icons/icon_linkedin.png";
import emailIcon from "../../../assets/icons/icon_email_coral.png";
import { SignInArea } from "../auth/SignInArea.js";

export function NavbarCollapsible() {
	const rootPath = getRootPath();
	return (
		<nav
			className="navbar nav-tabs navbar-expand-sm"
			style={{ backgroundColor: "rgb(2, 32, 54)" }}>
			<div className="container-fluid">
				<NavLink
					className="navbar-brand"
					style={{
						backgroundColor: "rgb(2, 32, 54)",
						color: "rgb(220, 220, 170)",
					}}
					to="#">
					Alex Marjanovic
				</NavLink>
				<div className="me-1">
					<a
						className="ms-2 bg-dark"
						href="https://www.linkedin.com/in/alexmarjanovic">
						<img
							id="linkedInIcon"
							alt="LinkedIn"
							style={{ height: "45px", width: "45px" }}
							src={linkedInIcon}
						/>
					</a>
				</div>
				<div className="me-3">
					<a href="contact.html#sendMessage">
						<img
							id="emailIcon"
							alt="email"
							style={{ height: "30px", width: "30px" }}
							src={emailIcon}
						/>
					</a>
				</div>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span
						className="navbar-toggler-icon"
						style={{ backgroundColor: "rgb(109, 154, 189)" }}></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<NavLink end
							className="nav-link nav-text"
							aria-current="page"
							to={`${rootPath}/`}>
							Home
						</NavLink>
						<NavLink
							className="nav-link nav-text"
							to={`${rootPath}/portfolio`}>
							Portfolio
						</NavLink>
						<NavLink
							className="nav-link nav-text"
							to={`${rootPath}/alexresume`}>
							Resume
						</NavLink>
						<NavLink
							className="nav-link nav-text"
							to={`${rootPath}/contact`}>
							Contact
						</NavLink>
						<NavLink
							className="nav-link nav-text"
							to={`${rootPath}/schedulefreeconsultation`}>
							Free Consultation
						</NavLink>
						<NavLink
							className="nav-link nav-text"
							to={`${rootPath}/about`}>
							About
						</NavLink>
					</div>
				</div>
				<SignInArea/>
			</div>
		</nav>
	);
}
