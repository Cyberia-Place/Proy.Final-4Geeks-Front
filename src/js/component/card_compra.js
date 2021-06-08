import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		margin: "auto",
		width: 250
	},
	image: {
		height: "160px",
		width: "160px"
	}
}));

export default function CardCompra() {
	const classes = useStyles();
	const [value, setValue] = React.useState(2);
	const preventDefault = event => event.preventDefault();

	return (
		<div>
			<Box mt={3}>
				<Paper className={classes.paper}>
					<Box display="flex" flexDirection="column">
						<Box display="flex" justifyContent="center" my={3}>
							<Typography variant="h4" gutterBottom>
								<MonetizationOnIcon fontSize="large" /> 300
							</Typography>
						</Box>
						<Box display="flex" justifyContent="center" my={3}>
							<Typography variant="h2" gutterBottom>
								$10
							</Typography>
						</Box>
						<Box display="flex" justifyContent="center" my={3}>
							<Button variant="contained" color="primary">
								Comprar
							</Button>
						</Box>
					</Box>
				</Paper>
			</Box>
		</div>
	);
}
