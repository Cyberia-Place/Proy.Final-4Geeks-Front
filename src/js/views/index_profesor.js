import React from "react";
import { BotonMentoria } from "../component/nueva_mentoria";
import { CarrouselMentorias } from "../component/carrousel_mentorias";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { NavbarSesion } from "../component/navbar_sesion";

export const IndexProfesor = () => {
	return (
		<div>
			<NavbarSesion />
			<Grid container spacing={10}>
				<Grid item xs={3}>
					Calendario
				</Grid>
				<Grid item xs={9}>
					<CarrouselMentorias />
				</Grid>
			</Grid>
			<Divider orientation="horizontal" fullwidth />
			<BotonMentoria />
		</div>
	);
};
