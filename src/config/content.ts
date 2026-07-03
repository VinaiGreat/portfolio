export const siteConfig = {
  name: "Your Portfolio",
  title: "Someone's Portfolio",
  description: "A showcase of my work and thoughts",
  social: {
    github: "https://github.com/VinaiGreat",
    // twitter: "https://x.com/astrodotbuild",
    email: "mailto:364786053@qq.com",
  },
};

export const homeContent = {
  title: "Bonjour, Je suis Xavier L.",
  description:
    "Infographiste et web designer autonome, titulaire d'une licence en CDUI, je crée des expériences visuelles cohérentes et des interfaces soignées, tout en construisant progressivement mes compétences en développement d'applications.",
  buttons: {
    about: {
      text: "À propos",
      href: "/about/",
    },
    posts: {
      text: "Read Posts",
      href: "/posts/",
    },
  },
  images: {
    light: "https://multiplepage-portfolio.edgeone.app/assets/images/tech-background-light.svg",
    dark: "/assets/images/tech-background-dark.svg",
  },
};

export const aboutContent = {
  meta: {
    title: "À propos de moi",
    description: "Découvrez mon parcours, mes compétences et mon expérience",
  },
  title: "À propos de moi",
  description:
    "Infographiste et web designer autonome, titulaire d’une licence en CDUI, je crée des expériences visuelles cohérentes et des interfaces soignées tout en développant progressivement mes compétences en développement d’applications. Ma mission est d’allier esthétique et ergonomie pour concevoir des produits numériques à la fois beaux, clairs et utilisables. Ce qui me rend unique, c’est cette double sensibilité design/technique et mon attention constante à la hiérarchie visuelle, à la typographie et à l’accessibilité. Si mon travail peut vous intéresser, c’est parce que chaque projet est abordé avec curiosité, rigueur et une vraie volonté d’avoir un impact concret sur l’usage et la perception de votre produit numérique.",
  skills: [
    "HTML",
    "CSS",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Docker",
    "Git",
  ],
  image: {
    src: "/assets/images/about/coder.jpg",
    alt: "Profile",
  },
  experience: {
    title: "Mon expérience",
    items: [
      {
        period: "2022 - 2023",
        position: "Formation Web Designer / CDUI",
        // company: "Tencent Cloud",
        description:
          "Apprentissage des bases de la conception d'interfaces utilisateur, du développement web, de la gestion de projet, de la programmation et PAO.",
      },
      {
        period: "2021 - 2022",
        position: "Formation Infographiste / Metteur en page",
        // company: "Tencent Cloud",
        description:
          "Apprentissage des bases de l'infographie, du métier de metteur en page, gestion de projet et PAO.",
      },
    ],
  },
  connect: {
    title: "Prendre contact",
    description:
      "N’hésitez pas à me contacter si vous souhaitez collaborer ou simplement dire bonjour ! Vous pouvez me retrouver sur les réseaux sociaux ou m’envoyer un",
    email: {
      text: "email",
      href: "mailto:364786053@qq.com",
    },
  },
};

export const projectsContent = {
  meta: {
    title: "Projects - Your Portfolio",
    description: "Showcase of my best work and projects",
  },
  title: "Mes projets",
  description:
    "Voici les projets que j’ai réalisés, représentatifs de mon travail en design et développement.",
  projects: [
    {
      title: "Nom du projet",
      description:
        "A brief description of your first project. Explain what it does and what technologies you used.",
      image: "/assets/images/projects/project1.jpg",
      href: "#",
    },
    {
      title: "Nom du projet",
      description:
        "Describe your second project here. Highlight the key features and your role in development.",
      image: "/assets/images/projects/project2.jpg",
      href: "#",
    },
    {
      title: "Nom du projet",
      description:
        "Share details about your third project. What problems did it solve? What was the outcome?",
      image: "/assets/images/projects/project3.png",
      href: "#",
    },
  ],
};

