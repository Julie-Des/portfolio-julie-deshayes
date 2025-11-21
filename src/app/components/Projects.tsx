"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/context/TranslationContext";
import { projectsData } from "@/data/projectsData";
import ProjectCard from "./ProjectCard";
import Image from "next/image";


const PROJECT_IDS = [1, 2, 3, 4, 5, 6] as const;

export type ProjectKey = `card${typeof PROJECT_IDS[number]}`;

export default function Projects() {
	const { translations, tr } = useTranslation();
	const [activeId, setActiveId] = useState<number | null>(null);

	// Close the active card when clicked outside
	useEffect(() => {
		const handleClickOutside = () => setActiveId(null);
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<section
			id="projects"
			className="bg-white pt-12 pb-12 flex flex-col items-center px-10 sm:px-20 lg:px-30 scroll-mt-[104]"
		>
			<div className="relative">
				<h3 className="title">{translations.projects.title}</h3>
				<Image
					src="/icons/arrow-pink.png"
					alt=""
					width={100}
					height={100}
					loading="lazy"
					className="absolute left-[-55px] sm:left-[-70px] lg:left-[-100px] top-[-20px] rotate-[144deg] w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
				/>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full max-w-[1200px] pt-2.5">
				{projectsData.map((project) => (
					<ProjectCard
						key={project.id}
						title={tr(project.titleKey)}
						technos={tr(project.technosKey)}
						image={project.image}
						altImage={project.imageAltKey}
						logo={project.logo}
						altLogo={project.logoAltKey}
						detailsKey={`card${project.id}` as ProjectKey}
						github={project.github}
						link={project.link}
						isActive={activeId === project.id}
						onToggle={() => setActiveId(activeId === project.id ? null : project.id)}
					/>
				))}
			</div>
		</section>
	);
}
