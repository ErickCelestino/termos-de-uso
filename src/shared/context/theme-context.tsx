import React, { ReactNode, createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import { DarkTheme, LighTheme } from "../../shared/themes";
import { getTheme, setTheme } from "../services";

interface IThemeContextData {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData)

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
}

interface AppThemeProviderProps {
  children: ReactNode;
}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>(() => {
    return getTheme() || 'light';
  });

  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => {
      const newThemeName = oldThemeName === 'light' ? 'dark' : 'light';
      setTheme(newThemeName); 
      return newThemeName;
    });
  }, []);

  const theme = useMemo(() => {
    if(themeName === 'light') return LighTheme;

    return DarkTheme
  }, [themeName]);

  useEffect(() => {
    setTheme(themeName);
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
        {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
