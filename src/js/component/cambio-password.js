import React from "react";
import { Grid, InputLabel, makeStyles, Typography, OutlinedInput, Button } from "@material-ui/core";

const useStyles = makeStyles({
	button: {
		width: "40vw"
	}
});

export const CambioPassword = () => {
	const classes = useStyles();

	return (
		<div style={{ backgroundColor: "#252525" }} className="d-flex justify-content-center">
			<div
				className="p-5 bg-light"
				style={{
					width: "50vw",
					height: "100%",
					borderLeft: "4px solid #59a80f",
					borderRight: "4px solid #59a80f"
				}}>
				<Typography variant="h3" align="center" gutterBottom>
					Cambio de contraseña
				</Typography>
				<br />
				<div style={{ width: "70%", height: "100%" }} className="mx-auto">
					<div style={{ width: "100%", marginBottom: "30px" }}>
						<InputLabel>Antigua contraseña</InputLabel>
						<OutlinedInput color="primary" fullWidth={true} />
					</div>
					<div style={{ width: "100%", marginBottom: "30px" }}>
						<InputLabel>Nueva contraseña</InputLabel>
						<OutlinedInput color="primary" fullWidth={true} />
					</div>
					<div style={{ width: "100%", marginBottom: "30px" }}>
						<InputLabel>Repita nueva contraseña</InputLabel>
						<OutlinedInput color="primary" fullWidth={true} />
						<div style={{ width: "60%", marginTop: "30px" }} className="mx-auto">
							<Button className="mx-auto" variant="contained" color="primary" fullWidth={true}>
								Enviar
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
