import React, { Component, useContext } from "react";
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
import Box from "@material-ui/core/Box";
import { Context } from "../store/appContext";

const useStyles = makeStyles(theme => ({
	mainFeaturedPost: {
		backgroundColor: "#59a80f",
		color: theme.palette.common.white,
		padding: "2px",
		border: "none"
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
	const { store, actions } = useContext(Context);

	return (
		<Grid container md={12}>
			<div className=" mt-2 d-flex  ">
				<Grid item md={12} className={classes.mainFeaturedPost}>
					<div className={classes.mainFeaturedPostContent}>
						<Box borderRadius="borderRadius" border={2} borderColor="#666666" p={2}>
							<Grid container justify="center">
								<Typography component="h4" variant="h4" color="main" gutterBottom>
									Próxima clase:
								</Typography>
							</Grid>
							<Divider className="mb-3" />
							{props.clase ? (
								<>
									<Grid container spacing={2} justify="center">
										<Typography
											id="materia"
											component="h3"
											variant="h3"
											color="inherit"
											gutterBottom>
											{props.clase.nombre}
										</Typography>
									</Grid>
									<Grid container spacing={2} justify="center">
										<Typography color="inherit" className="pr-2" paragraph>
											Prof.:
										</Typography>
										<Typography id="fecha" color="inherit" paragraph>
											{props.clase.profesor.nombre}
										</Typography>
									</Grid>
									<Grid container spacing={2} justify="center">
										<Typography color="inherit" className="pr-2" paragraph>
											Fecha:
										</Typography>
										<Typography id="fecha" color="inherit" paragraph>
											{props.clase.fecha}
										</Typography>
									</Grid>
									<Grid container spacing={2} justify="center">
										<Typography color="inherit" className="pr-2" paragraph>
											Hora:
										</Typography>
										<Typography id="hora" color="inherit" paragraph>
											{props.clase.hora_inicio} - {props.clase.hora_fin}
										</Typography>
									</Grid>
									<Grid container spacing={2} justify="center">
										<Grid item>
											<Button
												variant="contained"
												id="BotonCancelar"
												className={classes.Button}
												size="large"
												onClick={() => {
													swal({
														title: "Confirmar",
														text: "Deseas eliminar la inscripcion a la mentoria",
														icon: "warning",
														buttons: true,
														dangerMode: true
													}).then(willEnroll => {
														if (willEnroll) {
															actions.removerInscripcion({ clase_id: props.clase.id });
														}
													});
												}}>
												Cancelar
											</Button>
											{props.clase.profesor.url ? (
												<Button
													variant="contained"
													id="BotonUnirse"
													color="primary"
													size="large"
													href={props.clase.profesor.url}
													className={classes.Button}>
													Unirse
												</Button>
											) : (
												""
											)}
										</Grid>
									</Grid>
								</>
							) : (
								<Grid container spacing={2} justify="center">
									<Typography id="materia" component="h3" variant="h3" color="inherit" gutterBottom>
										No hay
									</Typography>
								</Grid>
							)}
						</Box>
					</div>
				</Grid>
			</div>
		</Grid>
	);
}

Proxima_clase.propTypes = {
	clase: PropTypes.object
};
