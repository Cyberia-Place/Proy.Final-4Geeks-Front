import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
	mainFeaturedPost: {
		position: "relative",
		backgroundColor: theme.palette.white,
		color: theme.palette.common.black,
		height: "300px",
		width: "100%",
		marginTop: "100px",
		border: "none",
		boxShadow: "none"
	},
	mainFeaturedPostContent: {
		padding: theme.spacing(3),
		[theme.breakpoints.up("md")]: {
			padding: theme.spacing(6)
		}
	},
	image: {
		backgroundImage: "url(https://source.unsplash.com/random)",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "center",
		marginRight: "20px"
	}
}));

export default function Jumbotron_funcion() {
	const classes = useStyles();

	return (
		<Paper className={classes.mainFeaturedPost}>
			<Grid container maxwidth="lg" justify="flex-end">
				<Grid item md={4} className={classes.image} />

				<Grid item md={6}>
					<div className={classes.mainFeaturedPostContent}>
						<Typography component="h1" variant="h2" color="inherit" gutterBottom>
							¿Cómo funciona?
						</Typography>
						<Typography color="inherit" paragraph>
							La educación online permite que estas personas continúen con su formación, cómodamente y
							desde casa. Da igual la edad que tengas: tanto puede servirle al que roza los 30 como al que
							pasa de 50.
						</Typography>
					</div>
				</Grid>
			</Grid>
		</Paper>
	);
}
