import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
	mainFeaturedPost: {
		position: "relative",
		backgroundColor: theme.palette.grey[800],
		color: theme.palette.common.white,
		marginBottom: theme.spacing(4),
		backgroundImage: "url(https://source.unsplash.com/random)",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		height: "600px",
		width: "100%"
	},
	overlay: {
		position: "absolute",
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: "rgba(0,0,0,.3)"
	},
	mainFeaturedPostContent: {
		position: "relative",
		padding: theme.spacing(3),
		marginTop: "150px"
	}
}));

export default function MainFeaturedPost(props) {
	const classes = useStyles();

	return (
		<Paper className={classes.mainFeaturedPost}>
			<div className={classes.overlay} />
			<Grid container maxwidth="lg">
				<Grid item md={6}>
					<div className={classes.mainFeaturedPostContent}>
						<Typography component="h1" variant="h2" color="inherit" justify="left" gutterBottom>
							Tu curso hacia el exito
						</Typography>
						<Typography color="inherit" justify="left" paragraph>
							Something short and leading about the collection below—its contents, the creator, etc. Make
							it short and sweet, but not too short so folks don&apos;t simply skip over it entirely.
						</Typography>

						<Grid container spacing={2} justify="center" size="large">
							<Grid item>
								<Button variant="contained" color="primary">
									Iniciar sesión
								</Button>
							</Grid>
						</Grid>
					</div>
				</Grid>
			</Grid>
		</Paper>
	);
}

MainFeaturedPost.propTypes = {
	image: PropTypes.object
};
