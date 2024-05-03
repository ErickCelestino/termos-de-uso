import { Routes, Route, Navigate } from "react-router-dom"
import { useAppThemeContext } from "../context";
import { Button } from "@mui/material";
import { DarkMode } from "@mui/icons-material";
import { TermsOfUserContainer } from "../containers";

export const AppRoutes = () => {

  const { toggleTheme } = useAppThemeContext();

  return (
    <Routes>
      <Route path="/termos-de-uso" element={<TermsOfUserContainer />} />
      <Route path="/test" element={<div>teste</div>} />
      <Route path="*" element={<Navigate to="/termos-de-uso" />}/>
    </Routes>
  )
}

//<div><Button variant="outlined" onClick={toggleTheme} startIcon={<DarkMode />}>Trocar Tema</Button></div>