import { FC, ReactNode } from "react";
import { PageNavigate } from "../interfaces";
import { useNavigate } from 'react-router-dom';
import { AppBar, Avatar, Box, Button, IconButton, Toolbar, Typography, useTheme } from "@mui/material";

import logo from '../../assets/Logo.svg'

interface AppBarProps {
    title: string;
    children: ReactNode;
    pages: PageNavigate[]
}

export const BaseLayout: FC<AppBarProps> = ({
    title,
    children,
    pages
}) => {    
    const theme = useTheme()
    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate('/')
    }

    return (
        <>
        <AppBar position="static">
            <Toolbar>
                <Box sx={{display:"flex", alignItems: "center", justifyContent: "space-between",  width: "100%"}}>
                    <Box sx={{  display: 'flex', alignItems: "center", flexDirection: 'row'}}>
                        <IconButton onClick={redirectToHome}>
                            <Avatar src={logo} />
                        </IconButton>
                        <Typography marginLeft={theme.spacing(2)} variant="h4">{title}</Typography>
                    </Box>
                    <Box sx={{  display: 'flex', flexDirection: 'row'}}>
                        {pages.map((item) => (               
                        <Button key={item.page} color="inherit">{item.page}</Button>
                        ))}
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
        <Box sx={{flexGrow: 1, padding: theme.spacing(1)}}>
            {children}
        </Box>
        </>

    )
}