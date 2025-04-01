import { Metadata } from "next";
import ContactSection from "@/components/sections/contact-section";
import FadeIn from "@/components/animations/fade-in";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
	title: "Contact | Portfolio Développeur Mobile & Web",
	description:
		"Contactez-moi pour discuter de vos projets de développement mobile Flutter et développement web",
};

export default function ContactPage() {
	return (
		<section className="pt-36 pb-10">
			<div className="container mx-auto px-4">
				<FadeIn>
					<h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-moi</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mb-12">
						Vous avez une idée de projet ? Vous recherchez un développeur pour
						renforcer votre équipe ? N&apos;hésitez pas à me contacter.
					</p>
				</FadeIn>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
					{[
						{
							icon: <Mail className="w-6 h-6" />,
							title: "Email",
							description: "rvallee.pro@gmail.com",
							link: "mailto:rvallee.pro@gmail.com",
						},
						{
							icon: <MapPin className="w-6 h-6" />,
							title: "Localisation",
							description: "Paris, France",
							link: null,
						},
						{
							icon: <Clock className="w-6 h-6" />,
							title: "Disponibilité",
							description: "Disponible pour des projets",
							link: null,
						},
					].map((item, index) => (
						<FadeIn key={index} delay={index * 0.1} direction="up">
							<div className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center hover:border-primary/50 transition-colors">
								<div className="bg-accent/10 p-4 rounded-full mb-4">
									{item.icon}
								</div>
								<h3 className="text-xl font-bold mb-2">{item.title}</h3>
								{item.link ? (
									<a
										href={item.link}
										className="text-muted-foreground hover:text-primary transition-colors"
									>
										{item.description}
									</a>
								) : (
									<p className="text-muted-foreground">{item.description}</p>
								)}
							</div>
						</FadeIn>
					))}
				</div>
			</div>

			<ContactSection />
		</section>
	);
}
