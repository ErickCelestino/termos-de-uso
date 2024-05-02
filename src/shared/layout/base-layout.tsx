import { FC, ReactNode } from "react";
import { PageNavigate } from "../interfaces";
import { AppBar, Box, Button, Toolbar, Typography, useTheme } from "@mui/material";

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

    return (
        <>
        <AppBar position="static">
            <Toolbar>
                <Box sx={{display:"flex", alignItems: "center", justifyContent: "space-between",  width: "100%"}}>
                    <Typography variant="h4">{title}</Typography>
                    <Box sx={{  display: 'flex', flexDirection: 'row'}}>
                        {pages.map((item) => (               
                        <Button key={item.page} color="inherit">{item.page}</Button>
                        ))}
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
        <Box>
            {children}
        </Box>
        </>

    )
}