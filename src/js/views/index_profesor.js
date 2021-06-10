import React from "react";
import { BotonMentoria } from "../component/nueva_mentoria";
import { CarrouselMentorias } from "../component/carrousel_mentorias";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { NavbarSesion } from "../component/navbar_sesion";
import { Calendario } from "../component/calendario";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	box1: {
		position: "relative",
		height: "100%",
		width: "100%"
	},
	box2: {
		position: "absolute",
		bottom: "-180px",
		left: "60px"
	},
	cubreCalendario: {
		position: "absolute",
		width: "300px",
		height: "260px",
		// backgroundColor: "transparent",
		backgroundColor: "transparent",
		top: "90px",
		zIndex: "1"
	}
});

export const IndexProfesor = () => {
	const classes = useStyles();

	return (
		<div className={classes.box1}>
			<Grid container spacing={10}>
				<Grid container direction="row" justify="center" alignItems="center" xs={4}>
					<div className={classes.cubreCalendario} />
					<Calendario />
				</Grid>
				<Grid item xs={8}>
					<CarrouselMentorias />
				</Grid>
			</Grid>
			<Divider orientation="horizontal" fullwidth="true" />
			<div className={classes.box2}>
				<BotonMentoria />
			</div>
		</div>
	);
};
