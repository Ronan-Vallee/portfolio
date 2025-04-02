import { Project } from "@/types/project";

export const projects: Project[] = [
	{
		id: "iko",
		title: "iko - Covoiturage événementiel",
		description:
			"iko est une application de covoiturage dédiée aux événements, permettant aux utilisateurs de trouver des trajets partagés pour des concerts, festivals et autres événements. L'application a été téléchargée plusieurs milliers de fois et comprend de nombreux partenariats avec des festivals partout en France, mais aussi des clubs de sport (Ligue 1, Ligue 2, etc)",
		shortDescription: "Application de covoiturage pour événements, en Flutter",
		coverImage: "/screen.png",
		technologies: [
			"Flutter",
			"Dart",
			"Firebase",
			"Cloud Firestore",
			"Firebase Auth",
			"Mangopay",
			"Mapbox",
			"FastAPI",
		],
		verticalScreenshots: ["/screen.png"],
		category: "mobile",
		horizontalScreenshots: ["/screen.png"],
		projectURL: "https://iko-app.fr",
	},
];
