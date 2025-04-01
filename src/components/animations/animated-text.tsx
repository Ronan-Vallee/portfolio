"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FC } from "react";

interface AnimatedTextProps {
	text: string;
	className?: string;
}

const AnimatedText: FC<AnimatedTextProps> = ({ text, className = "" }) => {
	const words = text.split(" ");

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.25,
				delayChildren: 0.1,
			},
		},
	};

	const childVariants = {
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
			},
		},
		hidden: {
			opacity: 0,
			y: 20,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
			},
		},
	};

	return (
		<motion.h1
			className={cn(`font-bold text-pretty mb-6`, className)}
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			{words.map((word, index) => (
				<motion.span
					key={index}
					variants={childVariants}
					className="inline-block mr-5"
				>
					{word}
				</motion.span>
			))}
		</motion.h1>
	);
};

export default AnimatedText;
