import React from "react";
import { ListaClases } from "../component/lista_clases";
import Proxima_clase from "../component/Jumbotron_prox_clase";
import Clases_List from "../component/Lista_clases_inscrito";

export const InicioAlumno = () => (
	<div>
		<div className="flex-container m-4 p-4 d-flex pt-3">
			<div className="col-3 mt-3">
				<Proxima_clase />
				<Clases_List />
			</div>
			<div className="col-9">
				<ListaClases />
			</div>
		</div>
	</div>
);
