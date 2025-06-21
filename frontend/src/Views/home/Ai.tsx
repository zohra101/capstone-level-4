// USE DEFAULT IMPORTS (INSTEAD OF NAMED IMPORTS) FOR ASSETS
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGlobalAnswer } from "../../modules/state/stateSelectors";
import { set } from "../../modules/state/store";
import { getAnswer } from "../../modules/ai/getAnswer";
import { contextData } from "../../modules/ai/contextData";

export function Ai() {
	const answer = useSelector(selectGlobalAnswer);
	const dispatch = useDispatch();

	return (
		<>
			<div>
				<p
					id="aiTitle"
					className="aiTitle"
				>
					To search forinformation on this site, enter a question below and
					click submit for the answer.
				</p>
				<div className="mt-3">
					<form onSubmit={handleSubmit}>
						<div className="aiTitle bold">
							Question <br />
							<input
								type="text"
								name="question"
								placeholder="What is your name?"
							/>
						</div>
						<br />
						<div>
							<br />
							<input
								type="submit"
								className="btn btn-dark"
							/>
						</div>
						<br />
						<div
							id="answer"
							className="row"
						>
							<div className="col-12 col-lg-8">
								<div className="card w-100">
									<div className="card-title aiTitle bold">Answer</div>
									<div className="card-header">{answer}</div>
								</div>
							</div>
						</div>
						<br />
					</form>
				</div>
			</div>
		</>
	);

	async function handleSubmit(event: any) {
		event.preventDefault();
		const form = event.target.elements;
		const question = form.question.value;
		const context = contextData;
		const answer = await getAnswer(question, context);
		const action = set.globalAnswer(answer);
		dispatch(action);
	}
}
