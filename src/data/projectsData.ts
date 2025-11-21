type CardNumber = 1 | 2 | 3 | 4 | 5 | 6; // Ajoute ici les nouveaux IDs si tu ajoutes des projets
type ProjectKey = `card${CardNumber}`;
type TranslationKey<T extends string = string> = `projects.${ProjectKey}.${T}`;

export interface ProjectData {
  id: CardNumber;
  titleKey: TranslationKey<"title">;
  technosKey: TranslationKey<"technos">;
  image: string;
  imageAltKey: TranslationKey<"altImage">;
  logo: string;
  logoAltKey: TranslationKey<"altLogo">;
  github: string;
  link: string;
  objectivesKey: TranslationKey<"objectives">;
  skillsKey: TranslationKey<"skills">;
  resultsKey: TranslationKey<"results">;
  improvementsKey: TranslationKey<"improvements">;
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    titleKey: "projects.card1.title",
    technosKey: "projects.card1.technos",
    image: "/images/projects/kasa.webp",
    imageAltKey: "projects.card1.altImage",
    logo: "/images/logos/kasa-logo.png",
    logoAltKey: "projects.card1.altLogo",
    github: "https://github.com/Julie-Des/Projet7-oc",
    link: "https://projet7-oc-deshayes-projects.vercel.app",

    objectivesKey: "projects.card1.objectives",
    skillsKey: "projects.card1.skills",
    resultsKey: "projects.card1.results",
    improvementsKey: "projects.card1.improvements",
  },
  {
    id: 2,
    titleKey: "projects.card2.title",
    technosKey: "projects.card2.technos",
    image: "/images/projects/nina-carducci.webp",
    imageAltKey: "projects.card2.altImage",
    logo: "/images/logos/nina-carducci-logo.png",
    logoAltKey: "projects.card2.altLogo",
    github: "https://github.com/Julie-Des/Projet8-oc-after",
    link: "https://julie-des.github.io/Projet8-oc-after",

    objectivesKey: "projects.card2.objectives",
    skillsKey: "projects.card2.skills",
    resultsKey: "projects.card2.results",
    improvementsKey: "projects.card2.improvements",
  },
  {
    id: 3,
    titleKey: "projects.card3.title",
    technosKey: "projects.card3.technos",
    image: "/images/projects/724-events.webp",
    imageAltKey: "projects.card3.altImage",
    logo: "/images/logos/724-events-logo.png",
    logoAltKey: "projects.card3.altLogo",
    github: "https://github.com/Julie-Des/Projet9-oc",
    link: "https://projet9-oc-724events.vercel.app/",

    objectivesKey: "projects.card3.objectives",
    skillsKey: "projects.card3.skills",
    resultsKey: "projects.card3.results",
    improvementsKey: "projects.card3.improvements",
  },
  {
    id: 4,
    titleKey: "projects.card4.title",
    technosKey: "projects.card4.technos",
    image: "/images/projects/sophie-bluel.webp",
    imageAltKey: "projects.card4.altImage",
    logo: "/images/logos/sophie-bluel-logo.png",
    logoAltKey: "projects.card4.altLogo",
    github: "https://github.com/Julie-Des/Projet6-oc",
    link: "https://projet6-oc-front.onrender.com",

    objectivesKey: "projects.card4.objectives",
    skillsKey: "projects.card4.skills",
    resultsKey: "projects.card4.results",
    improvementsKey: "projects.card4.improvements",
  },
  {
    id: 5,
    titleKey: "projects.card5.title",
    technosKey: "projects.card5.technos",
    image: "/images/projects/ohmyfood.webp",
    imageAltKey: "projects.card5.altImage",
    logo: "/images/logos/ohmyfood-logo.png",
    logoAltKey: "projects.card5.altLogo",
    github: "https://github.com/Julie-Des/Projet4-oc",
    link: "https://julie-des.github.io/Projet4-oc",

    objectivesKey: "projects.card5.objectives",
    skillsKey: "projects.card5.skills",
    resultsKey: "projects.card5.results",
    improvementsKey: "projects.card5.improvements",
  },
  {
    id: 6,
    titleKey: "projects.card6.title",
    technosKey: "projects.card6.technos",
    image: "/images/projects/booki.webp",
    imageAltKey: "projects.card6.altImage",
    logo: "/images/logos/booki-logo.png",
    logoAltKey: "projects.card6.altLogo",
    github: "https://github.com/Julie-Des/Booki",
    link: "https://julie-des.github.io/Booki",

    objectivesKey: "projects.card6.objectives",
    skillsKey: "projects.card6.skills",
    resultsKey: "projects.card6.results",
    improvementsKey: "projects.card6.improvements",
  }
];