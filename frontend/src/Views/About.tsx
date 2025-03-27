import React, { useEffect, useState } from "react";
import alexHoli from "../../assets/images/alex.png";
import "../../src/index.scss";

export function About() {
	const [didMount, setDidMount] = useState(false);

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate);
	useEffect(componentDidUnmount, []);

	return (
		<main className="p-1">
			<div className="container">
				<div className="row">
					<div className="col-12 border">
						<h3
							id="aboutSite"
							className="emphasis newSection"
						>
							About this website
						</h3>
					</div>
					<div className="col-12 border">
						<p>
							I created this website using CSS, HTML, and JavaScript, storing my
							code in GitHub and using VS Code for coding and debugging. For
							CSS, I used a mix of Bootstrap, an external sheet for the resume
							page, and internal styles. Very few elenents have inline styles,
							to make maintenance and updates easier and more efficient.
						</p>
						<p>
							For the resume page, I used an external style sheet instead of
							Bootstrap to have more selection of colors. I designed the PDF
							version of the resume using Adobe InDesign.
						</p>
					</div>
					<div className="col-12 border">
						<h3 id="aboutMe">About me</h3>
					</div>
					<div className="col-3 border">
						<img
							src={alexHoli}
							alt="alex"
							style={{ width: "100%" }}
							className="ms-1"
						/>
					</div>
					<div className="col-9 border">
						<p>
							During high school (in New Jersey), my dad wanted to buy me a
							really big present. "Do you want a computer like your cousins? Or
							something else?" And so began my war between art and computing. A
							writer since third grade, I served as the co-editor-in-chief of
							both the school paper and yearbook (thankfully, not in the same
							year!) and graduated with both journalism and programming classes.
							At university, I dropped computer science because debugging made
							me miserable. I had more fun around books, old things, and people
							so after a very brief fling with finance, I majored in English and
							Italian language and literature, with a minor in Mediaeval Studies
							focused on European history. (Yes, I am less or more a member of
							the SCA.)
						</p>
						<p>
							What can you do with an English degree? Almost anything! After
							selling computers and office machines at Sears, I joined inbound
							sales and then technical supoort at a call center, until the
							company went out of business. On a sales force automation help
							desk, supporting CRM software and equipment for biotech and pharma
							sales representatives, I trainied new techs and wrote a lot of
							SOPs. Working directly with both clients and technical staff gave
							me unparalleled insight into the needs of users of different
							literacy levels (computer and verbal), backgrounds, experiences,
							and goals.
						</p>
						<p>
							Have you tried explaining that after being on the phone all day,
							talking on the phone is the last thing you want to do? Yeah, only
							someone who has done it understands. Hoping an advanced degree
							would improve my social life, I researched programs in
							communications, creative writing, and Italian, and came across
							technical writing. Realizing this field could stop the war,
							combining my loves for literature and technology, plus allow more
							energy for people outside work, I enrolled in a fantastic
							certificate program at the New Jersey Institute of Technology, and
							rolled right into the Master's.
						</p>
						<p>
							Computer-based training, knowledge management, and user-centered
							design research completed, I escaped the snow by moving to Baton
							Rouge, LA, to become a business intelligence developer. (You read
							that correctly, not a technical writer.) I always liked tinkering
							with databases, and spent work breaks with accountants and data
							analysts, so why not? When the BI team moved under the Application
							Development umbrella, developers and managers alike were excited
							to acquire a technical writer to take over documenting the
							software they produced. I've been at least a part-time technical
							writer in every role I've held since.
						</p>
					</div>
				</div>
			</div>
		</main>
	);

	function componentDidMount() {
		setDidMount(true);
		console.log("The About component mounted.");

		const titleTag = document.getElementById("titleTag");
		titleTag.innerHTML = "Alex M - About";
	}

	function componentDidUpdate() {
		if (didMount) console.log("The About component updated.");
	}

	function componentDidUnmount() {
		return function displayMessage() {
			console.log("The About component unmounted.");
		};
	}
}
