import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import EventIcon from "@material-ui/icons/Event";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import moment from "moment";
import { Context } from "../store/appContext";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		margin: "auto",
		maxWidth: 500
	},
	image: {
		height: "160px",
		width: "160px"
	}
}));

export default function CardProf(props) {
	const classes = useStyles();
	const [value, setValue] = React.useState(2);
	const preventDefault = event => event.preventDefault();
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Paper>
				<Box display="flex" flexDirection="row" p={1}>
					<Box className={classes.image} mr={2}>
						<img alt="..." width="160" height="160" src="https://picsum.photos/200" />
					</Box>
					<Box>
						<Box>
							<p className="titulocard">{props.clase.nombre}</p>
						</Box>
						<Typography variant="body1">
							<EventIcon /> {props.clase.fecha} <AccessTimeIcon />{" "}
							{moment(props.clase.hora_inicio, "LT").format("LT")} -{" "}
							{moment(props.clase.hora_fin, "LT").format("LT")}{" "}
							<Link to={`/profile/${props.clase.profesor.id}`}>{props.clase.profesor.nombre}</Link>
						</Typography>
						<Box component="fieldset" borderColor="transparent">
							<Rating name="read-only" value={props.clase.profesor.valoracion} readOnly size="large" />
						</Box>
						<Box display="flex" flexDirection="row" alignItems="center">
							<Button
								variant="outlined"
								color="primary"
								onClick={() => {
									swal({
										title: "Confirmar",
										text: "Deseas inscribirte a la mentoria",
										icon: "warning",
										buttons: true,
										dangerMode: true
									}).then(willEnroll => {
										if (willEnroll) {
											actions.inscribirse({ clase_id: props.clase.id });
										}
									});
								}}>
								Reservar
							</Button>
							<Box ml="auto" mr={3}>
								<Typography variant="h4">
									<MonetizationOnIcon fontSize="large" /> 12
								</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			</Paper>
		</div>
	);
}

CardProf.propTypes = {
	clase: PropTypes.object
};
