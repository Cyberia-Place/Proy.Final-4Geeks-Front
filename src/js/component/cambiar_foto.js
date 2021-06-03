import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

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
export default function Cambiar_foto() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Grid container spacing={3} md={12} justify="center" className="m-auto">
				<Grid item className="m-3">
					<img src="https://source.unsplash.com/random" className={classes.img} />
				</Grid>
				<Grid item className="m-3 mt-4">
					<label htmlFor="upload-photo">
						<input style={{ display: "none" }} id="upload-photo" name="upload-photo" type="file" />

						<Button color="secondary" variant="contained" component="span">
							Cambiar foto
						</Button>
					</label>
				</Grid>
			</Grid>
			<Divider variant="middle" />
		</React.Fragment>
	);
}
