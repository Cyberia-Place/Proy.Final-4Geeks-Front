import React, { useEffect, useContext } from "react";
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
import { Context } from "../store/appContext";
import { LinearProgress } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	body: {
		padding: "5px",
		margin: "auto"
	},
	root: {
		backgroundColor: "#c8e6c9"
	}
}));

export const Ajustes_del_perfil = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getProfile();
	}, []);
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<>
				{store.userData ? (
					<div className="container">
						<Card className={classes.body}>
							<Cambiar_foto src={store.userData.imagen} />
							<Informacion_form
								descripcion={store.userData.descripcion}
								nombre={store.userData.nombre}
								email={store.userData.email}
								ocupacion={store.userData.ocupacion}
								pais={store.userData.pais}
								lenguage={store.userData.lenguage}
								edad={store.userData.edad}
							/>
							<Contraseña_form />
							<Pago_form />
							<Agregar_link />
						</Card>
					</div>
				) : (
					<>
						<LinearProgress />
					</>
				)}
			</>
		</div>
	);
};
