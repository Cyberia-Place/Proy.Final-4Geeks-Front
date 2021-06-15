import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles(theme => ({
	mainFeaturedPost: {
		backgroundColor: theme.palette.white,
		color: theme.palette.common.black,

		height: "400px",
		width: "100%",
		marginTop: "50px"
	},

	cardMedia: {
		backgroundImage: "url(https://source.unsplash.com/random)",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "center"
	},
	card: {
		margin: "10px",
		marginRight: "20px",
		marginLeft: "20px",
		// padding: "20px",
		textAlign: "center",
		border: "1px solid green"
	}
}));

export default function Jumbotron_categorias() {
	const classes = useStyles();

	return (
		<Paper className={classes.mainFeaturedPost}>
			<Grid container maxwidth="lg">
				<Grid item md={6} className="p-3 pt-5">
					<Typography component="h1" variant="h2" color="inherit" align="center" gutterBottom>
						Principales categorias
					</Typography>
					<Typography color="inherit" align="justify" paragraph>
						Encuentra entre la multitud de categorías disponibles la materia que buscas, y participa de la
						comunidad como profesor o alumno de forma dinámica.
					</Typography>
				</Grid>

				<Grid item md={3}>
					<CardActionArea component="a" href="#">
						<Card className={classes.card}>
							<CardContent>
								<Typography component="h2" variant="h5">
									Matemática
								</Typography>
							</CardContent>
						</Card>
					</CardActionArea>

					<CardActionArea component="a" href="#">
						<Card className={classes.card}>
							<CardContent>
								<Typography component="h2" variant="h5">
									Física
								</Typography>
							</CardContent>
						</Card>
					</CardActionArea>

					<CardActionArea component="a" href="#">
						<Card className={classes.card}>
							<CardContent>
								<Typography component="h2" variant="h5">
									Filosofía
								</Typography>
							</CardContent>
						</Card>
					</CardActionArea>
				</Grid>

				<Grid item md={3}>
					<CardActionArea component="a" href="#">
						<Card className={classes.card}>
							<CardContent>
								<Typography component="h2" variant="h5">
									Programación
								</Typography>
							</CardContent>
						</Card>
					</CardActionArea>

					<CardActionArea component="a" href="#">
						<Card className={classes.card}>
							<CardContent>
								<Typography component="h2" variant="h5">
									Inglés
								</Typography>
							</CardContent>
						</Card>
					</CardActionArea>

					<CardActionArea component="a" href="#">
						<Card className={classes.card}>
							<CardContent>
								<Typography component="h2" variant="h5">
									Ciencia de Datos
								</Typography>
							</CardContent>
						</Card>
					</CardActionArea>
				</Grid>
			</Grid>
		</Paper>
	);
}
