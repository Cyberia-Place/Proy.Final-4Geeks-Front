import React from "react";
import { Grid, OutlinedInput, InputLabel, makeStyles } from "@material-ui/core";

// const useStyles = makeStyles({
// 	form: {}
// });

export const CambioPassword = () => {
	// const classes = useStyles();

	return (
		<div style={{ backgroundColor: "#252525" }} className="d-flex justify-content-center h-100">
			<div
				className="p-5 bg-light d-flex align-items-center"
				style={{
					width: "50vw",
					height: "100%",
					borderLeft: "4px solid #59a80f",
					borderRight: "4px solid #59a80f"
				}}>
				<Grid container direction="column" justify="center" alignItems="center" spacing={6}>
					<Grid item xs={12}>
						<InputLabel>Antigua contraseña</InputLabel>
						<OutlinedInput variant="outlined" color="secondary" />
					</Grid>
					<Grid item xs={12}>
						<InputLabel>Nueva contraseña</InputLabel>
						<OutlinedInput variant="outlined" color="secondary" />
					</Grid>
					<Grid item xs={12}>
						<InputLabel>Repita nueva contraseña</InputLabel>
						<OutlinedInput variant="outlined" color="secondary" />
					</Grid>
				</Grid>
			</div>
		</div>
	);
};
