"use client";

import { useActionState, useRef } from "react";
import { ContactFormState, sendEmail } from "../../actions/email";
import SubmitFormButton from "./submit-form-button";

const initialState: ContactFormState = {
	type: null,
	message: "",
};

export default function ContactForm() {
	const [state, formAction] = useActionState(sendEmail, initialState);
	const formRef = useRef<HTMLFormElement>(null);

	if (state.type === "success" && formRef.current) {
		formRef.current.reset();
	}

	return (
		<form className="space-y-4" action={formAction} ref={formRef}>
			<div>
				<label htmlFor="name" className="block text-sm font-medium mb-1">
					Nom
				</label>
				<input
					type="text"
					id="name"
					name="name"
					className="w-full p-3 rounded-md border border-input bg-transparent focus:outline-none focus:ring-1 focus:ring-primary"
					required
				/>
			</div>

			<div>
				<label htmlFor="email" className="block text-sm font-medium mb-1">
					Email
				</label>
				<input
					type="email"
					id="email"
					name="email"
					className="w-full p-3 rounded-md border border-input bg-transparent focus:outline-none focus:ring-1 focus:ring-primary"
					required
				/>
			</div>

			<div>
				<label htmlFor="message" className="block text-sm font-medium mb-1">
					Message
				</label>
				<textarea
					id="message"
					name="message"
					rows={5}
					className="w-full p-3 rounded-md border border-input bg-transparent focus:outline-none focus:ring-1 focus:ring-primary"
					required
				></textarea>
			</div>

			<SubmitFormButton />

			{state.type && (
				<div
					className={`mt-4 p-3 rounded-md ${
						state.type === "success"
							? "bg-green-100 text-green-700"
							: state.type === "error"
								? "bg-red-100 text-red-700"
								: "bg-blue-100 text-blue-700"
					}`}
				>
					{state.message}
				</div>
			)}
		</form>
	);
}
