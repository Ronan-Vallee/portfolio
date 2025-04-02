import PhoneModel from "@/components/3d/phone-model";
import FadeIn from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectPageProps {
	params: {
		id: string;
	};
}

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { id } = await params;
	const project = projects.find((p) => p.id === id);

	if (!project) {
		notFound();
	}

	return (
		<section className="pt-32 pb-20">
			<div className="container mx-auto px-4">
				<Link href="/projets" className="inline-block mb-8">
					<Button variant="outline" size="sm" className="group">
						<ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
						Tous les projets
					</Button>
				</Link>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
					<FadeIn direction="right">
						<h1 className="text-4xl font-bold mb-4">{project.title}</h1>
						<p className="text-xl text-muted-foreground mb-6">
							{project.shortDescription}
						</p>

						<div className="flex flex-wrap gap-2 mb-8">
							{project.technologies.map((tech) => (
								<span
									key={tech}
									className="text-sm py-1 px-3 bg-muted rounded-full"
								>
									{tech}
								</span>
							))}
						</div>

						<div className="flex flex-wrap gap-4">
							{project.githubURL && (
								<Button asChild>
									<a
										href={project.githubURL}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Github className="mr-2 h-5 w-5" />
										Code source
									</a>
								</Button>
							)}
							{project.projectURL && (
								<Button variant="outline" asChild>
									<a
										href={project.projectURL}
										target="_blank"
										rel="noopener noreferrer"
									>
										<ExternalLink className="mr-2 h-5 w-5" />
										Site live
									</a>
								</Button>
							)}
						</div>
					</FadeIn>

					<FadeIn direction="left">
						{project.category === "mobile" ? (
							<div className="h-[500px]">
								<PhoneModel
									screenImage={
										project.verticalScreenshots?.[0] || project.coverImage
									}
									className="h-full w-full"
								/>
							</div>
						) : (
							<div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg border border-border">
								<Image
									src={project.coverImage}
									alt={project.title}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 50vw"
								/>
							</div>
						)}
					</FadeIn>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
					<FadeIn className="lg:col-span-2">
						<h2 className="text-2xl font-bold mb-6">À propos du projet</h2>
						<div className="prose text-foreground max-w-none">
							<p className="mb-4">{project.description}</p>
						</div>
					</FadeIn>

					<FadeIn delay={0.2}>
						<div className="bg-card rounded-lg p-6 border border-border">
							<h3 className="text-xl font-bold mb-4">Détails du projet</h3>
							<ul className="space-y-4">
								<li>
									<span className="block text-sm text-muted-foreground">
										Type
									</span>
									<span className="block font-medium">
										{project.category === "mobile"
											? "Application Mobile"
											: project.category === "web"
												? "Application Web"
												: "Projet"}
									</span>
								</li>
								<li>
									<span className="block text-sm text-muted-foreground">
										Technologies
									</span>
									<span className="block font-medium">
										{project.technologies.join(", ")}
									</span>
								</li>
							</ul>
						</div>
					</FadeIn>
				</div>

				{(project.verticalScreenshots?.length ||
					project.horizontalScreenshots?.length) && (
					<FadeIn>
						<h2 className="text-2xl font-bold mb-8">Captures d&apos;écran</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
							{project.verticalScreenshots?.map((screenshot, index) => (
								<div
									key={index}
									className="relative aspect-[9/16] rounded-lg overflow-hidden border border-border"
								>
									<Image
										src={screenshot}
										alt={`${project.title} screenshot ${index + 1}`}
										fill
										className="object-cover"
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
									/>
								</div>
							))}

							{project.horizontalScreenshots?.map((screenshot, index) => (
								<div
									key={index}
									className="relative aspect-[16/9] rounded-lg overflow-hidden border border-border"
								>
									<Image
										src={screenshot}
										alt={`${project.title} screenshot ${index + 1}`}
										fill
										className="object-cover"
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
									/>
								</div>
							))}
						</div>
					</FadeIn>
				)}
			</div>
		</section>
	);
}
