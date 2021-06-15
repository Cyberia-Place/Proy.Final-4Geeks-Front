import React, { useContext, useState } from "react";
import CardProf from "../component/card_prof";
// import SelectorHora from "../component/selector_hora";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Context } from "../store/appContext";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
	container: {
		display: "flex",
		flexWrap: "wrap"
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200
	}
}));

export const ListaClases = () => {
	const classes = useStyles();

	const { store, actions } = useContext(Context);

	const [selectedDay, setSelectedDay] = useState();
	const [selectedHour, setSelectedHour] = useState();

	// Falta esta funcion
	const cardList = () => {
		const filter = "?" + selectedDay;
		actions.filtrarCards(filter);
	};

	return (
		<Container maxWidth="lg">
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Box m={4} ml={0} mb={0}>
						<Typography variant="h2">Clases disponibles</Typography>
					</Box>
				</Grid>
				<Grid item lg={12} direction="row" alignItems="center">
					<form onSubmit={cardList}>
						<Box display="flex" flexDirection="row" alignItems="center">
							<ButtonGroup
								variant="contained"
								color="primary"
								aria-label="contained primary button group">
								<Button onClick={() => setSelectedDay("2")}>LUN</Button>
								<Button onClick={() => setSelectedDay("3")}>MAR</Button>
								<Button onClick={() => setSelectedDay("4")}>MIE</Button>
								<Button onClick={() => setSelectedDay("5")}>JUE</Button>
								<Button onClick={() => setSelectedDay("6")}>VIE</Button>
								<Button onClick={() => setSelectedDay("7")}>SAB</Button>
							</ButtonGroup>
							<Box ml="auto" display="flex" flexDirection="row" alignItems="center">
								{/* SELECTOR HORA */}
								<div className={classes.container}>
									<TextField
										onChange={event => setSelectedHour(event.target.value)}
										id="time"
										label="Hora de comienzo"
										type="time"
										defaultValue="07:30"
										className={classes.textField}
										InputLabelProps={{
											shrink: true
										}}
										inputProps={{
											step: 300 // 5 min
										}}
									/>
								</div>
								<Button type="submit" variant="contained" color="primary" size="small">
									Filtrar
								</Button>
							</Box>
						</Box>
					</form>
				</Grid>
				<Grid item lg={12}>
					<CardProf />
				</Grid>
				<Grid item lg={12}>
					<CardProf />
				</Grid>
				<Grid item lg={12}>
					<CardProf />
				</Grid>
				<Grid item lg={12}>
					<CardProf />
				</Grid>
				<Grid item lg={12}>
					<CardProf />
				</Grid>
				<Grid item lg={12}>
					<CardProf />
				</Grid>
			</Grid>
		</Container>
	);
};
