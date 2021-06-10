import React, { Component } from "react";
import { AutoRotatingCarousel } from "material-auto-rotating-carousel";
import { Slide } from "material-auto-rotating-carousel";
const { red, blue, lightGreen } = require("@material-ui/core/colors");
import Carousel from "react-material-ui-carousel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
	mainFeaturedPost: {
		backgroundColor: theme.palette.grey[200],
		color: theme.palette.common.black,
		padding: "2px"
	},
	mainFeaturedPostContent: {},
	Button: {
		marginRight: theme.spacing(2),
		backgroundColor: "#252525",
		color: "white"
	}
}));

export default function Proxima_clase(props) {
	const classes = useStyles();
	return (
		<Grid md={12}>
			<div className=" mt-2 d-flex  ">
				<Grid item md={12} className={classes.mainFeaturedPost}>
					<div className={classes.mainFeaturedPostContent}>
						<Grid container justify="center">
							<Typography component="h4" variant="h4" color="main" gutterBottom>
								Próxima clase:
							</Typography>
						</Grid>
						<Divider className="mb-3" />
						<Grid container spacing={2} justify="center">
							<Typography id="materia" component="h3" variant="h3" color="inherit" gutterBottom>
								Literatura
							</Typography>
						</Grid>
						<Grid container spacing={2} justify="center">
							<Typography color="inherit" className="pr-2" paragraph>
								Prof.:
							</Typography>
							<Typography id="fecha" color="inherit" paragraph>
								Juanito López
							</Typography>
						</Grid>
						<Grid container spacing={2} justify="center">
							<Typography color="inherit" className="pr-2" paragraph>
								Fecha:
							</Typography>
							<Typography id="fecha" color="inherit" paragraph>
								26/06/2021
							</Typography>
						</Grid>
						<Grid container spacing={2} justify="center">
							<Typography color="inherit" className="pr-2" paragraph>
								Hora:
							</Typography>
							<Typography id="hora" color="inherit" paragraph>
								09:00hrs
							</Typography>
						</Grid>
						<Grid container spacing={2} justify="center">
							<Grid item>
								<Button variant="contained" id="BotonCancelar" className={classes.Button} size="large">
									Cancelar
								</Button>
								<Button variant="contained" id="BotonUnirse" color="primary" size="large">
									Unirse
								</Button>
							</Grid>
						</Grid>
					</div>
				</Grid>
			</div>
		</Grid>
	);
}
