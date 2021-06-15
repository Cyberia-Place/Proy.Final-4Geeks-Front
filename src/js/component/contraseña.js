import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		height: "200px"
	}
}));

export default function Contraseña_form() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Typography variant="h6" justify="center" color="primary" className="mt-3" gutterBottom>
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
						/>
					</Grid>
					<Grid item md={4} className="mr-2">
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
				<Button color="primary" variant="contained" className="m-4">
					Guardar
				</Button>
			</Grid>

			<Divider variant="middle" />
		</React.Fragment>
	);
}
