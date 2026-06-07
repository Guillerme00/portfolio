import { useState } from "react";

import GM_BLACK from "./assets/icons/GM_BLACK.svg";
import GM_WHITE from "./assets/icons/GM_WHITE.svg";

import LINKEDIN_BLACK from "./assets/icons/LINKEDIN_BLACK.svg";
import LINKEDIN_LIGHT from "./assets/icons/LINKEDIN_LIGHT.svg";

import GITHUB_BLACK from "./assets/icons/GITHUB_BLACK.svg";
import GITHUB_LIGHT from "./assets/icons/GITHUB_LIGHT.svg";

import { dark } from "./page_styles/dark";
import { light } from "./page_styles/light";

import { portuguese } from "./page_language/portuguese";
import { english } from "./page_language/english";

function App() {
  const [pageStyle, setPageStyle] = useState("dark");
  const [pageLanguage, setPageLanguage] = useState("portuguese");

  const theme = pageStyle === "dark" ? dark : light;
  const language = pageLanguage === "portuguese" ? portuguese : english;
  return (
    <>
      <div
        className={`
          h-screen 
          ${theme.bg}`}
      >
        <header
          className={`h-[90px] flex justify-between items-center border-b inter ${theme.header_border} ${theme.header_font_color}`}
        >
          {/* div 1 - button inicial */}
          <div
            className="ml-[40px]"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <img
              src={theme.color === "dark" ? GM_WHITE : GM_BLACK}
              className="cursor-pointer"
              alt="home button"
            />
          </div>

          {/* div 2 - icons */}
          <div className="mr-[40px] flex items-center gap-[24px] text-[18px]">
            <h1
              className={`cursor-pointer ${theme.header_font_color_hover} transition-colors duration-300`}
            >
              {language.header_about_me}
            </h1>
            <h1
              className={`cursor-pointer ${theme.header_font_color_hover} transition-colors duration-300`}
            >
              {language.header_projects}
            </h1>
            <h1
              className={`cursor-pointer ${theme.header_font_color_hover} transition-colors duration-300`}
            >
              {language.header_contact}
            </h1>
            <img
              src={theme.color === "dark" ? GITHUB_BLACK : GITHUB_LIGHT}
              alt="github github-icon"
              className="w-[36px] h-[36px] cursor-pointer transition-colors duration-300"
            />
            <img
              src={theme.color === "dark" ? LINKEDIN_BLACK : LINKEDIN_LIGHT}
              alt="github github-icon"
              className="w-[36px] h-[36px] cursor-pointer transition-colors duration-300"
            />
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
