import React, { useEffect } from "react";
import { HandleQuoteOfTheDay } from "./HandleQuoteOfTheDay";
import { ServicesListGroup } from "./ServicesListGroup";
import "../../../src/index.scss";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../modules/state/store";
import { selectHomeDidMount } from "../../modules/state/stateSelectors";

export function Home() {
	// const [didMount, setDidMount] = useState(false);
	const homeDidMount = useSelector(selectHomeDidMount);
	const dispatch = useDispatch();

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate, [homeDidMount]);
	useEffect(componentDidUnmount, []);

	return (
		<main id="homeMain">
			<div className="container m-6">
				<h1
					id="mixin-welcome"
					className="m-2"
				>
					Welcome
				</h1>
				<h3></h3>
				<HandleQuoteOfTheDay />
				<div
					id="homeIntro"
					className="row row-cols-2 row-cols-md-1 row-cols-lg-1"
				>
					<div className="col">
						<p>
							Hi, I'm Alex Marjanovic, a technical communicator based out of
							Baton Rouge, LA. Originally from New Jersey, I moved south to
							escape the cold and snow, after completing my Master's in
							Professional and Technical Communiction at the New Jersey
							Institute for Technology.
						</p>
						<p>
							I started as a technical writer by documenting the standard
							operating procedures for the technical support and help desk teams
							on which I served, which reminded me that I not only enjoy writing
							and design but also excel. I've also been a video game beta
							tester, translator, business intelligence developer, business
							analyst, quality assurance tester, project manager, content
							writer, transaction developer/implementation specialist, and
							editor.
						</p>
						<p>
							In software development specifically, technical communication
							services are vital for ensuring that complex technical information
							is accessible to both technical and non-technical audiences,
							thereby improving user satisfaction and reducing the need for
							support. But the benefits of clear and effective communication
							apply to any industry.
						</p>
					</div>
				</div>
				<div
					id="homeHelp"
					className="row row-cols-2 row-cols-md-1 row-cols-lg-1"
				>
					<div className="col mt-4">
						<h3>How I can help</h3>
						<p>
							I'm a specialist at translating technology: creating and
							delivering information concisely, clearly, and effectively.
							Bridging the gap between end users and technical experts,
							primarily I create help files, design administrator and user guides, and write
				manuals
		
							that explain how to use products or services. In addition to
							writing the content, I also carefully select or create visual aids
							(charts, diagrams, screenshots, etc.) that help readers understand
							the information presented.
						</p>
						<p>
							During my career in information techonology, I've worked for and
							with organizations in the following industries: retail,
							mail-order, biotechnology and pharamceutical services,
							construction and engineering, loan origination, software
							development, and state government.
						</p>
					</div>
				</div>
				<div
					id="homeServices"
					className="row row-cols-2 row-cols-md-1 row-cols-lg-1"
				>
					<div className="col mt-4">
						<h3>Services</h3>
						<p>
							Whether it's writing user manuals, creating process documentation,
							developing training materials, or editing help files, I ensure
							that content is accessible and tailored to your audience's needs.
							Rates are per hour or per project depending on the complexity,
							scope, and estimated time for completion.
						</p>
					</div>
				</div>
				<div
					id="homeServicesList"
					className="row row-cols-2 row-cols-md-1 row-cols-lg-1"
				>
					<div className="col mt-2">
						<ServicesListGroup />
					</div>
				</div>
				<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1">
					<div className="col mt-4">
						{/* <p>
							If my services seem like a good fit for your organization, please{" "}
							<a href="contact.html#sendMessage">send a message</a> using the
							Contact form.
						</p> */}
						<p>Thanks for visiting!</p>
						<h2 className="signature ms-4 mt-2">Alex Marjanovic</h2>
					</div>
				</div>
			</div>
		</main>
	);

	function componentDidMount() {
		// setDidMount(true);
		let action = set.homeDidMount(true);
		dispatch(action);
		console.log("The Home component mounted.");

		const titleTag = document.getElementById("titleTag");
		titleTag.innerHTML = "Alex M - Home";
	}

	function componentDidUpdate() {
		if (homeDidMount) console.log("The Home component updated.");
	}

	function componentDidUnmount() {
		return () => {
			console.log("The Home component unmounted.");
		};
	}
}
