import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import portpolioContext from "./portpolioContext";
import { useTheme } from "next-themes";

const PortpolioState = (props) => {
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(false);

  function toggleTheme() {
    setIsChecked(!isChecked);
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <portpolioContext.Provider
      value={{
        toggleTheme,
        isChecked,
        theme
      }}
    >
      {props.children}
    </portpolioContext.Provider>
  );
};
export default PortpolioState;
