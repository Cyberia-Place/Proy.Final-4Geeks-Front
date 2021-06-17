import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ComputerIcon from "@material-ui/icons/Computer";
import ExtensionIcon from "@material-ui/icons/Extension";
import SchoolIcon from "@material-ui/icons/School";
import Divider from "@material-ui/core/Divider";
const { white } = require("@material-ui/core/colors");

const theme = createMuiTheme({
	spacing: [0, 4, 8, 16, 32, 64],
	height: 500
});

const useStyles = makeStyles(theme => ({
	mainFeaturedPost: {
		backgroundColor: "#59a80f",
		color: theme.palette.common.white,
		padding: "50px",
		height: "500px",
		width: "100%",
		marginTop: "50px",
		textAlign: "center",
		border: "none",
		boxShadow: "none"
	},
	icon: {
		color: white,
		width: "50px",
		height: "50px",
		marginBottom: "20px"
	},
	divider: {
		color: theme.palette.divider
	}
}));

export default function Jumbotron_beneficios() {
	const classes = useStyles();

	return (
		<Grid container className={classes.mainFeaturedPost}>
			<Grid item md={12}>
				<Typography component="h1" variant="h2" color="inherit" aling="center" gutterBottom>
					Beneficios
				</Typography>
			</Grid>

			<Grid item md={12} className="d-flex">
				<Grid className="p-5 h-3">
					<CalendarTodayIcon className={classes.icon} fontSize="large" />
					<Typography color="inherit" paragraph>
						La enseñanza online permite estudiar a distancia y con horarios flexibles
					</Typography>
				</Grid>
				<Divider orientation="vertical" className={classes.divider} flexItem />
				<Grid className="p-5">
					<ComputerIcon className={classes.icon} fontSize="large" />
					<Typography color="inherit" paragraph>
						Estudiar online no es más que adaptar la enseñanza y el aprendizaje a las necesidades y
						requisitos del mundo moderno.
					</Typography>
				</Grid>
				<Divider orientation="vertical" className={classes.divider} flexItem />
				<Grid className="p-5">
					<ExtensionIcon className={classes.icon} fontSize="large" />
					<Typography color="inherit" paragraph>
						Los estudios online permiten la formación continua, es rápida y dinámica, y aprovecha cada medio
						disponible para exprimir lo mejor de cada uno.
					</Typography>
				</Grid>
				<Divider orientation="vertical" flexItem />
				<Grid className=" p-5">
					<SchoolIcon className={classes.icon} fontSize="large" />
					<Typography color="inherit" paragraph>
						Formación constante con la ayuda de mentores capacitados en la materia a tu disposición
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
}
