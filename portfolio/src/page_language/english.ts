import TwitterImage from "../assets/images/twitter_image.png";
import EfoodImage from "../assets/images/efood_image.png";

export const english = {
  header_language: "US-EN",
  header_about_me: "About me",
  header_skills: "Skills",
  header_projects: "Projects",
  header_contact: "Contact me",
  availability: "Available for new projects",
  secondary_mid: "Full Stack Developer",
  text_mid:
    "Specializing in the creation of modern, scalable web applications focused on user experience. I transform ideas into digital solutions using market-leading technologies.",
  my_projects: "My projects",
  my_contacts: "Contact Me",
  skills_text: "Tools and technologies that I use to build modern solutions.",
  projects_text: "Here are some projects that demonstrate my experience.",
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
      text: "A web application that simulates the Twitter experience. Includes user authentication, tweet posting, a like system, sharing, and real-time feed updates.",
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
      text: "Frontend application focused on performance and usability for online orders. Developed with a modern component architecture, asynchronous API consumption, and an optimized checkout flow.",
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
  final_contact_me: "Contact me",
  final_contact_text_1: "I am always open to new projects and interesting collaborations.",
  final_contact_text_2: "Feel free to get in touch.",
  email_message: "Email copied to clipboard",
};
