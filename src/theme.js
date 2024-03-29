import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = props => {
  const [theme, setTheme] = useState("dark");

  const onSetTheme = theme => {
    document.body.style.setProperty("--bg-color", themes[theme].bgColor);
    document.body.style.setProperty("--bg-color-sec", themes[theme].bgColorSec);
    document.body.style.setProperty(
      "--primary-color",
      themes[theme].primaryColor
    );
    document.body.style.setProperty(
      "--secondary-color",
      themes[theme].secondaryColor
    );
    document.body.style.setProperty("--third-color", themes[theme].thirdColor);

    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: onSetTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

const themes = {
  light: {
    bgColor: "#f4f4f4",
    bgColorSec: "#fff",
    primaryColor: "#000",
    secondaryColor: "#01bf71",
    thirdColor: "gray",
  },
  dark: {
    bgColor: "#0d0d0d",
    bgColorSec: "#1b1a1a",
    primaryColor: "#fff",
    secondaryColor: "#01bf71",
    thirdColor: "lightgray",
  },
};
