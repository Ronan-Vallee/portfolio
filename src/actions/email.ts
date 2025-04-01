"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL!;

const EmailSchema = z.object({
	name: z
		.string()
		.min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
	email: z.string().email({ message: "Format d'email invalide" }),
	message: z
		.string()
		.min(10, { message: "Le message doit contenir au moins 10 caractères" }),
});

export interface ContactFormState {
	type: "success" | "error" | "loading" | null;
	message: string;
}

export async function sendEmail(
	prevState: ContactFormState,
	formData: FormData
): Promise<ContactFormState> {
	const name = formData.get("name") as string;
	const email = formData.get("email") as string;
	const message = formData.get("message") as string;

	const validationResult = EmailSchema.safeParse({ name, email, message });

	if (!validationResult.success) {
		const errorMessage =
			validationResult.error.errors[0]?.message ||
			"Tous les champs sont requis";
		return {
			type: "error",
			message: errorMessage,
		};
	}

	const validatedData = validationResult.data;

	try {
		const { error } = await resend.emails.send({
			from: "Contact Form <onboarding@resend.dev>",
			to: [RECIPIENT_EMAIL],
			subject: `Message de contact de ${validatedData.name}`,
			replyTo: validatedData.email,
			text: `
        Nom: ${validatedData.name}
        Email: ${validatedData.email}
        Message: ${validatedData.message}
      `,
		});

		if (error) {
			console.error("Error sending email:", error);
			return {
				type: "error",
				message: error.message || "Erreur lors de l'envoi du message",
			};
		}

		return {
			type: "success",
			message: "Message envoyé avec succès ! Merci",
		};
	} catch (error) {
		console.error("Error in sendEmail:", error);
		return {
			type: "error",
			message:
				error instanceof Error
					? error.message
					: "Erreur lors de l'envoi du message",
		};
	}
}
