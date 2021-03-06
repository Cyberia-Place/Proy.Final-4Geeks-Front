import React, { useContext, useState } from "react";
import CardProf from "../component/card_prof";
// import SelectorHora from "../component/selector_hora";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import { TextField, makeStyles } from "@material-ui/core";
import { Context } from "../store/appContext";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import swal from "sweetalert2";

const muiTheme = createMuiTheme({
	palette: {
		primary: {
			main: "#59a80f"
		},
		secondary: {
			main: "#65bf11"
		}
	}
});

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

export const ListaClases = props => {
	const classes = useStyles();

	const { store, actions } = useContext(Context);
	const [selectedDay, setSelectedDay] = useState("-1");
	const [selectedHour, setSelectedHour] = useState("-1");

	// Falta esta funcion
	const cardListFilter = event => {
		event.preventDefault();
		let filter = "?";
		if (selectedDay != -1) {
			filter += "week_day=" + selectedDay;
			if (selectedHour != -1) {
				filter += "&hora_inicio=" + selectedHour;
			}
		} else {
			if (selectedHour != -1) {
				filter += "hora_inicio=" + selectedHour;
			}
		}
		actions.filtrarCards(filter);
		setSelectedDay("-1");
		setSelectedHour("-1");
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
					<form onSubmit={event => cardListFilter(event)}>
						<Box display="flex" flexDirection="row" alignItems="center">
							<ThemeProvider theme={muiTheme}>
								<ButtonGroup
									variant="contained"
									color="primary"
									aria-label="contained primary button group">
									<Button
										onClick={() => setSelectedDay("1")}
										color={selectedDay == "1" ? "secondary" : "primary"}>
										LUN
									</Button>
									<Button
										onClick={() => setSelectedDay("2")}
										color={selectedDay == "2" ? "secondary" : "primary"}>
										MAR
									</Button>
									<Button
										onClick={() => setSelectedDay("3")}
										color={selectedDay == "3" ? "secondary" : "primary"}>
										MIE
									</Button>
									<Button
										onClick={() => setSelectedDay("4")}
										color={selectedDay == "4" ? "secondary" : "primary"}>
										JUE
									</Button>
									<Button
										onClick={() => setSelectedDay("5")}
										color={selectedDay == "5" ? "secondary" : "primary"}>
										VIE
									</Button>
									<Button
										onClick={() => setSelectedDay("6")}
										color={selectedDay == "6" ? "secondary" : "primary"}>
										SAB
									</Button>
								</ButtonGroup>
							</ThemeProvider>
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
				{props.clases.length > 0
					? props.clases.map(clase => {
							return (
								<Grid key={clase.id} item xs={12}>
									<CardProf clase={clase} />
								</Grid>
							);
					  })
					: "no hay clases"}
			</Grid>
		</Container>
	);
};

ListaClases.propTypes = {
	clases: PropTypes.array
};
