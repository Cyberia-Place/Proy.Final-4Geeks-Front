import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Informacion_form from "../component/informacion_del_perfil";
import Contraseña_form from "../component/contraseña";
import Pago_form from "../component/Informacion_pago";
import Cambiar_foto from "../component/cambiar_foto";
import Agregar_link from "../component/agregar-link";
import { makeStyles } from "@material-ui/core/styles";
import { Navbar } from "../component/navbar";
import green from "@material-ui/core/colors/green";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles(theme => ({
	body: {
		padding: "5px",
		margin: "auto"
	}
}));

export const Ajustes_del_perfil = () => {
	const classes = useStyles();
	return (
		<div>
			<Navbar />
			<div className="container">
				<Card className={classes.body}>
					<Cambiar_foto />
					<Informacion_form />
					<Contraseña_form />
					<Pago_form />
					<Agregar_link />
				</Card>
			</div>
		</div>
	);
};
