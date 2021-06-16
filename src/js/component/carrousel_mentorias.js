import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import VideocamIcon from "@material-ui/icons/Videocam";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { useEffect } from "react";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#0e71eb"
		}
	}
});

const useStyles = makeStyles(theme => ({
	mainFeaturedPost: {
		backgroundColor: theme.palette.grey[200],
		color: theme.palette.common.black
	},
	mentorshipCard: {
		width: "250px",
		// height: "200px",
		padding: "10px",
		margin: "20px 10px 0px 10px"
	},
	buttonZoom: {
		margin: "auto"
	}
}));

const Item = props => {
	const classes = useStyles();

	return (
		<Grid container direction="row" justify="center" alignItems="center">
			{props.item.map(elem => {
				return (
					<Paper key={elem.id} className={classes.mentorshipCard}>
						{elem.nombre}
						<br />
						<Divider orientation="horizontal" variant="fullWidth" />
						<br />
						Fecha: {elem.fecha}
						<br />
						Horario: {elem.hora_inicio} - {elem.hora_fin}
						<br />
						<br />
						<ThemeProvider theme={theme}>
							<Box display="flex" alignItems="center">
								<Button
									variant="contained"
									color="primary"
									startIcon={<VideocamIcon />}
									className={classes.buttonZoom}>
									ZOOM
								</Button>
							</Box>
						</ThemeProvider>
					</Paper>
				);
			})}
		</Grid>
	);
};

export const CarrouselMentorias = props => {
	const classes = useStyles();

	return (
		<Carousel className={classes.mainFeaturedPost} autoPlay={false} interval={4000} animation="slide">
			{props.clases.length > 0 ? (
				props.clases.map((item, i) => <Item key={i} item={item} />)
			) : (
				<Grid container direction="row" justify="center" alignItems="center">
					<Paper className={classes.mentorshipCard}>No hay clases</Paper>
				</Grid>
			)}
		</Carousel>
	);
};

Item.propTypes = {
	item: PropTypes.array
};

CarrouselMentorias.propTypes = {
	clases: PropTypes.array
};
