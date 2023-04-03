import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import portpolioContext from "./portpolioContext";
import { useTheme } from "next-themes";

const PortpolioState = (props) => {
  const { theme, setTheme } = useTheme();
  const [themeMode, setthemeMode] = useState("light");
  function toggleTheme() {
    setthemeMode(theme === "light" ? "dark" : "light");
    setTheme(theme === "light" ? "dark" : "light");
  }
  useEffect(() => {
    setthemeMode(localStorage.getItem("theme"));
  }, []);

  return (
    <portpolioContext.Provider
      value={{
        toggleTheme,
        themeMode,
        theme,
      }}
    >
      {props.children}
    </portpolioContext.Provider>
  );
};
export default PortpolioState;
