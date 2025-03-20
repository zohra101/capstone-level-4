import React, { useEffect, useState } from "react";
import adminGuide from "../../assets/images/admin_guide_1_1024.png";
import helpFile from "../../assets/images/help_file_1_1024.png";
import policyDoc from "../../assets/images/policy_IT_1_1024.png";
import softwareManual from "../../assets/images/manual_1_1024.png";
import storyboards from "../../assets/images/storyboards.png";
import uxWriting from "../../assets/images/ux_writing.png";
import wireframe from "../../assets/images/wireframe.png";
import workflowDiagram from "../../assets/images/workflow_diagram.png";
import "../../src/index.scss";

export function Portfolio() {
	const [didMount, setDidMount] = useState(false);

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate);
	useEffect(componentDidUnmount, []);

	return (
		<main id="mainTag">
			<div className="container ms-2 center">
				<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1">
					<div classNanme="col">
						<div className="alert alert-secondary alert-dismissible w-75 center mb-5">
							<strong>Coming soon!</strong> You'll be able to click on the
							images to view larger samples with more details about the
							projects.
							<button
								className="btn-close"
								data-bs-dismiss="alert"
							></button>
						</div>
					</div>
				</div>
				<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1">
					<div classNanme="col"></div>
					<h2>Projects</h2>
					<p>
						Here's a sampling of current and past projects to which I've
						contributed.
					</p>
					<p>
						Many projects involve propietary information or sensitive data. To
						protect the confidentiality and privacy of my clients and/or
						employers, most samples are generic representations of the
						deliverables produced. Any samples that contain actual work are from
						defunct companies with any data redacted.
					</p>
					<br />
				</div>
				<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 center">
					<div classNanme="col">
						<div
							id="portfolioCarousel"
							className="carousel carousel-dark slide m-4 "
							data-bs-ride="carousel"
						>
							<div className="carousel-indicators">
								<button
									type="button"
									data-bs-target="#portfolioCarousel"
									data-bs-slide-to="0"
									className="active"
									aria-current="true"
									aria-label="Slide 1"
								></button>
								<button
									type="button"
									data-bs-target="#portfolioCarousel"
									data-bs-slide-to="1"
									aria-label="Slide 2"
								></button>
								<button
									type="button"
									data-bs-target="#portfolioCarousel"
									data-bs-slide-to="2"
									aria-label="Slide 3"
								></button>
								<button
									type="button"
									data-bs-target="#portfolioCarousel"
									data-bs-slide-to="3"
									aria-label="Slide 4"
								></button>
								<button
									type="button"
									data-bs-target="#portfolioCarousel"
									data-bs-slide-to="4"
									aria-label="Slide 5"
								></button>
							</div>
							<div className="carousel-inner">
								<div
									className="carousel-item active"
									data-bs-interval="10000"
								>
									<img
										src={adminGuide}
										className="d-block w-75 center"
										alt="adminGuide"
									/>
									<div className="carousel-caption d-none d-md-block">
										<div
											id="adminGuideTag"
											className="card w-75 m-5 list-group-item-color1 text-center"
										>
											<div className="card-body m-2">
												<div className="card-title list-group-item-text1">
													<h5>Administrator guide for software</h5>
												</div>
												<div className="card-text mb-3 list-group-item-text1 text-start">
													To reduce information overload, I separate manuals for
													each application into an administrator guide and a
													user guide.
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									className="carousel-item"
									data-bs-interval="10000"
								>
									<img
										src={helpFile}
										className="d-block w-75 center"
										alt="helpFile"
									/>
									<div className="carousel-caption d-none d-md-block">
										<div
											id="helpFileTag"
											className="card w-75 m-5 list-group-item-color1 text-center"
										>
											<div className="card-body m-2">
												<div className="card-title list-group-item-text1">
													<h5>Help file for a website</h5>
												</div>
												<div className="card-text mb-3 list-group-item-text1 text-start">
													Using RoboHelp, I created this help system as an
													assignment for a course on knowledge management and
													computer-based training design.
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									className="carousel-item"
									data-bs-interval="10000"
								>
									<img
										src={policyDoc}
										className="d-block w-75 center"
										alt="policyDoc"
									/>
									<div className="carousel-caption d-none d-md-block">
										<div
											id="policyTag"
											className="card w-75 m-5 list-group-item-color1 text-center"
										>
											<div className="card-body m-2">
												<div className="card-title list-group-item-text1">
													<h5>Policy for software development department</h5>
												</div>
												<div className="card-text mb-3 list-group-item-text1 text-start">
													I performed a gap analysis and drafted policy and
													procedure documents for an application development
													director working on the group's CMMI certification.
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									className="carousel-item"
									data-bs-interval="10000"
								>
									<img
										src={softwareManual}
										className="d-block w-75 center"
										alt="softwareManual"
									/>
									<div className="carousel-caption d-none d-md-block">
										<div
											id="manualTag"
											className="card w-75 m-5 list-group-item-color1 text-center"
										>
											<div className="card-body m-2">
												<div className="card-title list-group-item-text1">
													<h5>Manual for custom software implementation</h5>
												</div>
												<div className="card-text mb-3 list-group-item-text1 text-start">
													I was asked to consolidate a third-party vendor's help
													file and hundreds of documents from two business
													divisions into a user manual.
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									className="carousel-item"
									data-bs-interval="10000"
								>
									<img
										src={storyboards}
										className="d-block w-100 center"
										alt="storyboards"
									/>
									<div className="carousel-caption d-none d-md-block">
										<div
											id="manualTag"
											className="card w-75 m-5 list-group-item-color1 text-center"
										>
											<div className="card-body m-2">
												<div className="card-title list-group-item-text1">
													<h5>Storyboards for help desk intranet</h5>
												</div>
												<div className="card-text mb-3 list-group-item-text1 text-start">
													While at graduate schoool specializing in
													user-centered design, I designed these storyboards to
													illustrate how a centralized intranet could improve
													efficiency and satisfaction among help desk employees.
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<button
								className="carousel-control-prev"
								type="button"
								data-bs-target="#portfolioCarousel"
								data-bs-slide="prev"
							>
								<span
									className="carousel-control-prev-icon"
									aria-hidden="true"
								></span>
								<span className="visually-hidden">Previous</span>
							</button>
							<button
								className="carousel-control-next"
								type="button"
								data-bs-target="#portfolioCarousel"
								data-bs-slide="next"
							>
								<span
									className="carousel-control-next-icon"
									aria-hidden="true"
								></span>
								<span className="visually-hidden">Next</span>
							</button>
						</div>
						<br />
					</div>
				</div>
				<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1">
					<div classNanme="col">
						<p>
							For samples not represented here, please{" "}
							<a href="contact.html#sendMessage">submit a request</a> by
							completing the form on my Contact page.
						</p>
					</div>
				</div>
			</div>
		</main>
	);

	function componentDidMount() {
		setDidMount(true);
		console.log("The Portfolio component mounted.");

		const titleTag = document.getElementById("titleTag");
		titleTag.innerHTML = "Alex M - Portfolio";
	}

	function componentDidUpdate() {
		if (didMount) console.log("The Portfolio component updated.");
	}
	function componentDidUnmount() {
		return function displayMessage() {
			console.log("The Portfolio component unmounted.");
		};
	}
}
