import { createContext, useState } from "react";

export type SidebarContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export const SidebarContext = createContext<SidebarContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
});

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <SidebarContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
