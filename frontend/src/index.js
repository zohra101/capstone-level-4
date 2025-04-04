import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
<<<<<<<< HEAD:frontend/src/index.tsx
import "../src/index.scss";
import { Home } from "../src/Views/home/Home";
import { About } from "../src/Views/About";
import { AlexResume } from "../src/Views/AlexResume";
import { Portfolio } from "../src/Views/Portfolio";
import { getRootPath } from "../src/utils/getRootPath";
import { Header } from "../src/Views/nav/Header";
import { Footer } from "../src/Views/nav/Footer";
import { HandleRefresh } from "../src/Views/nav/HandleRefresh";
import { Consultation } from "./Views/Consultation";
import { Message } from "./Views/Message";


========
import "./index.scss";
import { Home } from "./Views/home/Home.js";
import { About } from "./Views/About.js";
import { AlexResume } from "./Views/AlexResume.js";
import { ScheduleFreeConsultation } from "./Views/ScheduleFreeConsultation.js";
import { Contact } from "./Views/Contact.js";
import { Portfolio } from "./Views/Portfolio.js";
import { getRootPath } from "./utils/getRootPath.js";
import { Header } from "./Views/nav/Header.js";
import { Footer } from "./Views/nav/Footer.js";
import { HandleRefresh } from "./Views/nav/HandleRefresh.js";
>>>>>>>> ts-config:frontend/src/index.js

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
					element={<Message />}
				/>
				<Route
					path={`${rootPath}/schedulefreeconsultation`}
					element={<Consultation />}
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
