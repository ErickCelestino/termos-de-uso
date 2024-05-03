import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { CardWithPhotographProps } from "../../interfaces";

export const CardWithPhotograph: FC<CardWithPhotographProps> = ({
    image,
    preface,
    title,
    to,
    buttonTitle = 'Mais Informações'
}) => {
    const theme = useTheme();
    const navigate = useNavigate();

    const navigateTo = () => {
        navigate(`/${to}`)
    }

    return (
        <Card
        sx={{
            width: theme.spacing(40),
            marginRight: theme.spacing(3)
        }}
        >
            <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image={image}
            alt="card image"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {preface}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button onClick={navigateTo} size="small" color="primary">
            {buttonTitle}
            </Button>
        </CardActions>
        </Card>
    );
}