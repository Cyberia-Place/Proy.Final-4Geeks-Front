import React, { useContext, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { makeStyles } from "@material-ui/core/styles";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
	textarea: {
		resize: "both"
	}
}));

export default function Agregar_link(props) {
	const classes = useStyles();
	const { store, actions } = useContext(Context);
	const [url, setUrl] = useState(props.url ? props.url : "");

	const updateProfile = () => {
		actions.updateProfile({ url: url });
	};

	return (
		<Grid>
			<Typography variant="h6" aling="left" className="mt-3" gutterBottom>
				Link sala principal
			</Typography>
			<Grid container spacing={3} md={6} className="m-auto">
				<Grid md={12}>
					<Grid item xs={12} sm={6} md={6}>
						<TextField
							required
							id="link"
							name="link"
							label="Agregar link:"
							fullWidth
							value={url}
							onChange={event => {
								setUrl(event.target.value);
							}}
						/>
					</Grid>
				</Grid>
				<Button color="primary" variant="contained" className="m-4" onClick={updateProfile}>
					Guardar
				</Button>
			</Grid>

			<Divider variant="middle" />
		</Grid>
	);
}

Agregar_link.propTypes = {
	url: PropTypes.string
};
