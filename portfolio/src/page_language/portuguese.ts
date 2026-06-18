import TwitterImage from "../assets/images/twitter_image.png";
import EfoodImage from "../assets/images/efood_image.png";

export const portuguese = {
  header_language: "PT-BR",
  header_about_me: "Sobre mim",
  header_skills: "Habilidades",
  header_projects: "Projetos",
  header_contact: "Contato",
  availability: "Disponível para novos projetos",
  secondary_mid: "Desenvolvedor Full Stack",
  text_mid:
    "Especializado na criação de aplicações web modernas, escaláveis e focadas na experiência do usuário. Transformo ideias em soluções digitais utilizando tecnologias do mercado.",
  my_projects: "Veja meus projetos",
  my_contacts: "Entre em contato",
  skills_text:
    "Ferramentas e tecnologias que utilizo para construir soluções modernas.",
  projects_text: "Alguns projetos que demonstram minha experiência.",
  tech: {
    frontend: {
      name: "FRONTEND",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Tailwind",
        "Vite",
        "Sass",
        "Bootstrap",
      ],
    },
    backend: {
      name: "BACKEND",
      skills: ["Python", "Django", "Django REST", "REST API"],
    },
    database: {
      name: "DATABASE",
      skills: ["SQLite", "PostgreSQL"],
    },
    tools: {
      name: "TOOLS",
      skills: ["Git", "GitHub", "VS Code", "Docker", "Figma", "Postman"],
    },
  },
  projects: [
    {
      image: TwitterImage,
      name: "Twitter Clone",
      text: "Aplicação web que simula a experiência do Twitter. Inclui autenticação de utilizadores, publicação de tweets, sistema de likes, partilhas e atualização de feed em tempo real.",
      tags: [
        "React",
        "Typescript",
        "Tailwind CSS",
        "Django",
        "Pytest",
        "Docker",
        "JWT",
        "SQLite",
      ],
      live_link: "https://twitter-project-woad.vercel.app/signin",
      github_link: "https://github.com/Guillerme00/Twitter-Project",
    },
    {
      image: EfoodImage,
      name: "EFood",
      text: "Aplicação frontend focada na performance e usabilidade para pedidos online. Desenvolvida com arquitetura de componentes moderna, consumo de API assíncrona e fluxo de checkout otimizado.",
      tags: [
        "React",
        "Typescript",
        "Vite",
        "RTK Query",
        "Styled Components",
        "React Router DOM",
      ],
      live_link: "https://efood-project-frontend.vercel.app/",
      github_link: "https://github.com/Guillerme00/EFOOD-PROJECT-FRONTEND",
    },
  ],
  final_contact_me: "Entre em contato comigo",
  final_contact_text_1: "Estou sempre aberto a novos projetos e colaborações interessantes.",
  final_contact_text_2: "Sinta-se à vontade para entrar em contato.",
  email_message: "E-mail copiado para a área de transferência",
};
