import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Informacion_form from "../component/informacion_del_perfil";
import Contraseña_form from "../component/contraseña";
import Pago_form from "../component/Informacion_pago";
import Cambiar_foto from "../component/cambiar_foto";
import Agregar_link from "../component/agregar-link";

export const Ajustes_del_perfil = () => {
	

	return (
        <div className="container p-2 m-auto">
		<Cambiar_foto/>
        <Informacion_form/>
        <Contraseña_form/>
        <Pago_form/>
        <Agregar_link/>
        </div>
	);
};
