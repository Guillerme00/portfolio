import { useState } from "react";

import GM  from "./assets/icons/GM.svg?react"
import GITHUB  from "./assets/icons/GITHUB.svg?react"
import LINKEDIN  from "./assets/icons/LINKEDIN.svg?react"
import MAIL  from "./assets/icons/MAIL.svg?react"
import MENU  from "./assets/icons/MENU.svg?react"
import LIGHT_MODE  from "./assets/icons/DARK_MODE.svg?react"
import DARK_MODE  from "./assets/icons/LIGHT_MODE.svg?react"

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
          h-screen 
          ${theme.primary_background}`}>
        <header className="sticky top-0 z-100 h-[81px] flex items-center justify-between ml-[40px] mr-[40px]">
            {/* left */}
            <div
            onClick={() => window.scrollTo({
              top:0,
              behavior: "smooth"
            })}>
              <GM className={`w-[46px] h-[22px] cursor-pointer ${theme.title_text_color} ${theme.title_hover} transition-colors duration-300`}/> 
            </div>

            {/* mid */}
            <div className={`${theme.title_text_variant} flex gap-[24px] geist-header`}>
              <button className={`cursor-pointer ${theme.title_hover} transition-colors duration-300`}>{language.header_about_me}</button>
              <button className={`cursor-pointer ${theme.title_hover} transition-colors duration-300`}>{language.header_skills}</button>
              <button className={`cursor-pointer ${theme.title_hover} transition-colors duration-300`}>{language.header_projects}</button>
              <button className={`cursor-pointer ${theme.title_hover} transition-colors duration-300`}>{language.header_contact}</button>
            </div>
            
            {/* right */}
            <div className={`${theme.title_text_variant} flex gap-[24px] geist-header`}>
              <button className={`cursor-pointer ${theme.title_hover} transition-colors duration-300`}
              onClick={() => {
                if (language.header_language === "PT-BR") {
                  setPageLanguage("US-EN")
                } else if (language.header_language === "US-EN") {
                  setPageLanguage("PT-BR")
                }}}
              >{language.header_language}</button>

              {theme.color === "dark" ?
              <DARK_MODE className={`cursor-pointer ${theme.title_hover} transition-colors duration-300`} onClick={() => setPageStyle("light")}/> :
              <LIGHT_MODE className={`cursor-pointer ${theme.title_hover} transition-colors duration-300`} onClick={() => setPageStyle("dark")}/>}
            </div>
        </header>
      </div>
    </>
  );
}

export default App;
