import { Send } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export default function SubmitFormButton() {
	const { pending } = useFormStatus();

	return (
		<Button type="submit" className="w-full group" disabled={pending}>
			<span>{pending ? "Envoi en cours..." : "Envoyer le message"}</span>
			<Send className="ml-2 w-4 transition-transform group-hover:translate-x-1" />
		</Button>
	);
}
