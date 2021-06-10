import React from "react";
import "../../styles/home.scss";
import MainFeaturedPost from "../component/Jumbotron_principal";
import Jumbotron_funcion from "../component/Jumbotron_funcion";
import Jumbotron_categorias from "../component/jumbotron_categorias";
import Jumbotron_beneficios from "../component/Jumbotron_beneficios";

import { Navbar } from "../component/navbar";
import Proxima_clase from "../component/Jumbotron_prox_clase";

export const Home = () => (
	<div>
		<Navbar />

		<MainFeaturedPost />
		<Jumbotron_funcion />
		<Jumbotron_beneficios />
		<Jumbotron_categorias />
	</div>
);
