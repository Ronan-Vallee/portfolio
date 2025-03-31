"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
	{ name: "Accueil", path: "/" },
	{ name: "Contact", path: "/contact" },
];

export default function Navbar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	const menuVariants = {
		closed: {
			opacity: 0,
      height: 0,
			transition: {
				staggerChildren: 0.05,
				staggerDirection: -1,
			},
		},
		open: {
			opacity: 1,
      height: "auto",
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		closed: { opacity: 0, y: -10 },
		open: { opacity: 1, y: 0 },
	};

	return (
		<header className="fixed top-0 left-0 w-full z-50">
			<nav className="max-w-[90rem] mx-auto px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border">
				<div className="flex items-center justify-between">
					<Link
						href="/"
						className="text-2xl font-bold tracking-tight hover:opacity-80 transition"
					>
						Portfolio<span className="text-primary">.</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<Link
								key={item.path}
								href={item.path}
								className={cn(
									"relative text-sm tracking-widest transition-colors",
									pathname === item.path
										? "text-primary"
										: "text-foreground/70 hover:text-foreground"
								)}
							>
								{item.name}
								{pathname === item.path && (
									<motion.div
										layoutId="activeNav"
										className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-primary"
										transition={{ type: "spring", stiffness: 380, damping: 30 }}
									/>
								)}
							</Link>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden flex items-center"
						onClick={() => setIsOpen(!isOpen)}
						aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<motion.div
						className="md:hidden flex flex-col py-3 space-y-6"
						initial="closed"
						animate={isOpen ? "open" : "closed"}
						variants={menuVariants}
					>
						{navItems.map((item) => (
							<motion.div
								key={item.path}
								variants={itemVariants}
								className="text-center"
							>
								<Link
									href={item.path}
									className={cn(
										"tracking-wider",
										pathname === item.path
											? "text-primary"
											: "text-foreground/70"
									)}
									onClick={() => setIsOpen(false)}
								>
									{item.name}
								</Link>
							</motion.div>
						))}
					</motion.div>
				)}
			</nav>
		</header>
	);
}
