import { FC, MouseEventHandler, ReactNode } from "react";
import { PageNavigate } from "../interfaces";
import { useNavigate } from 'react-router-dom';
import { AppBar, Avatar, Box, Button, Drawer, IconButton, Toolbar, Typography, useTheme } from "@mui/material";

import logo from '../../assets/Logo.svg'
import { useAppThemeContext } from "../context";
import { DarkMode } from "@mui/icons-material";

interface AppBarProps {
    title: string;
    children: ReactNode;
    pages?: PageNavigate[]
}

export const BaseLayout: FC<AppBarProps> = ({
    title,
    children,
    pages = [
        {page: 'Página Incial', to: 'termos-de-uso'},
        {page: 'Contato', to: 'contact'}
    ]
}) => {    
    const theme = useTheme()
    const navigate = useNavigate();
    const { toggleTheme } = useAppThemeContext();

    const redirectToHome = () => {
        navigate('/')
    }

    const handleTo = (route: string): MouseEventHandler<HTMLButtonElement> => () => {
        navigate(`/${route}`);
    }

    return (
        <>
        <AppBar position="static">
            <Toolbar>
                <Box sx={{display:"flex", alignItems: "center", justifyContent: "space-between",  width: "100%"}}>
                    <Box sx={{  display: 'flex', alignItems: "center", flexDirection: 'row'}}>
                        <IconButton onClick={redirectToHome}>
                            <Avatar src={logo} sx={{ width: 45, height: 45 }}/>
                        </IconButton>
                        <Typography marginLeft={theme.spacing(2)} variant="h4">{title}</Typography>
                    </Box>
                    <Box sx={{  display: 'flex', flexDirection: 'row'}}>
                        {pages.map((item) => (               
                                <Button onClick={handleTo(item.to)} key={item.page} color="inherit">{item.page}</Button>
                            ))}
                        <Button sx={{marginLeft: theme.spacing(1)}} variant="outlined" color="inherit" onClick={toggleTheme} startIcon={<DarkMode />}>Trocar Tema</Button>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
        <Box sx={{padding: theme.spacing(2)}}>
            {children}
        </Box>
        </>

    )
}
