import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Button from "@material-ui/core/Button";
import { Context } from "../store/appContext";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	box: {
		margin: "auto",
		width: 250
	},
	image: {
		height: "160px",
		width: "160px"
	},
	typography: {
		fontSize: "1.2rem",
		"@media (min-width:600px)": {
			fontSize: "1.5rem"
		},
		[theme.breakpoints.up("md")]: {
			fontSize: "2rem"
		}
	}
}));

export default function CardCompra() {
	const classes = useStyles();
	const [value, setValue] = React.useState(2);
	const preventDefault = event => event.preventDefault();
	const { store, actions } = useContext(Context);

	const checkout = () => {
		actions.checkout();
	};

	return (
		<div>
			<Box mt={3}>
				<Box className={classes.box} borderRadius="borderRadius" border={2} borderColor="#666666">
					<Box display="flex" flexDirection="column">
						<Box display="flex" alignItems="center" flexDirection="column" my={1}>
							<MonetizationOnIcon fontSize="large" />
							<Typography mb={0} variant="h4">
								100
							</Typography>
							<Typography variant="h6">creditos</Typography>
						</Box>
						<Box display="flex" justifyContent="center" my={2}>
							<Typography variant="h1" gutterBottom>
								<strong>$10</strong>
							</Typography>
						</Box>
						<Box display="flex" justifyContent="center" mb={3}>
							<Button variant="contained" color="primary" onClick={checkout}>
								Comprar
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</div>
	);
}
