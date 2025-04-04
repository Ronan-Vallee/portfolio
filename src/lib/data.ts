import { Project } from "@/types/project";

export const projects: Project[] = [
	{
		id: "iko",
		title: "iko - Covoiturage événementiel",
		description:
			"iko est une application de covoiturage dédiée aux événements, permettant aux utilisateurs de trouver des trajets partagés pour des concerts, festivals et autres événements. L'application a été téléchargée plusieurs milliers de fois et comprend de nombreux partenariats avec des festivals partout en France, mais aussi des clubs de sport (Ligue 1, Ligue 2, etc). L'application est disponible sur les stores mais également en version web, sans téléchargement.",
		shortDescription: "Application de covoiturage pour événements, en Flutter",
		coverImage: "/images/iko/portfolio.png",
		technologies: [
			"Flutter",
			"Dart",
			"Mapbox",
			"Mangopay",
			"Firebase",
			"Cloud Firestore",
			"Firebase Auth",
			"FastAPI",
			"Clean Architecture",
			"BLoC",
			"Hive",
		],
		verticalScreenshots: [
			"/images/iko/home.jpg",
			"/images/iko/map.jpg",
			"/images/iko/booking.jpg",
			"/images/iko/search.jpg",
			"/images/iko/profile.jpg",
		],
		category: "mobile",
		horizontalScreenshots: ["/images/iko/web.png"],
		projectURL: "https://iko-app.fr",
	},
	{
		id: "cuult",
		title: "Cuult' Pro",
		description:
			"Cuult' Pro est un site web pour les professionnels du secteur de l'audiovisuel souhaitant réserver et gérer des séances de diffusion d'événements comme des avant-premières, des débats, des concerts et autres. Le projet utilise Traduora pour gérer en temps réel les traductions en différentes langues. Une maquette était déjà fournie et devait être respectée.",
		shortDescription:
			"Création d'un site web pour les professionnels de l'audiovisuel",
		coverImage: "/images/cuult/cuult.png",
		technologies: [
			"Next.js",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Internationalization",
			"Traduora,",
		],
		category: "web",
		verticalScreenshots: ["/images/cuult/mobile.jpg"],
		horizontalScreenshots: [
			"/images/cuult/home.png",
			"/images/cuult/events.png",
		],
		projectURL: "https://pro.cuult.fr",
	},
	{
		id: "promptimmo",
		title: "Promptimmo",
		description:
			"PROMPTIMMO est une application principalement destinée aux recommandations immobilières. Elle est néanmoins trèss complète et propose de nombreuses fonctionnalités également pour les agents immobiliers PROMPTIMMO. Page d'actualités, messagerie, notes personnelles, gestion de prospects, calendrier de prospection, etc. La refonte graphique était basée sur une maquette déjà fournie, qui devait être respectée",
		shortDescription:
			"Refonte graphique et ajout de fonctionnalités sur une application mobile de recommandations immobilières",
		coverImage: "/images/promptimmo/pres.png",
		technologies: ["Flutter", "Dart", "PHP", "Yii", "Socket.io", "GetX"],
		category: "mobile",
		verticalScreenshots: [
			"/images/promptimmo/actus.png",
			"/images/promptimmo/menu.png",
			"/images/promptimmo/calendrier.png",
			"/images/promptimmo/signup.png",
			"/images/promptimmo/prospects.png",
			"/images/promptimmo/reco.png",
		],
		projectURL:
			"https://play.google.com/store/apps/details?id=com.promptimmo.android&hl=fr",
	},
	{
		id: "iko-widget",
		title: "Widget Web - iko",
		description:
			"Le widget web d'iko a pour but d'être intégré sur le site des événements utilisant la plateforme. Ce widget permet de montrer de manière intéractive les différents moyens de mobilité à disposition pour l'événement.",
		shortDescription: "Widget web intégrable aux sites des événements",
		coverImage: "/images/widget/widget.png",
		technologies: ["Next.js", "React", "Mapbox SDK", "TypeScript"],
		category: "other",
		horizontalScreenshots: [
			"/images/widget/widget.png",
			"/images/widget/full.png",
			"/images/widget/transport.png",
			"/images/widget/carpooling.png",
			"/images/widget/alert.png",
		],
		projectURL: "https://widget.iko-app.fr/47314",
	},
	{
		id: "pm",
		title: "Portail de Mobilité - iko",
		description:
			"Le portail de mobilité d'iko est un backoffice permettant aux organisateurs d'événements de gérer les différents moyens de mobilité à disposition pour leurs événements. Il permet également de gérer les récompenses liées à l'utilisation de la plateforme de covoiturage pour leurs événements.",
		shortDescription:
			"Backoffice de gestion des événements pour les organisateurs",
		coverImage: "/images/pm/pm.png",
		technologies: [
			"Next.js",
			"React",
			"Refine",
			"TypeScript",
			"Mapbox SDK",
			"Firebase",
		],
		category: "web",
		horizontalScreenshots: [
			"/images/pm/pm.png",
			"/images/pm/events.png",
			"/images/pm/event.png",
			"/images/pm/edit.png",
			"/images/pm/edit_2.png",
		],
		projectURL: "https://portail.iko-app.fr/",
	},
	{
		id: "weather",
		title: "Neo-Weather",
		description:
			"Neo-Weather est une application de prévisions météorologiques. Elle utilise l'API Open-Weather pour afficher les prévisions météo et permet d'enregistrer ses villes préférées.",
		shortDescription:
			"Application météo réalisée dans le cadre d'un test technique",
		coverImage: "/images/weather/weather.png",
		technologies: [
			"Flutter",
			"Dart",
			"Open-Weather API",
			"Clean Architecture",
			"BLoC",
		],
		category: "mobile",
		verticalScreenshots: [
			"/images/weather/forecast.png",
			"/images/weather/forecast_2.png",
			"/images/weather/cities.png",
			"/images/weather/search.png",
		],
		githubURL: "https://github.com/Ronan-Vallee/neo-weather",
	},
	{
		id: "task-flow",
		title: "Task-Flow",
		description:
			"Task-Flow est une application de gestion de tâches. Elle permet de créer des listes de tâches, de les organiser par catégories et de suivre leur avancement ainsi que d'avoir des statistiques personelles. L'application utilise Supabase pour la gestion des utilisateurs et des données. La gestion d'état est faite avec Riverpod et l'architecture en MVVM.",
		shortDescription: "Application de gestion de tâches",
		coverImage: "/images/task-flow/cover.png",
		technologies: ["Flutter", "Dart", "Supabase"],
		category: "mobile",
		verticalScreenshots: [
			"/images/task-flow/stats.png",
			"/images/task-flow/dashboard.png",
			"/images/task-flow/signin.png",
			"/images/task-flow/profile.png",
			"/images/task-flow/task.png",
		],
	},
	{
		id: "portfolio",
		title: "Ce portfolio",
		description:
			"Ce portfolio est un projet personnel que j'ai développé pour présenter mes projets et mes compétences. J'ai utilisé Framer Motion pour les animations et Three.js pour utiliser un modèle 3D de smartphone. Le code est disponible sur GitHub.",
		shortDescription:
			"Portfolio personnel pour présenter mes projets et compétences",
		coverImage: "/images/portfolio/cover.png",
		technologies: [
			"Next.js",
			"Framer Motion",
			"Three.js",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"MVVM",
			"Riverpod",
		],
		category: "web",
		githubURL: "https://github.com/Ronan-Vallee/dev-portfolio",
	},
];
