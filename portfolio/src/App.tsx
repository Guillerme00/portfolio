import { useState } from "react";

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
          ${theme.primary_background}`}
      ></div>
    </>
  );
}

export default App;
