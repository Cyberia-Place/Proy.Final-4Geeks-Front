import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
	mainFeaturedPost: {
		backgroundColor: theme.palette.grey[200],
		color: theme.palette.common.black,
		padding: "2px"
	},
	mentorshipCard: {}
}));

export const CarrouselMentorias = () => {
	const classes = useStyles();
	return (
		<Carousel>
			<Grid container direction="row" justify="center" alignItems="center" spacing={3}>
				<Grid item xs>
					<Paper className={classes.mentorshipCard}>
						Categoria
						<Divider orientation="horizontal" variant="middle" />
						Materia Fecha Hora
					</Paper>
				</Grid>
				<Grid item xs>
					<Paper className={classes.mentorshipCard}>
						Categoria
						<Divider orientation="horizontal" variant="middle" />
						Materia Fecha Hora
					</Paper>
				</Grid>
				<Grid item xs>
					<Paper className={classes.mentorshipCard}>
						Categoria
						<Divider orientation="horizontal" variant="middle" />
						Materia Fecha Hora
					</Paper>
				</Grid>
			</Grid>
		</Carousel>
	);
};
