import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

export default function Contraseña_form() {
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
						/>
					</Grid>
					<Grid item md={4} className="m-2">
						<TextField
							required
							id="newpPassword"
							name="password3"
							label="Nueva contraseña:"
							fullWidth
							autoComplete="password"
						/>
					</Grid>
				</Grid>
			</Grid>
			<Button className="m-5">Guardar</Button>
			<Divider variant="middle" />
		</React.Fragment>
	);
}
