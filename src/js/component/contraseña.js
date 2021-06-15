import React, { useContext, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Context } from "../store/appContext";
import validator from "validator";

export default function Contraseña_form(props) {
	const { store, actions } = useContext(Context);
	const [contrasenia, setContrasenia] = useState("");
	const [contraseniaNueva, setContraseniaNueva] = useState("");
	const [contraseniaNueva2, setContraseniaNueva2] = useState("");

	const updatePassword = () => {
		if (
			validator.isEmpty(contrasenia) ||
			validator.isEmpty(contraseniaNueva) ||
			validator.isEmpty(contraseniaNueva2)
		) {
			actions.showMessage("Error!", "Faltan Parametros", "error");
		} else {
			if (contraseniaNueva2 != contraseniaNueva) {
				actions.showMessage("Error!", "La confirmacion de contrasenia no coincide", "error");
			} else {
				actions.updatePassword({
					contraseniaPrevia: contrasenia,
					contraseniaNueva: contraseniaNueva
				});
			}
		}
	};

	return (
		<React.Fragment>
			<Typography variant="h6" align="center" className="mt-3" gutterBottom>
				Modificar contraseña
			</Typography>
			<Grid container spacing={3} md={6} className="m-auto">
				<Grid container md={12}>
					<Grid item md={3} className="m-2">
						<TextField
							required
							id="password"
							name="password"
							label="Contraseña actual:"
							fullWidth
							autoComplete="password"
							onChange={event => {
								setContrasenia(event.target.value);
							}}
						/>
					</Grid>
					<Grid item md={4} className="m-2">
						<TextField
							required
							id="newPassword"
							name="password2"
							label="Nueva contraseña:"
							fullWidth
							autoComplete="password"
							onChange={event => {
								setContraseniaNueva(event.target.value);
							}}
						/>
					</Grid>
					<Grid item md={4} className="m-2">
						<TextField
							required
							id="newpPassword"
							name="password3"
							label="Confirmar contraseña:"
							fullWidth
							autoComplete="password"
							onChange={event => {
								setContraseniaNueva2(event.target.value);
							}}
						/>
					</Grid>
				</Grid>
			</Grid>
			<Button className="m-5" onClick={updatePassword}>
				Guardar
			</Button>
			<Divider variant="middle" />
		</React.Fragment>
	);
}
