import React, { useContext } from "react";
import { BotonMentoria } from "../component/nueva_mentoria";
import { CarrouselMentorias } from "../component/carrousel_mentorias";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { Calendario } from "../component/calendario";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Context } from "../store/appContext";
import { useEffect } from "react";
import { LinearProgress } from "@material-ui/core";

const useStyles = makeStyles({
	box1: {
		position: "relative"
	},
	box2: {
		height: "45vh",
		minHeight: "30px"
	},
	calendario: {
		marginTop: "7px"
	},
	cubreCalendario: {
		// Este es un div que se superpone al calendario, que es un input, para deshabilitarlo
		position: "absolute",
		width: "330px",
		height: "260px",
		backgroundColor: "transparent",
		top: "85px",
		zIndex: "1"
	}
});

export const IndexProfesor = () => {
	const { store, actions } = useContext(Context);

	const classes = useStyles();

	useEffect(() => {
		actions.darClasesDocente();
	}, []);

	return (
		<div className={classes.box1}>
			{store.teacherClases ? (
				<>
					<Grid container>
						<Grid container direction="row" justify="center" alignItems="center" xs={4}>
							<div className={classes.cubreCalendario} />
							<div className={classes.calendario}>
								<Calendario fechas={store.calendario} />
							</div>
						</Grid>
						<Grid item xs={8}>
							<CarrouselMentorias clases={store.teacherClases} />
						</Grid>
					</Grid>
					<Divider orientation="horizontal" fullwidth="true" />
					<Grid container direction="row" justify="center" alignItems="center" xs={4}>
						<Box display="flex" alignItems="center" className={classes.box2}>
							<BotonMentoria />
						</Box>
					</Grid>
					<Grid item className="invisible" xs={8}>
						{/* <CarrouselMentorias /> */}
					</Grid>
				</>
			) : (
				<>
					<LinearProgress />
				</>
			)}
		</div>
	);
};
