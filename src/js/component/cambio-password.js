import React, { useContext, useState } from "react";
import { Grid, InputLabel, makeStyles, Typography, OutlinedInput, Button } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

const useStyles = makeStyles({
	button: {
		width: "40vw"
	}
});

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

export const CambioPassword = () => {
	const classes = useStyles();
	let query = useQuery();
	const { store, actions } = useContext(Context);

	const [contraseniaNueva, setContraseniaNueva] = useState("");
	const [contraseniaNueva2, setContraseniaNueva2] = useState("");

	const resetPassword = () => {
		if (
			query.get("token") &&
			contraseniaNueva != "" &&
			contraseniaNueva2 != "" &&
			contraseniaNueva === contraseniaNueva2
		) {
			actions.resetPassword(query.get("token"), contraseniaNueva);
		}
	};

	return (
		<div style={{ backgroundColor: "#252525" }} className="d-flex justify-content-center h-100">
			<div
				className="p-5 bg-light"
				style={{
					width: "50vw",
					height: "100%",
					borderLeft: "4px solid #59a80f",
					borderRight: "4px solid #59a80f"
				}}>
				<Typography variant="h3" align="center" gutterBottom>
					Cambio de contraseña
				</Typography>
				<br />
				<div style={{ width: "70%", height: "100%" }} className="mx-auto">
					<div style={{ width: "100%", marginBottom: "30px" }}>
						<InputLabel>Nueva contraseña</InputLabel>
						<OutlinedInput
							color="primary"
							fullWidth={true}
							onChange={event => {
								setContraseniaNueva(event.target.value);
							}}
						/>
					</div>
					<div style={{ width: "100%", marginBottom: "30px" }}>
						<InputLabel>Repita nueva contraseña</InputLabel>
						<OutlinedInput
							color="primary"
							fullWidth={true}
							onChange={event => {
								setContraseniaNueva2(event.target.value);
							}}
						/>
						<div style={{ width: "60%", marginTop: "30px" }} className="mx-auto">
							<Button
								className="mx-auto"
								variant="contained"
								color="primary"
								fullWidth={true}
								onClick={resetPassword}>
								Enviar
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
