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
					<div
						className={
							"col-3" +
							// col-md-2
							"mt-3"
						}>
						<Proxima_clase clase={store.userClases.nextClases[0]} />
						<Clases_List clases={store.userClases} />
					</div>
					<div className="col-9 col-md-7">
						<ListaClases clases={store.clases} />
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
