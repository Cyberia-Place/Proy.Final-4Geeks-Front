import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

export default function Pago_form() {
	return (
		<React.Fragment>
			<Typography variant="h6" className="mt-3" gutterBottom>
				Información de pago
			</Typography>
			<Grid container spacing={3} md={6} justify="center" className="m-auto">
				<Grid item xs={12} md={6}>
					<TextField required id="cardName" label="Nombre de la tarjeta:" fullWidth autoComplete="cc-name" />
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField required id="cardNumber" label="Numero tarjeta:" fullWidth autoComplete="cc-number" />
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField required id="expDate" label="Fecha vencimiento:" fullWidth autoComplete="cc-exp" />
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="cvv"
						label="CVV"
						helperText="Last three digits on signature strip"
						fullWidth
						autoComplete="cc-csc"
					/>
				</Grid>

				<Grid item xs={12} sm={6} md={6}>
					<TextField required id="city" name="city" label="País" fullWidth autoComplete="address" />
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						control={<Checkbox color="secondary" name="saveCard" value="yes" />}
						label="Remember credit card details for next time"
					/>
				</Grid>
				<Button className="m-5">Guardar</Button>
			</Grid>
			<Divider variant="middle" />
		</React.Fragment>
	);
}
