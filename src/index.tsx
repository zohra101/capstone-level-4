import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "../src/index.scss";
import { Home } from "../src/Views/home/Home.js";
import { About } from "../src/Views/About.js";
import { AlexResume } from "../src/Views/AlexResume.js";
import { ScheduleFreeConsultation } from "../src//Views/ScheduleFreeConsultation.js";
import { Contact } from "../src//Views/Contact.js";
import { Portfolio } from "../src/Views/Portfolio.js";
import { getRootPath } from "../src/utils/getRootPath.js";
import { Header } from "../src/Views/nav/Header.js";
import { Footer } from "../src/Views/nav/Footer.js";
import { HandleRefresh } from "../src/Views/nav/HandleRefresh.js";

const bodyTag = document.getElementById("bodyTag");
const root = createRoot(bodyTag);
const rootPath = getRootPath();

root.render(
	<BrowserRouter>
		<HandleRefresh>
			<Header />
			<Routes>
				<Route
					path={`${rootPath}/`}
					element={<Home />}
				/>
				<Route
					path={`${rootPath}/portfolio`}
					element={<Portfolio />}
				/>
				<Route
					path={`${rootPath}/alexresume`}
					element={<AlexResume />}
				/>
				<Route
					path={`${rootPath}/contact`}
					element={<Contact />}
				/>
				<Route
					path={`${rootPath}/schedulefreeconsultation`}
					element={<ScheduleFreeConsultation />}
				/>
				<Route
					path={`${rootPath}/about`}
					element={<About />}
				/>
			</Routes>
			<Footer />,
		</HandleRefresh>
	</BrowserRouter>
);
