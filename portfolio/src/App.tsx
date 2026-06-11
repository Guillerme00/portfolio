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

function App() {
  const [pageStyle, setPageStyle] = useState("dark");
  const [pageLanguage, setPageLanguage] = useState("PT-BR");

  const theme = pageStyle === "dark" ? dark : light;
  const language = pageLanguage === "PT-BR" ? portuguese : english;
  return (
    <>
      <div
        className={`
          h-screen flex flex-col
          ${theme.primary_background}`}
      >
        <header
          className={`sticky top-0 z-100 h-[81px] flex items-center justify-between ml-[40px] mr-[40px] `}
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
            className={`${theme.title_text_variant} flex gap-[24px] geist-header`}
          >
            <button
              className={`cursor-pointer ${theme.title_hover} transition-colors duration-300`}
            >
              {language.header_about_me}
            </button>
            <button
              className={`cursor-pointer ${theme.title_hover} transition-colors duration-300`}
            >
              {language.header_skills}
            </button>
            <button
              className={`cursor-pointer ${theme.title_hover} transition-colors duration-300`}
            >
              {language.header_projects}
            </button>
            <button
              className={`cursor-pointer ${theme.title_hover} transition-colors duration-300`}
            >
              {language.header_contact}
            </button>
          </div>

          {/* right */}
          <div
            className={`${theme.title_text_variant} flex gap-[24px] geist-header`}
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
        </header>
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
                className={`geist-midtag-text text-[72px] leading-none m-0 ${theme.title_text_color}`}
              >
                Guilherme Monteiro,
              </h1>

              <h1
                className={`geist-midtag-text text-[72px] leading-none m-0 ${theme.title_text_variant}`}
              >
                {language.secondary_mid}
              </h1>
            </div>

            {/* Text */}
            <div className="max-w-[892px]">
              <h3
                className={`geist-midtag-text_2 text-[20px] mt-[16px] text-center ${theme.title_text_variant}`}
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
      </div>
    </>
  );
}

export default App;
