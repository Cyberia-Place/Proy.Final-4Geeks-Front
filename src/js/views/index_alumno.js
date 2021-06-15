import React, { useContext } from "react";
import { ListaClases } from "../component/lista_clases";
import Proxima_clase from "../component/Jumbotron_prox_clase";
import Clases_List from "../component/Lista_clases_inscrito";
import { useEffect } from "react";
import { Context } from "../store/appContext";
import { LinearProgress } from "@material-ui/core";

export const InicioAlumno = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.darClases();
		actions.darClasesUsuario();
	}, []);

	return (
		<div>
			{store.clases && store.userClases ? (
				<div className="flex-container m-4 p-4 d-flex pt-3">
					<div className="col-12 col-md-2 mt-3">
						<Clases_List clases={store.userClases.nextClases} />
					</div>
					<div className="col-12 col-md-7">
						<ListaClases clases={store.clases} />
					</div>
					<div className="col-12 col-md-3 mt-3">
						<Proxima_clase />
					</div>
				</div>
			) : (
				<>
					<LinearProgress />
				</>
			)}
		</div>
	);
};
