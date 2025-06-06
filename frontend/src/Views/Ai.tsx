// USE DEFAULT IMPORTS (INSTEAD OF NAMED IMPORTS) FOR ASSETS
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGlobalAnswer } from "../modules/state/stateSelectors";
import { set } from "../modules/state/store";
import { getAnswer } from "../modules/ai/getAnswer";


export function Ai() {
	const answer = useSelector(selectGlobalAnswer);
	const dispatch = useDispatch();

	return (
		<>
			<div>
				<h1
					id="aiTitle"
					className="aiTitle"
				>
					Use the AI to answer a question
				</h1>
				<div className="mt-3">
					<form onSubmit={handleSubmit}>
						<div>
							Question: <br />
							<input
								name="question"
								defaultValue="What is my name?"
							/>
						</div>
						<br />
						<div>
							Context: <br />
							<textarea
								name="context"
								defaultValue="My name is Alex."
							></textarea>
							<br />
						</div>
						<div>
							<br />
							<input type="submit" />
						</div>
					</form>
				</div>
				<br />
				<div>{answer}</div>
				<br />
			</div>
		</>
	);

	async function handleSubmit(event: any) {
		event.preventDefault();
		const form = event.target.elements;
		const question = form.question.value;
		const context = form.context.value;
		const answer = await getAnswer(question, context);
		const action = set.globalAnswer(answer);
		dispatch(action);
	}
}
