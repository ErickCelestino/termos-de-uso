import { Box, Card, TextField, Typography, useMediaQuery, useTheme } from "@mui/material"
import { BaseLayout } from "../layout"
import { FormButton } from "../components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SendContactDto } from "../interfaces";
import { sendEmailService } from "../services";

export const ContactContainer = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));

    const handleData = async (data: SendContactDto) => {
        setLoading(false);
        setLoading(true);
        setSuccess(false);
        await sendEmailService(data);
        setLoading(false);
        setSuccess(true);
    }

    const {
        handleSubmit,
        register,
      } = useForm<SendContactDto>({
        mode: 'all',
        criteriaMode: 'all',
        defaultValues: {
          email: '',
          suject: '',
          details: '',
        },
      });
    return (
        <BaseLayout title='Contato'>
            <Box 
                component="form"
                width="100%"
                height={theme.spacing(63)}
                display="flex"
                justifyContent="center"
                alignContent="center"
                onSubmit={handleSubmit(handleData)}
            >
                <Card sx={{
                    width: mdDown ? theme.spacing(80) : theme.spacing(105)
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
                            width={mdDown ? "70%" : "80%"}
                            padding={theme.spacing(2)}
                            
                        >
                            <Typography 
                                variant={mdDown ? "h5" : "h4"} 
                                fontWeight="700" 
                                marginBottom={theme.spacing(2)} 
                            >Entre em contato com a gente</Typography>

                            <TextField
                                autoFocus
                                margin="normal"
                                fullWidth 
                                placeholder="E-mail"
                                label="Digite seu E-mail"
                                {...register('email')}
                            />

                            <TextField
                                margin="normal"
                                fullWidth 
                                placeholder="Assunto"
                                label="Digite o assunto"
                                {...register('suject')}
                            />

                            <TextField
                                margin="normal"
                                fullWidth 
                                placeholder="Detalhes"
                                multiline
                                rows={5}
                                label="Digite os detalhes do assunto"
                                {...register('details')}
                            />

                            <FormButton
                                success={success}
                                loading={loading}
                                buttonTitle="Enviar"
                            />
                        </Box>
                    </Box>
            </Card>
            </Box>
        </BaseLayout>
    )
}
