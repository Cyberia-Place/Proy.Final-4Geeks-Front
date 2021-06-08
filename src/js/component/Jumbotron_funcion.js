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
		marginTop: "100px"
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
				<Grid container md={4} className={classes.image} />

				<Grid item md={6}>
					<div className={classes.mainFeaturedPostContent}>
						<Typography component="h1" variant="h2" color="inherit" gutterBottom>
							¿Cómo funciona?
						</Typography>
						<Typography color="inherit" paragraph>
							Something short and leading about the collection below—its contents, the creator, etc. Make
							it short and sweet, but not too short so folks don&apos;t simply skip over it entirely.
						</Typography>
					</div>
				</Grid>
			</Grid>
		</Paper>
	);
}
