import Image from "next/image";
import GithubIcon from "./icons/GithubIcon";
import Cta from "./CTA";
import { useTranslation } from "@/context/TranslationContext";
import { useState } from "react";

const PROJECT_IDS = [1, 2, 3, 4, 5, 6] as const;
export type ProjectKey = `card${(typeof PROJECT_IDS)[number]}`;

type ProjectCardProps = Readonly<{
	title: string;
	technos: string;
	image: string;
	altImage: string;
	logo: string;
	altLogo: string;
	detailsKey: ProjectKey;
	github: string;
	link: string;
	isActive: boolean;
	onToggle: () => void;
}>;

export default function ProjectCard({
	title,
	technos,
	image,
	altImage,
	logo,
	altLogo,
	detailsKey,
	github,
	link,
	isActive,
	onToggle,
}: ProjectCardProps) {
	const { tr, translations } = useTranslation();
	const [showModal, setShowModal] = useState(false);
	const details = translations.projects[detailsKey];

	const openModal = (e: React.MouseEvent) => {
		e.stopPropagation();
		setShowModal(true);
	};

	const closeModal = (e: React.MouseEvent) => {
		e.stopPropagation();
		setShowModal(false);
	};

	return (
		<div className="relative">
			<div
				onClick={(e) => {
					e.stopPropagation();
					onToggle();
				}}
				className="relative overflow-hidden border-4 border-pink-dark rounded-[15px] shadow-md group h-[240px] w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-dark transition"
			>
				<Image
					src={image}
					alt={tr(altImage)}
					fill
					sizes="(max-width: 440px) 100vw, 400px"
					loading="lazy"
					className={`object-contain bg-pink-light transition-transform duration-500 ease-in-out ${
						isActive ? "scale-110" : "group-hover:scale-110"
					}`}
				/>
				{/* Overlay */}
				<div
					className={`absolute inset-0 flex flex-col bg-green/90 transition-all duration-500 ease-in-out p-4 text-left justify-between ${
						isActive
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0"
					}`}
				>
					<div>
						<h4 className="text-white text-xl mb-2">{title}</h4>
						<p className="text-pink-dark mb-4">{technos}</p>
					</div>
					<div className="flex gap-4 items-center justify-end">
						<a
							href={github}
							target="_blank"
							rel="noopener noreferrer nofollow"
							className="icon-social"
							aria-label="Voir le projet sur Github - ouvre un nouvel onglet"
							onClick={(e) => e.stopPropagation()}
						>
							<GithubIcon className="w-8 h-8" />
						</a>
						<Cta tag="a" text={translations.projects.see} href={link} imageSrc="/icons/arrow-button.png" external />
						<Cta tag="button" text={translations.projects.moreInfo} type="button" onClick={openModal} />
					</div>
				</div>
			</div>

			{/* Logo */}
			<div className="flex justify-center">
				<div className="relative h-[25px] w-[220px] mt-4">
					<Image
						src={logo}
						alt={tr(altLogo)}
						fill
						className="object-contain"
						sizes="(max-width: 768px) 100vw, 220px"
						loading="lazy"
					/>
				</div>
			</div>

			{/* MODALE */}
			{showModal && (
				<div
					className="fixed inset-0 bg-green flex items-center justify-center z-50 p-4"
					onClick={closeModal}
					aria-labelledby="modal-title"
					aria-modal="true"
					role="dialog"
				>
					<div
						className="bg-gradient-to-b from-[#FBEFF3] to-[#FDFDFD] rounded-xl shadow-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 animate-fade-in-scale border-pink-dark border-4"
						onClick={(e) => e.stopPropagation()}
						ref={(el) => el?.focus()}
						tabIndex={-1}
					>
						{/* Close button */}
						<button
							className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl focus:outline-none cursor-pointer"
							onClick={closeModal}
							aria-label="Fermer la modale"
						>
							✕
						</button>

						{/* Title */}
						<h2 id="modal-title" className="text-3xl font-bold mb-6 text-green">
							{title}
						</h2>

						{/* Objectives */}
						<section className="mb-8">
							<h3 className="text-xl font-semibold mb-2">{details.objectives.title}</h3>
							<p className="leading-relaxed text-black-text">{details.objectives.item}</p>
						</section>

						{/* Skills */}
						<section className="mb-8">
							<h3 className="text-xl font-semibold mb-2">{details.skills.title}</h3>
							<ul className="list-disc pl-5 space-y-1 text-black-text">
								{details.skills.items.map((it: string, idx: number) => (
									<li key={idx}>{it}</li>
								))}
							</ul>
						</section>

						{/* Results */}
						<section className="mb-8">
							<h3 className="text-xl font-semibold mb-2">{details.results.title}</h3>
							<ul className="list-disc pl-5 space-y-1 text-black-text">
								{details.results.items.map((it: string, idx: number) => (
									<li key={idx}>{it}</li>
								))}
							</ul>
						</section>

						{/* Improvements */}
						<section className="mb-4">
							<h3 className="text-xl font-semibold mb-2">{details.improvements.title}</h3>
							<ul className="list-disc pl-5 space-y-1 text-gray-700">
								{details.improvements.items.map((it: string, idx: number) => (
									<li key={idx}>{it}</li>
								))}
							</ul>
						</section>
					</div>
				</div>
			)}
		</div>
	);
}
