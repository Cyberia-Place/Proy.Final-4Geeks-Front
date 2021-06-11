import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
	mainFeaturedPost: {
		backgroundColor: theme.palette.grey[200],
		color: theme.palette.common.black,
		padding: "2px"
	},
	mentorshipCard: {
		width: "250px",
		height: "200px",
		padding: "10px",
		margin: "20px 10px 0px 10px"
	}
}));

const Item = props => {
	const classes = useStyles();

	return (
		<Grid container direction="row" justify="center" alignItems="center">
			<Paper className={classes.mentorshipCard}>
				{props.item.mentoria1.categoria}
				<br />
				<Divider orientation="horizontal" variant="fullWidth" />
				<br />
				Materia: {props.item.mentoria1.materia}
				<br />
				Fecha: {props.item.mentoria1.fecha}
				<br />
				Horario: {props.item.mentoria1.horario}
			</Paper>
			<Paper className={classes.mentorshipCard}>
				{props.item.mentoria2.categoria}
				<br />
				<Divider orientation="horizontal" variant="fullWidth" />
				<br />
				Materia: {props.item.mentoria2.materia}
				<br />
				Fecha: {props.item.mentoria2.fecha}
				<br />
				Horario: {props.item.mentoria2.horario}
			</Paper>
			<Paper className={classes.mentorshipCard}>
				{props.item.mentoria3.categoria}
				<br />
				<Divider orientation="horizontal" variant="fullWidth" />
				<br />
				Materia: {props.item.mentoria3.materia}
				<br />
				Fecha: {props.item.mentoria3.fecha}
				<br />
				Horario: {props.item.mentoria3.horario}
			</Paper>
		</Grid>
	);
};

export const CarrouselMentorias = () => {
	const classes = useStyles();

	var items = [
		{
			mentoria1: {
				categoria: "Matemática",
				materia: "Las matemáticas son lo mejor!",
				fecha: "17/8/2021",
				horario: "15:00 - 16:30"
			},
			mentoria2: {
				categoria: "Matemática",
				materia: "Las matemáticas son lo mejor!",
				fecha: "17/8/2021",
				horario: "15:00 - 16:30"
			},
			mentoria3: {
				categoria: "Matemática",
				materia: "Las matemáticas son lo mejor!",
				fecha: "17/8/2021",
				horario: "15:00 - 16:30"
			}
		},
		{
			mentoria1: {
				categoria: "Filosofía",
				materia: "La filosofía es lo mejor!",
				fecha: "17/8/2021",
				horario: "15:00 - 16:30"
			},
			mentoria2: {
				categoria: "Filosofía",
				materia: "La filosofía es lo mejor!",
				fecha: "17/8/2021",
				horario: "15:00 - 16:30"
			},
			mentoria3: {
				categoria: "Filosofía",
				materia: "La filosofía es lo mejor!",
				fecha: "17/8/2021",
				horario: "15:00 - 16:30"
			}
		}
	];

	return (
		<Carousel className={classes.mainFeaturedPost} autoPlay={false} interval={4000} animation="slide">
			{items.map((item, i) => (
				<Item key={i} item={item} />
			))}
		</Carousel>
	);
};

Item.propTypes = {
	item: PropTypes.object,
	categoria: PropTypes.string,
	materia: PropTypes.string,
	fecha: PropTypes.string,
	hora: PropTypes.string
};