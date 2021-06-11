import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Informacion_form from "../component/informacion_del_perfil";
import Contraseña_form from "../component/contraseña";
import Pago_form from "../component/Informacion_pago";
import Cambiar_foto from "../component/cambiar_foto";
import Agregar_link from "../component/agregar-link";
import { Context } from "../store/appContext";
import { LinearProgress } from "@material-ui/core";

export const Ajustes_del_perfil = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getProfile();
	}, []);

	return (
		<>
			{store.userData ? (
				<div className="container p-2 m-auto">
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
				</div>
			) : (
				<>
					<LinearProgress />
				</>
			)}
		</>
	);
};
