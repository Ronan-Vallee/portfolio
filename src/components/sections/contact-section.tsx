"use client";

import { motion } from "framer-motion";
import FadeIn from "../animations/fade-in";
import ContactForm from "../contact/contact-form";
import NetworkInfos from "../contact/network-infos";

export default function ContactSection() {
	return (
		<section className="py-20 bg-gradient-to-b from-background to-accent/20">
			<div className="container mx-auto px-4">
				<FadeIn>
					<h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
						Me Contacter
					</h2>
					<p className="text-muted-foreground mb-12 text-center max-w-xl mx-auto">
						Vous avez un projet en tête ou vous souhaitez collaborer ?
						N&apos;hésitez pas à me contacter !
					</p>
				</FadeIn>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					<FadeIn
						direction="right"
						className="bg-card p-6 rounded-lg shadow-lg border border-border"
					>
						<ContactForm />
					</FadeIn>

					<FadeIn direction="left" className="flex flex-col justify-center">
						<NetworkInfos />

						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="p-6 bg-muted rounded-lg"
						>
							<h4 className="font-bold mb-2">
								Disponible pour des missions freelance ou pour un CDI
							</h4>
							<p className="text-sm text-muted-foreground">
								Je suis actuellement à la recherche de nouvelles opportunités
								passionnantes.
							</p>
						</motion.div>
					</FadeIn>
				</div>
			</div>
		</section>
	);
}
