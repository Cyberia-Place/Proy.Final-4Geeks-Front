import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Informacion_form from "../component/informacion_del_perfil";
import Contraseña_form from "../component/contraseña";
import Pago_form from "../component/Información_pago";
import Cambiar_foto from "../component/cambiar_foto";

export const Home = () => (
	<div className="text-center mt-5">
		<Cambiar_foto />
		<Informacion_form />
		<Contraseña_form />
		<Pago_form />
	</div>
);
