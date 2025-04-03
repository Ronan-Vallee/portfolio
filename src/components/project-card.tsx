"use client";

import { Project } from "@/types/project";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "./animations/fade-in";
import { Button } from "./ui/button";

interface ProjectCardProps {
	project: Project;
	index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
	return (
		<FadeIn delay={index * 0.1} className="w-full">
			<motion.div
				className="group relative overflow-hidden bg-card rounded-lg border border-border h-full"
				whileHover={{ y: -5 }}
				transition={{ type: "spring", stiffness: 400, damping: 10 }}
			>
				<div className="relative h-56 overflow-hidden">
					<Image
						src={project.coverImage}
						alt={project.title}
						fill
						className="object-cover transition-transform duration-500 group-hover:scale-110"
						sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
					/>
					<div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-30 transition-opacity" />

					<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
						<span className="inline-block px-2 py-1 rounded text-xs font-medium bg-primary/20 backdrop-blur-sm text-primary">
							{project.category === "mobile"
								? "Application Mobile"
								: project.category === "web"
									? "Application Web"
									: "Projet"}
						</span>
					</div>
				</div>

				<div className="p-5">
					<h3 className="text-lg font-bold mb-2">{project.title}</h3>

					<p className="text-sm text-muted-foreground mb-4">
						{project.shortDescription}
					</p>

					<div className="flex flex-wrap gap-2 mb-5">
						{project.technologies.slice(0, 3).map((tech) => (
							<span
								key={tech}
								className="text-xs py-1 px-2 bg-muted rounded-full"
							>
								{tech}
							</span>
						))}
						{project.technologies.length > 3 && (
							<span className="text-xs py-1 px-2 bg-muted rounded-full">
								+{project.technologies.length - 3}
							</span>
						)}
					</div>

					<Link href={`/projets/${project.id}`} className="block">
						<Button className="w-full group" variant="secondary">
							<span>Voir les détails</span>
							<ArrowRight
								size={16}
								className="ml-2 transition-transform group-hover:translate-x-1"
							/>
						</Button>
					</Link>
				</div>
			</motion.div>
		</FadeIn>
	);
}
