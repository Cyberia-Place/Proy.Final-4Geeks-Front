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
	Divider
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	userImg: {
		width: theme.spacing(18),
		height: theme.spacing(18)
	},
	card: {
		padding: theme.spacing(3)
	}
}));

export const Profile = () => {
	const classes = useStyles();

	return (
		<Container maxWidth="md">
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Card className={classes.card}>
						<CardContent>
							<Grid container spacing={3}>
								<Grid item xs={12} md={3}>
									<Avatar
										alt="User img"
										src="https://fondosmil.com/fondo/17012.jpg"
										className={classes.userImg}
									/>
								</Grid>
								<Grid item xs={12} md={9}>
									<Typography variant="h4" gutterBottom>
										Nombre Apellido
									</Typography>
									<Typography variant="body1" gutterBottom>
										<strong>Email </strong> mail@mail.com
									</Typography>
									<Typography variant="body1" gutterBottom>
										<strong>Edad </strong> 20
									</Typography>
									<Typography variant="body1" gutterBottom>
										<strong>Ubicacion </strong> Uruguay
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="h6" gutterBottom>
										Acerca de mi
									</Typography>
									<Typography variant="body1" gutterBottom>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate corrupti
										culpa, praesentium, quaerat quia qui fugit suscipit illo ea possimus, debitis
										minima! Aperiam, voluptas et autem quis possimus sint odit.
									</Typography>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} md={6}>
					<Card className={classes.card}>
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
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} md={6}>
					<Card className={classes.card}>
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
								<strong>Calificacion</strong>
							</Typography>
							<Box component="fieldset" mb={3} borderColor="transparent">
								{/* <Rating name="read-only" value={3} readOnly /> */}
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};
