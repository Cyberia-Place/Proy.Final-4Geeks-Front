import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	textarea: {
		resize: "both"
	}
}));

export default function Informacion_form() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Typography variant="h6" aling="left" className="mt-3" color="primary" gutterBottom>
				Información del perfil
			</Typography>
			<Grid container spacing={3} md={6} justify="center" className="m-auto">
				<Grid item xs={12} sm={6} md={6}>
					<TextField
						required
						id="firstName"
						name="firstName"
						label="Nombre completo:"
						fullWidth
						autoComplete="given-name"
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={6}>
					<TextField required id="age" name="age" label="Edad:" fullWidth autoComplete="age" />
				</Grid>
				<Grid item xs={12} sm={6} md={6}>
					<TextField
						required
						id="email"
						name="email"
						label="Correo electronico:"
						fullWidth
						autoComplete="email"
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={6}>
					<TextField
						required
						id="language"
						name="language"
						label="idioma:"
						fullWidth
						autoComplete="language"
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={6}>
					<TextField required id="city" name="city" label="País" fullWidth autoComplete="address" />
				</Grid>
				<Grid item xs={12} sm={6} md={6}>
					<TextField required id="ocupacion" name="ocupacion" label="Ocupacion:" fullWidth />
				</Grid>
				<Grid item xs={12} sm={12} md={12}>
					<TextField
						id="outlined-textarea"
						label="Descripcion:"
						placeholder="Descripcion:"
						multiline
						fullWidth
						rows={6}
						variant="outlined"
						inputProps={{ className: classes.textarea }}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={12}>
					<Button color="primary" variant="contained" className="m-4">
						Guardar
					</Button>
				</Grid>
			</Grid>

			<Divider variant="middle" />
		</React.Fragment>
	);
}
