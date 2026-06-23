import { useState } from "react";

import GM from "./assets/icons/GM.svg?react";
import GITHUB from "./assets/icons/GITHUB.svg?react";
import LINKEDIN from "./assets/icons/LINKEDIN.svg?react";
import MAIL from "./assets/icons/MAIL.svg?react";
import MENU from "./assets/icons/MENU.svg?react";
import LIGHT_MODE from "./assets/icons/DARK_MODE.svg?react";
import DARK_MODE from "./assets/icons/LIGHT_MODE.svg?react";

import { dark } from "./page_styles/dark";
import { light } from "./page_styles/light";

import { portuguese } from "./page_language/portuguese";
import { english } from "./page_language/english";

import { SkillTag } from "./components/skill_tag";
import ProjectCard from "./components/project_card";

function App() {
  const [pageStyle, setPageStyle] = useState("dark");
  const [pageLanguage, setPageLanguage] = useState("PT-BR");
  const [showMenu, setShowMenu] = useState(false);

  const theme = pageStyle === "dark" ? dark : light;
  const language = pageLanguage === "PT-BR" ? portuguese : english;
  return (
    <>
      <div
        className={`
          min-h-screen flex flex-col overflow-x-hidden
          ${theme.primary_background}`}
      >
        {/* Header */}
        <header
          className={`sticky top-0 z-100 h-[81px] flex items-center justify-between pl-[40px] pr-[40px] py-[24px] ${theme.primary_background}`}
        >
          {/* left */}
          <div
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <GM
              className={`w-[46px] h-[22px] cursor-pointer ${theme.title_text_color} ${theme.title_hover} transition-colors duration-300`}
            />
          </div>

          {/* mid */}
          <div
            className={`hidden md:flex ${theme.title_text_variant} gap-[24px] geist-header`}
          >
            <button
              className={`cursor-pointer ${theme.title_hover} transition-colors duration-300`}
              onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            >
              {language.header_about_me}
            </button>
            <button
              className={`cursor-pointer ${theme.title_hover} transition-colors duration-300`}
              onClick={() => {
                document.getElementById("skills")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              {language.header_skills}
            </button>
            <button
              className={`cursor-pointer ${theme.title_hover} transition-colors duration-300`}
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              {language.header_projects}
            </button>
            <button
              className={`cursor-pointer ${theme.title_hover} transition-colors duration-300`}
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              {language.header_contact}
            </button>
          </div>

          {/* right */}
          <div
            className={`${theme.title_text_variant} hidden md:flex gap-[24px] geist-header`}
          >
            <button
              className={`cursor-pointer ${theme.title_hover} transition-colors duration-300`}
              onClick={() => {
                if (language.header_language === "PT-BR") {
                  setPageLanguage("US-EN");
                } else if (language.header_language === "US-EN") {
                  setPageLanguage("PT-BR");
                }
              }}
            >
              {language.header_language}
            </button>

            {theme.color === "dark" ? (
              <DARK_MODE
                className={`cursor-pointer ${theme.title_hover} transition-colors duration-300`}
                onClick={() => {
                  setPageStyle("light");
                }}
              />
            ) : (
              <LIGHT_MODE
                className={`cursor-pointer ${theme.title_hover} transition-colors duration-300`}
                onClick={() => {
                  setPageStyle("dark");
                }}
              />
            )}
          </div>
          {/* menu drop */}
          <div className="flex md:hidden relative">
            <MENU className={`w-[46px] h-[22px] cursor-pointer ${theme.title_text_color} ${theme.title_hover} transition-colors duration-300`}
            onClick={() => setShowMenu((prev) => !prev)}/>
            <div className={`${theme.title_text_variant} gap-[24px] geist-header flex flex-col ${theme.button_border_color} border-[1px] absolute top-full right-0 mt-2 p-[12px] gap-6 transition-all duration-300 ${theme.primary_background} ${showMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                <button
                className={`cursor-pointer ${theme.title_hover} transition-colors duration-300`}
                onClick={() => (
                  setShowMenu((prev) => !prev),
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                )
              }
              >
                {language.header_about_me}
              </button>
              <button
                className={`cursor-pointer ${theme.title_hover} transition-colors duration-300`}
                onClick={() => {
                  setShowMenu((prev) => !prev),
                  document.getElementById("skills")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                {language.header_skills}
              </button>
              <button
                className={`cursor-pointer ${theme.title_hover} transition-colors duration-300`}
                onClick={() => {
                  setShowMenu((prev) => !prev),
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                {language.header_projects}
              </button>
              <button
                className={`cursor-pointer ${theme.title_hover} transition-colors duration-300`}
                onClick={() => {
                  setShowMenu((prev) => !prev),
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                {language.header_contact}
              </button>
            </div>
          </div>
        </header>
        {/* Body 1 */}
        <div className="py-[128px] flex flex-col items-center">
          <div className="flex flex-col items-center">
            {/* Availability */}
            <div className="flex items-center gap-[12px] geist-midtag mb-[16px]">
              <div className="relative">
                <div
                  className={`absolute inset-0 ${theme.avaliable} rounded-full animate-ping`}
                />
                <div
                  className={`relative w-[16px] h-[16px] ${theme.avaliable} rounded-full`}
                />
              </div>
              <h1 className={`font-[16px] ${theme.title_text_variant}`}>
                {language.availability}
              </h1>
            </div>
            {/* Name */}
            <div className="flex flex-col items-center text-center max-w-[925px]">
              <h1
                className={`geist-midtag-text text-[50px] md:text-[72px] leading-none m-0 ${theme.title_text_color}`}
              >
                Guilherme Monteiro,
              </h1>

              <h1
                className={`geist-midtag-text text-[50px] md:text-[72px] leading-none m-0 ${theme.title_text_variant}`}
              >
                {language.secondary_mid}
              </h1>
            </div>

            {/* Text */}
            <div className="max-w-[892px]">
              <h3
                className={`geist-midtag-text_2 text-[16px] px-[16px] md:px-[0px] md:text-[20px] mt-[16px] text-center ${theme.title_text_variant}`}
              >
                {language.text_mid}
              </h3>
            </div>
            {/* Buttons */}
            <div className="mt-[64px] flex gap-[16px]">
              <button
                className={`py-[16px] px-[26px] rounded-full ${theme.button_hover} ${theme.button_background} ${theme.button_full_text} inter cursor-pointer transition-colors duration-300`}
              >
                {language.my_projects}
              </button>
              <button
                className={`py-[16px] px-[26px] rounded-full bg-transparent border-[1px] ${theme.button_empty_border_hover} ${theme.button_empty_text_hover} ${theme.button_border_color} ${theme.button_empty_text} inter cursor-pointer transition-colors duration-300`}
              >
                {language.my_contacts}
              </button>
            </div>
          </div>
        </div>
        {/* Body 2 */}
        <div
          id="skills"
          className={`py-[128px] flex flex-col items-center ${theme.secondary_background}`}
        >
          {/* Skills */}
          <div className="flex flex-col items-center">
            <h1
              className={`geist-midtag-text text-[32px] leading-none m-0 ${theme.title_text_color} mb-[4px]`}
            >
              {language.header_skills}
            </h1>
            <h1
              className={`geist-midtag-text_2 text-[16px] leading-none m-0 ${theme.title_text_variant}`}
            >
              {language.skills_text}
            </h1>
          </div>
          {/* Show skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[32px] mt-[64px] max-w-[1360px]">
            <div
              className={`max-w-[316px] w-full p-[32px] ${theme.primary_background} rounded-lg flex flex-col ${theme.outline} border-[1px] hover:-translate-y-[8px] transition-transform duration-300`}
            >
              <h1
                className={`geist-midtag text-[14px] ${theme.title_text_variant}`}
              >
                {language.tech.frontend.name}
              </h1>
              <div className="mt-[16px]">
                {language.tech.frontend.skills.map((item: string) => (
                  <SkillTag
                    hover={theme.button_tag_hover}
                    text={item}
                    bg_tag={theme.tag_background}
                    text_color={theme.title_text_color}
                  />
                ))}
              </div>
            </div>

            <div
              className={`max-w-[316px] w-full p-[32px] ${theme.primary_background} rounded-lg flex flex-col ${theme.outline} border-[1px] hover:-translate-y-[8px] transition-transform duration-300`}
            >
              <h1
                className={`geist-midtag text-[14px] ${theme.title_text_variant}`}
              >
                {language.tech.backend.name}
              </h1>
              <div className="mt-[16px]">
                {language.tech.backend.skills.map((item: string) => (
                  <SkillTag
                    hover={theme.button_tag_hover}
                    text={item}
                    bg_tag={theme.tag_background}
                    text_color={theme.title_text_color}
                  />
                ))}
              </div>
            </div>

            <div
              className={`max-w-[316px] w-full p-[32px] ${theme.primary_background} rounded-lg flex flex-col ${theme.outline} border-[1px] hover:-translate-y-[8px] transition-transform duration-300`}
            >
              <h1
                className={`geist-midtag text-[14px] ${theme.title_text_variant}`}
              >
                {language.tech.database.name}
              </h1>
              <div className="mt-[16px]">
                {language.tech.database.skills.map((item: string) => (
                  <SkillTag
                    hover={theme.button_tag_hover}
                    text={item}
                    bg_tag={theme.tag_background}
                    text_color={theme.title_text_color}
                  />
                ))}
              </div>
            </div>

            <div
              className={`max-w-[316px] w-full p-[32px] ${theme.primary_background} rounded-lg flex flex-col ${theme.outline} border-[1px] hover:-translate-y-[8px] transition-transform duration-300`}
            >
              <h1
                className={`geist-midtag text-[14px] ${theme.title_text_variant}`}
              >
                {language.tech.tools.name}
              </h1>
              <div className="mt-[16px]">
                {language.tech.tools.skills.map((item: string) => (
                  <SkillTag
                    hover={theme.button_tag_hover}
                    text={item}
                    bg_tag={theme.tag_background}
                    text_color={theme.title_text_color}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Body 3 */}
        <div
          id="projects"
          className={`py-[128px] flex flex-col items-center min-h-screen ${theme.primary_background}`}
        >
          {/* Projects */}
          <div className="flex flex-col items-center">
            <h1
              className={`geist-midtag-text text-[32px] leading-none m-0 ${theme.title_text_color} mb-[4px]`}
            >
              {language.header_projects}
            </h1>
            <h1
              className={`geist-midtag-text_2 text-[16px] leading-none m-0 ${theme.title_text_variant}`}
            >
              {language.projects_text}
            </h1>
          </div>
          <div className="pt-[64px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-[32px]">
            {language.projects.map((item) => (
              <ProjectCard
                title_text_variant={theme.title_text_variant}
                title_text_color={theme.title_text_color}
                background={theme.secondary_background}
                bg_tag={theme.tag_background}
                text_color={theme.title_text_color}
                button_background={theme.button_background}
                button_border_color={theme.button_border_color}
                button_empty_border_hover={theme.button_empty_border_hover}
                button_empty_text={theme.button_empty_text}
                button_empty_text_hover={theme.button_empty_text_hover}
                button_full_text={theme.button_full_text}
                button_hover={theme.button_hover}
                tag_hover={theme.button_tag_hover}
                github_link={item.github_link}
                live_link={item.live_link}
                project_name={item.name}
                project_text={item.text}
                techs={item.tags}
                project_photo={item.image}
              />
            ))}
          </div>
        </div>
        {/* Body 4 */}
        <div
        id="contact"
        className={`py-[128px] flex flex-col items-center ${theme.secondary_background}`}>
          <div className="flex flex-col items-center mb-[64px]">
            <h1 className={`${theme.title_text_color} text-[32px] geist-800 flex text-center`}>{language.final_contact_me}</h1>
            <h2 className={`${theme.title_text_variant} text-[16px] inter_400 flex text-center`}>{language.final_contact_text_1}</h2>
            <h2 className={`${theme.title_text_variant} text-[16px] inter_400 flex text-center`}>{language.final_contact_text_2}</h2>
          </div>
        <div>
          <button className={`mb-[8px] w-full cursor-pointer py-[16px] px-[24px] rounded-full flex gap-[10px] transition-colors duration-300 ${theme.button_contacts_hover} ${theme.button_border_color} border-1`}
          onClick={async () => {
            await navigator.clipboard.writeText("guilhermemonteirotoledo@gmail.com")
            alert(language.email_message);
          }}><MAIL className={`${theme.title_text_color}`}/><span className={`${theme.title_text_color} text-[16px] inter_600`}>guilhermemonteirotoledo@gmail.com</span></button>
          <button className={`mb-[8px] w-full cursor-pointer py-[16px] px-[24px] rounded-full flex gap-[10px] transition-colors duration-300 ${theme.button_contacts_hover} ${theme.button_border_color} border-1`}
          onClick={() => {
            window.open("https://www.linkedin.com/in/guilhermemonteirotoledo/", "_blank");
          }}><LINKEDIN className={`${theme.title_text_color}`}/><span className={`${theme.title_text_color} text-[16px] inter_600`}>linkedin.com/in/guilhermemonteirotoledo</span></button>
          <button className={`w-full cursor-pointer py-[16px] px-[24px] rounded-full flex gap-[10px] transition-colors duration-300 ${theme.button_contacts_hover} ${theme.button_border_color} border-1`}
          onClick={() => {
            window.open("https://github.com/Guillerme00", "_blank");
          }}><GITHUB className={`${theme.title_text_color}`}/><span className={`${theme.title_text_color} text-[16px] inter_600`}>https://github.com/Guillerme00</span></button>
        </div>
        </div>
        {/* Body 5 */}
        <div className="py-[24px] flex flex-col items-center">
          <h1 className={`inter_600 ${theme.title_text_variant} text-[14px]`}>© 2026 Guilherme Monteiro</h1>
          <h1 className={`${theme.title_text_variant} text-[14px]`}>Website Design by Ana Julia Teles</h1>
        </div>
      </div>
    </>
  );
}

export default App;
