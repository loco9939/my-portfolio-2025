"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{ id: "home", href: "/", label: "Home" },
	{ id: "about", href: "/about", label: "About" },
	{ id: "project", href: "/project", label: "Project" },
];

export default function Navigation() {
	const pathname = usePathname();
	return (
		<nav>
			<ul className="flex justify-center gap-4">
				{links.map((link) => (
					<li key={link.id}>
						<Link
							href={link.href}
							className={`${pathname === link.href ? "text-blue-500" : ""} text-[24px]`}
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
