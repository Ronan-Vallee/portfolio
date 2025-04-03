"use client";

import { projects } from "@/lib/data";
import { useState } from "react";
import AnimatedText from "../animations/animated-text";
import FadeIn from "../animations/fade-in";
import ProjectCard from "../project-card";

const categories = [
	{ id: "all", label: "Tous les projets" },
	{ id: "mobile", label: "Applications Mobile" },
	{ id: "web", label: "Applications Web" },
	{ id: "other", label: "Autres projets" },
];

interface ProjectsSectionProps {
	hideTitle?: boolean;
}

export default function ProjectsSection({
	hideTitle = false,
}: ProjectsSectionProps) {
	const [activeCategory, setActiveCategory] = useState("all");

	const filteredProjects =
		activeCategory === "all"
			? projects
			: projects.filter((project) => project.category === activeCategory);

	return (
		<section className={hideTitle ? "" : "py-20 bg-accent/5"}>
			<div className="container mx-auto px-4">
				{!hideTitle && (
					<FadeIn>
						<h2 className="text-3xl md:text-4xl font-bold mb-2">Mes Projets</h2>
						<p className="text-muted-foreground mb-12">
							Découvrez une sélection de mes réalisations récentes
						</p>
					</FadeIn>
				)}

				<div className="flex flex-wrap gap-3 mb-10">
					{categories.map((category) => (
						<button
							key={category.id}
							onClick={() => setActiveCategory(category.id)}
							className={`px-4 py-2 rounded-full text-sm transition-colors ${
								activeCategory === category.id
									? "bg-primary text-primary-foreground"
									: "bg-muted text-foreground hover:bg-muted/80"
							}`}
						>
							{category.label}
						</button>
					))}
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{filteredProjects.map((project, index) => (
						<ProjectCard key={project.id} project={project} index={index} />
					))}
				</div>

				{filteredProjects.length === 0 && (
					<AnimatedText
						text="Aucun projet dans cette catégorie pour le moment."
						className="text-center text-muted-foreground py-20"
					/>
				)}
			</div>
		</section>
	);
}
