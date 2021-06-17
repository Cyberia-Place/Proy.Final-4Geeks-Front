import React from "react";
import {
	Grid,
	Container,
	Avatar,
	Typography,
	Card,
	CardContent,
	makeStyles,
	LinearProgress,
	Paper,
	Box
} from "@material-ui/core";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useState } from "react";
import Categories_Area from "../component/Categories_Area";
import Rating from "@material-ui/lab/Rating";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

const useStyles = makeStyles(theme => ({
	userImg: {
		width: theme.spacing(18),
		height: theme.spacing(18),
		border: "4px solid white"
	},

	paper: {
		background: "#252525",
		color: "white"
	},
	container: {
		marginTop: theme.spacing(5)
	},
	userContent: {
		height: "100%"
	},

	content: {
		padding: theme.spacing(5)
	},

	header: {
		padding: theme.spacing(3)
	}
}));

export const Profile = () => {
	const classes = useStyles();

	let { id } = useParams();

	const { store, actions } = useContext(Context);

	useEffect(() => {
		let data = {};
		if (id) data.id = id;

		actions.getProfile(data);
		actions.getStats(data);
	}, []);

	return (
		<Container maxWidth="md" className={classes.container}>
			{store.userData && store.userStats ? (
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Card>
							<Grid container>
								<Grid item xs={12} md={4}>
									<Paper className={`${classes.paper} ${classes.userContent}`} elevation={10}>
										<CardContent className={classes.content}>
											<Grid
												container
												direction="column"
												justify="center"
												alignItems="center"
												spacing={1}>
												<Grid item xs={12}>
													<Avatar
														alt="User img"
														src={
															store.userData.imagen
																? store.userData.imagen
																: "https://fondosmil.com/fondo/17012.jpg"
														}
														className={classes.userImg}
													/>
												</Grid>
												<Grid item xs={12}>
													<Typography align={"center"} variant="h5" gutterBottom>
														{store.userData.nombre}
													</Typography>
												</Grid>
												<Grid item xs={12}>
													<Typography variant="body1" gutterBottom>
														{store.userData.email}
													</Typography>
												</Grid>
											</Grid>
										</CardContent>
									</Paper>
								</Grid>
								<Grid item xs={12} md={8}>
									<CardContent className={classes.content}>
										<Typography variant="body1" gutterBottom>
											<strong>Edad </strong> {store.userData.edad ? store.userData.edad : "-"}
										</Typography>
										<Typography variant="body1" gutterBottom>
											<strong>Pais </strong> {store.userData.pais ? store.userData.pais : "-"}
										</Typography>
										<Typography variant="body1" gutterBottom>
											<strong>Idioma </strong>{" "}
											{store.userData.idioma ? store.userData.idioma : "-"}
										</Typography>
										<Typography variant="body1" gutterBottom>
											<strong>Ocupacion </strong>{" "}
											{store.userData.ocupacion ? store.userData.ocupacion : "-"}
										</Typography>
										{store.userData.descripcion ? (
											<>
												<br />
												<Typography variant="h6" gutterBottom>
													Acerca de mi
												</Typography>
												<Typography variant="body1" gutterBottom>
													{store.userData.descripcion}
												</Typography>
											</>
										) : (
											""
										)}
									</CardContent>
								</Grid>
							</Grid>
						</Card>
					</Grid>
					<Grid item xs={12} md={6}>
						<Card>
							<Paper className={`${classes.paper} ${classes.header}`} elevation={10}>
								<Typography variant="h5" style={{ margin: "0" }} align={"center"} gutterBottom>
									Aprendiendo
								</Typography>
							</Paper>
							<CardContent className={classes.content}>
								<Typography variant="body1" gutterBottom>
									<strong>Clases asistidas </strong> {store.userStats.aprendiendo.cantidad_en_clase}
								</Typography>
								<Typography variant="body1" gutterBottom>
									<strong>Horas </strong> {store.userStats.aprendiendo.horas_en_clase}
								</Typography>
								<br />
								<Categories_Area
									titulo="Areas de interes"
									categorias={store.userStats.aprendiendo.interests}
								/>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} md={6}>
						<Card>
							<Paper className={`${classes.paper} ${classes.header}`} elevation={10}>
								<Typography variant="h5" style={{ margin: "0" }} align={"center"} gutterBottom>
									Enseñando
								</Typography>
							</Paper>
							<CardContent className={classes.content}>
								<Typography variant="body1" gutterBottom>
									<strong>Clases impartidas </strong> {store.userStats.enseniando.cantidad_clase}
								</Typography>
								<Typography variant="body1" gutterBottom>
									<strong>Horas </strong> {store.userStats.enseniando.horas_clase}
								</Typography>
								<Typography variant="body1" gutterBottom>
									<Box display="flex" alignItems="center">
										<strong>Calificacion </strong>{" "}
										<Rating
											name="valoracion"
											value={store.userStats.enseniando.valoracion}
											onChange={event => {
												let val = event.target.value;
												swal({
													title: "Confirmar",
													text: "Deseas valorar al profesor?",
													icon: "warning",
													buttons: true,
													dangerMode: true
												}).then(will => {
													if (will) {
														actions.valorate({
															valoracion: val,
															id: store.userData.id
														});
													}
												});
											}}
										/>
									</Box>
								</Typography>

								<br />
								<Categories_Area
									titulo="Areas de conocimiento"
									categorias={store.userStats.enseniando.knowledge}
								/>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			) : (
				<>
					<LinearProgress />
				</>
			)}
		</Container>
	);
};
