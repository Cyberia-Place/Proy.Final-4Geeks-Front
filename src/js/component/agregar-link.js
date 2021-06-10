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

export default function Agregar_link() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Typography variant="h6" aling="left" className="mt-3" gutterBottom>
				Link sala principal
			</Typography>
			<Grid container spacing={3} md={6} justify="center" className="m-auto">
				<Grid item xs={12} sm={6} md={6}>
					<TextField required id="link" name="link" label="Agregar link:" fullWidth />
				</Grid>
			</Grid>
			<Button className="m-5" justify="center">
				Guardar
			</Button>
			<Divider variant="middle" />
		</React.Fragment>
	);
}
