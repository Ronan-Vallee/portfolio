"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import PhoneModel from "../3d/phone-model";
import AnimatedText from "../animations/animated-text";
import { Button } from "../ui/button";

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center pt-20">
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<motion.div
					className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-primary/5"
					animate={{
						x: [0, 10, 0],
						y: [0, 15, 0],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						repeatType: "reverse",
					}}
				/>
				<motion.div
					className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-accent/10"
					animate={{
						x: [0, -20, 0],
						y: [0, -10, 0],
					}}
					transition={{
						duration: 10,
						repeat: Infinity,
						repeatType: "reverse",
					}}
				/>
			</div>

			<div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
				<div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h2 className="text-xl md:text-2xl font-medium text-primary mb-4">
							👋 Bonjour, je suis Ronan Vallée
						</h2>
					</motion.div>

					<AnimatedText
						text="Développeur Mobile & Web"
						className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
					/>

					<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
						Je crée des applications mobiles et des expériences web interactives
						avec Flutter, React et les technologies modernes.
					</p>

					<div className="flex flex-wrap gap-4">
						<Button size="lg" asChild>
							<Link href="/projets">Voir mes projets</Link>
						</Button>

						<Button size="lg" variant="outline" asChild>
							<Link href="/contact">Me contacter</Link>
						</Button>
					</div>
				</div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative h-[400px] md:h-[500px] mx-auto w-full max-w-md z-10"
        >
          <PhoneModel 
            screenImage="/screen.png"
            className="h-full"
          />
        </motion.div>
			</div>

			<div className="absolute bottom-10 left-0 right-0 flex justify-center">
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{
						duration: 1.5,
						repeat: Infinity,
						repeatType: "loop",
					}}
				>
					<ArrowDown className="text-primary h-6 w-6" />
				</motion.div>
			</div>
		</section>
	);
}
