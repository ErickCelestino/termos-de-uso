import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material"
import { BaseLayout } from "../layout"
import { FC, ReactNode } from "react";

interface DetailsTermContainerProps {
    title: string;
    body: ReactNode;
}

export const DetailsTermContainer: FC<DetailsTermContainerProps> = ({
    title,
    body
}) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <BaseLayout title='Detalhes'>
            <Box 
                width="100%"
                display="flex"
                justifyContent="center"   
            >
            <Paper 
                sx={{
                    width: smDown ? theme.spacing(30) : theme.spacing(100),
                    padding: theme.spacing(3)
                }}
            >
                <Typography fontWeight={800} fontSize={theme.spacing(5)} variant="h3">{title}</Typography>
                <br/>
                {body}
            </Paper>
            </Box>
        </BaseLayout>
    )
}