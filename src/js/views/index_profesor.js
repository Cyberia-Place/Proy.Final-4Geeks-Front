import React from "react";
import { BotonMentoria } from "../component/nueva_mentoria";
import { CarrouselMentorias } from "../component/carrousel_mentorias";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { Calendario } from "../component/calendario";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
	box1: {
		position: "relative"
	},
	box2: {
		height: "50vh",
		minHeight: "30px"
	},
	cubreCalendario: {
		// Este es un div que se superpone al calendario, que es un input, para deshabilitarlo
		position: "absolute",
		width: "300px",
		height: "260px",
		backgroundColor: "transparent",
		top: "90px",
		zIndex: "1"
	}
});

export const IndexProfesor = () => {
	const classes = useStyles();

	return (
		<div className={classes.box1}>
			<Grid container>
				<Grid container direction="row" justify="center" alignItems="center" xs={4}>
					<div className={classes.cubreCalendario} />
					<Calendario />
				</Grid>
				<Grid item xs={8}>
					<CarrouselMentorias />
				</Grid>
			</Grid>
			<Divider orientation="horizontal" fullwidth="true" />
			<Box display="flex" alignItems="center" className={classes.box2}>
				<BotonMentoria />
			</Box>
		</div>
	);
};
