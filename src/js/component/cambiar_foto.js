import React, { useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		"& > *": {
			margin: theme.spacing(1)
		}
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7)
	},
	img: {
		height: "200px",
		width: "200px"
	}
}));
export default function Cambiar_foto(props) {
	const classes = useStyles();
	const { store, actions } = useContext(Context);
	const [src, setSrc] = useState(props.src ? props.src : "");

	const updateProfile = () => {
		actions.updateProfile({ imagen: src });
	};

	return (
		<React.Fragment>
			<Typography variant="h6" aling="left" className="mt-3" gutterBottom>
				Cambiar foto
			</Typography>
			<Grid container spacing={3} md={12} className="m-auto">
				<Grid item className="m-3">
					<img src={src != "" ? src : "https://fondosmil.com/fondo/17012.jpg"} className={classes.img} />
				</Grid>
				<Grid item className="m-3 mt-4">
					<TextField
						required
						id="upload-photo"
						name="upload-photo"
						label="URL imagen:"
						fullWidth
						autoComplete="given-name"
						value={src}
						onChange={event => {
							setSrc(event.target.value);
						}}
					/>
					<Button color="secondary" variant="contained" onClick={updateProfile} component="span">
						Cambiar foto
					</Button>
				</Grid>
			</Grid>
			<Divider variant="middle" />
		</React.Fragment>
	);
}

Cambiar_foto.propTypes = {
	src: PropTypes.string
};
