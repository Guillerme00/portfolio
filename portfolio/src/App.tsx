import { useState } from "react";
import GM_BLACK from "./assets/GM_BLACK.svg";
import GM_WHITE from "./assets/GM_WHITE.svg";
import { dark } from "./page_styles/dark"
import { light } from "./page_styles/light"

function App() {
  const [pageStyle, setPageStyle] = useState("light")

  const theme = pageStyle === "dark" ? dark : light;
  return (
    <>
      <div className={`bg-[${theme.bg}] h-screen text-[${theme.header_font_color}]`}>
        <header className={`h-[90px] flex items-center border-b border-[${theme.header_border}]`}>
          {/* div 1 - button inicial */}
          <div className="ml-[40px]">
            <img src={theme.color == "dark" ? GM_WHITE : GM_BLACK} className="cursor-pointer" alt="home button" />
          </div>
          <div></div>
        </header>
      </div>
    </>
  )
}

export default App
