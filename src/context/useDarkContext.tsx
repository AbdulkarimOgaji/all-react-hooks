import { createContext, ReactNode, useContext, useState } from "react";

interface darkContextInterface {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

//  create context here
const darkContext = createContext<darkContextInterface>(
  {} as darkContextInterface
);

// wrap this component around App.tsx to get access to darkMode in all components
const DarkContextProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <darkContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </darkContext.Provider>
  );
};

// use this custom hook to get the data in any component in component tree
const useDarkContext = () => useContext(darkContext);

export { useDarkContext, DarkContextProvider };
