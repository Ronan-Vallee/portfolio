"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

type PortfolioTitleProps = {
	className?: string;
};

export default function PortfolioTitle({ className }: PortfolioTitleProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Link
			href="/"
			className={cn(
				"text-xl font-bold inline-flex items-center tracking-tight hover:opacity-80 transition",
				className
			)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<span>Portfolio </span>
			<AnimatePresence initial={false}>
				{isHovered ? (
					<motion.span
						initial={{ opacity: 0, width: 0 }}
						animate={{ opacity: 1, width: "auto" }}
						exit={{ opacity: 0, width: 0 }}
						transition={{ duration: 0.3 }}
						className="overflow-hidden whitespace-nowrap ml-2"
					>
						VALLÉE Ronan
					</motion.span>
				) : null}
			</AnimatePresence>
			<span className="text-primary">.</span>
		</Link>
	);
}
