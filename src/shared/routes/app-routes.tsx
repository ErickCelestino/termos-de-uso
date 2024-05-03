import { Routes, Route, Navigate } from "react-router-dom"
import { DetailsTermContainer, TermsOfUserContainer } from "../containers";
import { Typography, useTheme } from "@mui/material";

export const AppRoutes = () => {
  const theme = useTheme();

  return (
    <Routes>
      <Route path="/termos-de-uso" element={<TermsOfUserContainer />} />
      <Route 
        path="/details-introduction" 
        element={
          <DetailsTermContainer title="Introdução" body={
            <>
            <Typography fontSize={theme.spacing(2)} component="p" variant="body1">Obrigado por escolher a Pure Games.</Typography>
            <Typography fontSize={theme.spacing(2)} component="p" variant="body1">Nós nos comprometemos a proteger a privacidade dos usuários do nosso jogo.</Typography>
            <Typography fontSize={theme.spacing(2)} component="p" variant="body1">Esta Política de Privacidade explica como coletamos, usamos, divulgamos e salvaguardamos suas informações quando você joga nossos jogos. Nós nos reservamos o direito de fazer alterações a esta Política de Privacidade a qualquer momento e por qualquer motivo. Iremos alertá-lo sobre quaisquer alterações, publicando a dta da última atualização desta Política de Privacidade. Você é encorajado a revisar periodicamente esta Política de Privacidade para se manter informado de atualizações.</Typography>
            </>
          } />
        }
      />
      <Route 
        path="/details-collect-information" 
        element={
          <DetailsTermContainer title="Coleta de suas informações" body="aaaa" />
        }
      />
      <Route 
        path="/details-use-information" 
        element={
          <DetailsTermContainer title="teste" body="aaaa" />
        }
      />
      <Route 
        path="/details-politic-data" 
        element={
          <DetailsTermContainer title="teste" body="aaaa" />
        }
      />
      <Route path="*" element={<Navigate to="/termos-de-uso" />}/>
    </Routes>
  )
}

//<div><Button variant="outlined" onClick={toggleTheme} startIcon={<DarkMode />}>Trocar Tema</Button></div>