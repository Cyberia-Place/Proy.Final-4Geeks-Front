import React from "react";
import {
	Grid,
	Container,
	Avatar,
	Typography,
	Card,
	CardContent,
	CardActions,
	CardHeader,
	makeStyles,
	Box,
	Divider,
	LinearProgress
} from "@material-ui/core";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useState } from "react";
import Categories_Area from "../component/Categories_Area";

const useStyles = makeStyles(theme => ({
	userImg: {
		width: theme.spacing(18),
		height: theme.spacing(18)
	}
}));

export const Profile = () => {
	const classes = useStyles();

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getProfile();
	}, []);

	return (
		<Container maxWidth="md">
			{store.userData ? (
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Card>
							<Grid container spacing={3}>
								<Grid item xs={12} sm={4}>
									<Grid container direction="column" justify="center" alignItems="center" spacing={3}>
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
											<Typography textAlign="center" variant="h4" gutterBottom>
												{store.userData.nombre}
											</Typography>
										</Grid>
										<Grid item xs={12}>
											<Typography variant="h6" gutterBottom>
												{store.userData.email}
											</Typography>
										</Grid>
									</Grid>
								</Grid>
								<Grid item xs={12} sm={8}>
									<Typography variant="body1" gutterBottom>
										<strong>Edad </strong> {store.userData.edad ? store.userData.edad : "-"}
									</Typography>
									<Typography variant="body1" gutterBottom>
										<strong>Ubicacion </strong>{" "}
										{store.userData.ubicacion ? store.userData.ubicacion : "-"}
									</Typography>
									<Typography variant="body1" gutterBottom>
										<strong>Idioma </strong> {store.userData.idioma ? store.userData.idioma : "-"}
									</Typography>
									<Typography variant="body1" gutterBottom>
										<strong>Ocupacion </strong>{" "}
										{store.userData.ocupacion ? store.userData.ocupacion : "-"}
									</Typography>
									{store.userData.descripcion ? (
										<>
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
								</Grid>
							</Grid>
						</Card>
					</Grid>
					<Grid item xs={12} md={6}>
						<Card>
							<CardHeader title="Aprendiendo" />
							<Divider light />
							<CardContent>
								<Typography variant="body1" gutterBottom>
									<strong>Clases asistidas </strong> 120
								</Typography>
								<Typography variant="body1" gutterBottom>
									<strong>Horas </strong> 200 hs
								</Typography>
								<Typography variant="body1" gutterBottom>
									<strong>Opiniones </strong> 22
								</Typography>
								<br />
								<Categories_Area
									titulo="Areas de interes"
									categorias={["cat", "cat", "cat", "cat", "cat", "cat", "cat", "cat", "cat", "cat"]}
								/>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} md={6}>
						<Card>
							<CardHeader title="Enseñando" />
							<Divider light />
							<CardContent>
								<Typography variant="body1" gutterBottom>
									<strong>Clases impartidas </strong> 160
								</Typography>
								<Typography variant="body1" gutterBottom>
									<strong>Horas </strong> 300 hs
								</Typography>
								<Typography variant="body1" gutterBottom>
									<strong>Calificacion</strong> {/* <Rating name="read-only" value={3} readOnly /> */}
								</Typography>

								<br />
								<Categories_Area
									titulo="Areas de conocimiento"
									categorias={["cat", "cat", "cat", "cat"]}
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
