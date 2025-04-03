import FadeIn from "@/components/animations/fade-in";
import ProjectsSection from "@/components/sections/projects-section";

export default function ProjectsPage() {
	return (
		<section className="pt-36 pb-20">
			<div className="container mx-auto px-4">
				<FadeIn>
					<h1 className="text-4xl md:text-5xl font-bold mb-4">Mes Projets</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mb-16">
						Voici une sélection de projets sur lesquels j&apos;ai travaillé. Ces
						projets démontrent mes compétences en développement
						d&apos;applications mobiles Flutter et en développement web.
					</p>
				</FadeIn>

				<div className="mt-8">
					<ProjectsSection hideTitle={true} />
				</div>
			</div>
		</section>
	);
}
