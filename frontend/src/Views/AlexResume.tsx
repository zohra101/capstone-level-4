import React, { useEffect, useState } from "react";
import "./AlexResume.scss";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../modules/state/store";
import { selectAlexResumeDidMount } from "../modules/state/stateSelectors";

export function AlexResume() {
	// const [didMount, setDidMount] = useState(false);
	const alexResumeDidMount = useSelector(selectAlexResumeDidMount);
	const dispatch = useDispatch();

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate);
	useEffect(componentDidUnmount, []);

	return (
		<main id="resumeMain">
			<div className="container ms-0">
				<div className="row row-cols-1 row-cols-md-1 row-cols-lg-1">
					<div className="col">
						<h2>SUMMARY</h2>
						<p>
							Experienced Technical Writer with over 10 years of expertise in
							transforming complex information into clear, user-friendly
							documentation that enhances product usability and customer
							satisfaction.{" "}
						</p>
						<p>
							With a sharp eye for detail and a design philosophy centered on
							clean, intuitive layouts, I enhance user experience while
							translating complex technology into accessible language; I’m an
							expert in creating and maintaining documentation standards, help
							files, policies, procedures, style guides, system manuals,
							templates, and user guides.
						</p>
						<p>
							My strong background in software development, project management,
							technical support, and training—coupled with excellent
							communication, analytical, and interpersonal skills—helps me
							succeed in fostering alignment across teams and in collaborating
							with subject matter experts and stakeholders.
						</p>
					</div>
				</div>
				<div className="row row-cols-2 row-cols-md-2 row-cols-lg-2">
					<div className="col">
						<h2>SKILLS</h2>
						<p>
							<span id="skill">Collaboration: </span>Dropbox, Google Drive,
							Docs, Sheets; Discord, GoogleMeet, Slack, Teams, WebEx, Zoom
						</p>
						<p>
							<span id="skill">Design: </span>Adobe Acrobat, FrameMaker,
							InDesign, Photoshop, RoboHelp; DocuSign, Figma, FoxIt, Help and
							Manual, MadCap Flare; Microsoft Excel, PowerPoint, Visio, Word
						</p>
						<p>
							<span id="skill">Development: </span>CSS, GitHub, Glitch, HTML,
							JavaScript, SQL, XML; SQL Server Management Studio, SQL Server
							Reporting Services (SSRS), Team Foundation Server (TFS), Test
							Manager, VS Code
						</p>
						<p>
							<span id="skill">Languages: </span>English, French, Italian
						</p>
						<p>
							<span id="skill">Project Management: </span>Asana, Jira, Microsoft
							Project; SQL Server Management Studio, SQL Server Reporting
							Services (SSRS), Team Foundation Server (TFS), Test Manager,
							Visual Studio
						</p>
					</div>
					<div className="col">
						<h2>CERTIFICATIONS</h2>
						<p>
							<span id="skill">Full Stack Developer</span>
							<br /> CodeX Academy (in progress)
						</p>
						<p>
							{" "}
							<span id="skill">Cybersecurity Foundations</span>
							<br />
							LinkedIn
						</p>
						<p>
							<span id="skill">Rajasthani Dance</span>
							<br />
							Council of International Dance - UNESCO
						</p>
						<p>
							<span id="skill">RYT200 Registered Yoga Teacher</span>
							<br />
							Yoga Path/Yoga Alliance
						</p>
						<p>
							<span id="skill">Master Writer</span>
							<br />
							Society for Technical Communication
						</p>
						<p>
							<span id="skill">A+ and Network+</span>
							<br />
							(CompTIA)
						</p>
					</div>
				</div>
				<div className="row row-cols-2 row-cols-md-2 row-cols-lg-2">
					<div className="col">
						<h2>EDUCATION</h2>
						<p>
							<span id="skill">
								Master's in Professional and Technical Communication
							</span>
							<br />
							(MS) New Jersey Institute of Technology
						</p>
						<ul>
							<li>
								Specialized in user-centered design and usability engineering
							</li>
							<li>
								Researched a help desk knowledge management system and developed
								storyboards
							</li>
						</ul>
						<p>
							<span id="skill">Bachelor's in English and Italian</span>
							<br />
							(BA) Rutgers University
						</p>
					</div>
					<div className="col">
						<h2>HONORS</h2>
						<p>
							<span id="skill">
								Embracing Worldwide Differences Certificate
							</span>
							<br />
							CRIF Lending Solutions
						</p>
						<p>
							<span id="skill">Employee of the Quarter</span>
							<br />
							CRIF Lending Solutions
						</p>
						<p>
							<span id="skill">Garden State Distinguished Scholar</span>
							<br />
							State of New Jersey
						</p>
					</div>
				</div>
				<div className="row row-cols-2 row-cols-md-2 row-cols-lg-2">
					<div className="col"></div>
					<h2>PROFESSIONAL EXPERIENCE</h2>
					<h3>Owner/Technical Writer</h3>
					<h4> Nivedana Consulting/Freelancer (Remote) | Nov 2014 – Present</h4>
					<p>Blurb</p>
					<ul className="ms-5">
						<li>
							Enhanced readability of an environmental solutions firm’s IT
							policies and procedures, including disaster recovery plan, by
							revising content and layout of 24 documents.
						</li>
						<li>
							Penned 17 best of, how-to, and review articles on Android and iOS
							apps for a web magazine.
						</li>
						<li>
							Implemented communication standards on a wellness company website
							by composing privacy policy, translating content, and managing ISO
							code data.
						</li>
					</ul>
					<h3>Consultant</h3>
					<h4>
						<a href="https://insightglobal.com/">Insight Global</a> (Remote) |
						Nov 2021 – Apr 2024
					</h4>
					<p>
						Led business analysis for a state agency’s Agile modernization
						project, updating Unisys mainframe functions to a web-based
						application suite.
					</p>
					<ul className="ms-5">
						<li>
							Championed consistency and user-centered design on a Scrum
							modernization project by adhering to style guides, advocating for
							end users, performing usability testing, and researching trends.
						</li>
						<li>
							Supplemented documentation by developing security diagrams,
							editing release notes and technical specifications, and clarifying
							functionality for end user training.
						</li>
						<li>
							Reduced user story errors by creating a Jira template, training
							business analysts on best practices, and creating priority lists.
							Produced 300+ user stories in 2.5 years.
						</li>
					</ul>
					<h3>Business Analyst/Technical Writer</h3>
					<h4>
						<a href="https://www.dbsysgraph.com/">DB Sysgraph</a> (Baton Rouge,
						LA) | Oct 2018 – Jul 2021
					</h4>
					<p>Blurb</p>
					<ul className="ms-5">
						<li>
							Cut help file delivery time 35% by training 3 colleagues on
							content creation. Created product marketing presentations,
							promotional materials, release notes, and workflow diagrams.
						</li>
						<li>
							Managed an Agile team of 5 to deliver a suite of applications,
							developing close relationships with the client’s CTO and industry
							experts by creating storyboards, specifications, test plans, and
							workshops.
						</li>
						<li>
							Designed a clean and easy to use interface to automate collection
							of complex data for export to a federal agency. Promoted from
							Quality Assurance to Business Analyst after only 6 months.
						</li>
					</ul>
					<h3>Technical Specialist</h3>
					<h4>
						<a href="https://www.meridianlink.com/">MeridianLink</a>/CRIF
						Lending Solutions (Hybrid) | Jun 2015 – Aug 2018
					</h4>
					<p>Blurb</p>
					<ul className="ms-5">
						<li>
							Lowered incident resolution times by creating a knowledge
							management committee. Partnered with delivery managers to analyze
							gaps, and drafted 1st versions of best practices, policies, and
							procedures.
						</li>
						<li>
							Engaged IT management to define configuration and security policy,
							executing 1st projects using new API.
						</li>
						<li>
							Increased revenue from Open Lending interface by 100% over 8
							months by taking ownership of interface and improving
							relationships with clients and vendor. Selected by VP to
							coordinate a new Vendor Relationship Management demo program.
						</li>
					</ul>
					<h3>Project Coordinator/Technical Writer</h3>
					<h4>CB&I/The Shaw Group (Baton Rouge, LA) | Jul 2008– Sept 2014</h4>
					<p>Blurb</p>
					<ul className="ms-5">
						<li>
							Authored 40-page administrator and user guides for web-based.
							Recruited by business systems portfolio manager after producing a
							300-page manual and other training materials as side projects.
						</li>
						<li>
							Improved documentation management by maintaining a SharePoint
							catalog of specifications for 800+ business intelligence reports.
							Designed templates for requirements, specifications, test plans,
							and user guides to improve documentation usability.
						</li>
						<li>
							Helped the Application Development director prepare for CMMI
							certification by performing gap analysis of documents from all
							teams and writing new and updated SOPs.
						</li>
						<li>
							Managed a tool inventory application with over 120 users across
							more than 25 global sites on 9 web servers in the US and
							Australia. Spearheaded efforts to resolve network connectivity
							issue on a major nuclear power construction site and aided in
							creating steering committee to govern global initiatives.
						</li>
					</ul>
				</div>
			</div>
		</main>
	);

	function componentDidMount() {
		// setDidMount(true);
		let action = set.alexResumeDidMount(true);
		dispatch(action);
		console.log("The Resume component mounted.");

		const titleTag = document.getElementById("titleTag");
		titleTag.innerHTML = "Alex M - Resume";
	}

	function componentDidUpdate() {
		if (alexResumeDidMount) console.log("The Resume component updated.");
	}

	function componentDidUnmount() {
		return function displayMessage() {
			console.log("The Resume component unmounted.");
		};
	}
}
