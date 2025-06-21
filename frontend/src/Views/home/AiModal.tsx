import React from "react";
import { Ai } from "./Ai";

export function AiModal() {
	return (
		<>
			<button
				type="button"
				className="btn btn-outline-info animation"
				data-bs-toggle="modal"
				data-bs-target="#aiModal"
			>
				Ask AI{" "}
			</button>
			<div
				className="modal fade"
				id="aiModal"
				tabIndex={-1}
				aria-labelledby="aiModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog ">
					<div className="modal-content modal-style">
						<div className="modal-header">
							<h1
								className="modal-title fs-5"
								id="aiModalLabel"
							>
								Ask AI
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body m-2">
							<Ai />
						</div>
						<div className="modal-footer">
							<button
								id="aiCloseButton"
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
								name="closeButton"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
