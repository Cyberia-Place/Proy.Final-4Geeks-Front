import React, { useContext, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { Context } from "../store/appContext";
import validator from "validator";

const useStyles = makeStyles(theme => ({
	root: {
		height: "200px"
	}
}));

export default function Contraseña_form(props) {
	const { store, actions } = useContext(Context);
	const [contrasenia, setContrasenia] = useState("");
	const [contraseniaNueva, setContraseniaNueva] = useState("");
	const [contraseniaNueva2, setContraseniaNueva2] = useState("");
	const classes = useStyles();

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
			<Typography variant="h6" justify="center" className="mt-3" gutterBottom>
				Modificar contraseña
			</Typography>
			<Grid container spacing={3} md={7} className="m-auto">
				<Grid container md={12} className={classes.root}>
					<Grid item md={4} className="ml-2">
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
					<Grid item md={4} className="ml-2">
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
					<Grid item md={4} className="mr-2">
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
				<Button color="primary" variant="contained" className="m-4" onClick={updatePassword}>
					Guardar
				</Button>
			</Grid>
			<Divider variant="middle" />
		</React.Fragment>
	);
}
