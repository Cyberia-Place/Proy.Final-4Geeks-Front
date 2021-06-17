import React from "react";
import { makeStyles, useStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import EventIcon from "@material-ui/icons/Event";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import CardCompra from "../component/card_compra";

export default function BodyCompra() {
	const [value, setValue] = React.useState(2);
	const preventDefault = event => event.preventDefault();

	return (
		<div>
			<Container maxWidth="lg">
				<Grid container mt={5}>
					<Grid item sm={12}>
						<Box display="flex" justifyContent="center" my={2}>
							<Typography variant="h3" gutterBottom>
								Selecciona tu promo!
							</Typography>
						</Box>
					</Grid>
					<Grid container lg={12} direction="row" alignItems="center" justify="center" spacing={4}>
						<Grid item lg={3}>
							<CardCompra />
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
