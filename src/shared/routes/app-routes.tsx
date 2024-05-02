import { Routes, Route, Navigate } from "react-router-dom"
import { useAppThemeContext } from "../context";
import { Button } from "@mui/material";
import { DarkMode } from "@mui/icons-material";
import { TermsOfUserContainer } from "../containers";

export const AppRoutes = () => {

  const { toggleTheme } = useAppThemeContext();

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<TermsOfUserContainer />} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />}/>
    </Routes>
  )
}

//<div><Button variant="outlined" onClick={toggleTheme} startIcon={<DarkMode />}>Trocar Tema</Button></div>