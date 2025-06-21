import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
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
import { Provider } from "react-redux";
import { store } from "./modules/state/store";


const bodyTag = document.getElementById("bodyTag");
const root = createRoot(bodyTag);
const rootPath = getRootPath();

root.render(
	<Provider store={store}>
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
						path={`${rootPath}/message`}
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
	</Provider>
);
