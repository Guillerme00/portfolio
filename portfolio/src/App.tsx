import { useState } from "react";

import GM from "./assets/icons/GM.svg?react";
import LINKEDIN from "./assets/icons/LINKEDIN.svg?react";
import GITHUB from "./assets/icons/GITHUB.svg?react";
import LAMP from "./assets/icons/LAMP.svg?react";

import { dark } from "./page_styles/dark";
import { light } from "./page_styles/light";

import { portuguese } from "./page_language/portuguese";
import { english } from "./page_language/english";

function App() {
  const [pageStyle, setPageStyle] = useState("light");
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
            <GM
              className={`cursor-pointer ${theme.header_font_color} ${theme.header_font_color_hover} transition-colors duration-300`}
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
            <GITHUB
              className={`w-[36px] h-[36px] cursor-pointer ${theme.header_font_color} ${theme.header_font_color_hover} transition-colors duration-300`}
            />
            <LINKEDIN
              className={`w-[36px] h-[36px] cursor-pointer ${theme.header_font_color} ${theme.header_font_color_hover} transition-colors duration-300`}
            />
            <LAMP
              className={`w-[36px] h-[36px] cursor-pointer ${theme.lamp_font_color} ${theme.lamp_font_color_hover} transition-colors duration-300`}
              onClick={() => {
                if (theme.color === "dark") {
                  setPageStyle("light");
                } else {
                  setPageStyle("dark");
                }
              }}
            />
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
