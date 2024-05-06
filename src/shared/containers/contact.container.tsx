import { Box, Button, Card, TextField, Typography, useMediaQuery, useTheme } from "@mui/material"
import { BaseLayout } from "../layout"


export const ContactContainer = () => {
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <BaseLayout title='Contato'>
            <Box 
                width="100%"
                height="83vh"
                display="flex"
                justifyContent="center"
                alignContent="center"
            >
                <Card sx={{
                    width: mdDown ? theme.spacing(80) : theme.spacing(110)
                }}>
                    <Box 
                        width="100%"
                        height="100%"             
                        display="flex"
                        alignContent="center"
                        alignItems="center"
                        flexDirection="column"
                        textAlign="center"
                    >
                        <Box
                            width="70%"
                            padding={theme.spacing(2)}
                            
                        >
                            <Typography 
                                variant={mdDown ? "h5" : "h4"} 
                                fontWeight="700" 
                                marginBottom={theme.spacing(2)} 
                            >Entre em contato com a gente</Typography>

                            <TextField
                                autoFocus
                                id="email"
                                margin="normal"
                                fullWidth 
                                placeholder="E-mail"
                                label="Digite seu E-mail"
                            />

                            <TextField
                                id="suject"
                                margin="normal"
                                fullWidth 
                                placeholder="Assunto"
                                label="Digite o assunto"
                            />

                            <TextField
                                id="details"
                                margin="normal"
                                fullWidth 
                                placeholder="Detalhes"
                                multiline
                                rows={5}
                                label="Digite os detalhes do assunto"
                            />

                            <Button 
                                sx={{
                                    height: theme.spacing(5)
                                }} 
                                variant="contained" 
                                fullWidth
                            >Enviar</Button>
                        </Box>
                    </Box>
            </Card>
            </Box>
        </BaseLayout>
    )
}
