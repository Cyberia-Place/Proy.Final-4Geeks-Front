import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";

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
		padding: "20px",
		textAlign: "center",
		border: "1px solid green"
	},
	image: {
		backgroundImage: "url(https://source.unsplash.com/random)"
	}
}));

export default function Jumbotron_categorias() {
	const classes = useStyles();

	return (
		<Paper className={classes.mainFeaturedPost}>
			<Grid container maxwidth="lg">
				<Grid md={6} className="p-3 pt-5">
					<Typography component="h1" variant="h2" color="inherit" gutterBottom>
						Principales categorias
					</Typography>
					<Typography color="inherit" paragraph>
						Something short and leading about the collection below—its contents, the creator, etc. Make it
						short and sweet, but not too short so folks don&apos;t simply skip over it entirely.
					</Typography>
				</Grid>

				<Grid container md={3}>
					<CardActionArea component="a" href="#">
						<Card className={classes.card}>
							<CardContent>
								<Typography component="h2" variant="h5">
									Literatura
								</Typography>

								<Button variant="contained" color="primary" className="mt-3" size="large">
									Ver cursos
								</Button>
							</CardContent>
						</Card>
					</CardActionArea>

					<CardActionArea component="a" href="#">
						<Card className={classes.card}>
							<CardContent>
								<Typography component="h2" variant="h5">
									Matemática
								</Typography>

								<Button variant="contained" color="primary" className="mt-3" size="large">
									Ver cursos
								</Button>
							</CardContent>
						</Card>
					</CardActionArea>
				</Grid>

				<Grid container md={3}>
					<CardActionArea component="a" href="#">
						<Card className={classes.card}>
							<CardContent>
								<Typography component="h2" variant="h5">
									Biología
								</Typography>
								<Button variant="contained" color="primary" className="mt-3" size="large">
									Ver cursos
								</Button>
							</CardContent>
						</Card>
					</CardActionArea>

					<CardActionArea component="a" href="#">
						<Card className={classes.card}>
							<CardMedia className={classes.image} />
							<CardContent>
								<Typography component="h2" variant="h5">
									Programación JavaScript
								</Typography>

								<Button variant="contained" color="primary" className="mt-3" size="large">
									Ver cursos
								</Button>
							</CardContent>
						</Card>
					</CardActionArea>
				</Grid>
			</Grid>
		</Paper>
	);
}
