import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		backgroundColor: theme.palette.background.paper,
		marginTop: "40px"
	},
	prox: {
		backgroundColor: theme.palette.grey[100],
		height: "400px",
		margin: "10px",
		padding: "10px"
	}
}));

function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}

export default function Clases_List(props) {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	return (
		<div className={classes.root}>
			<div className={classes.prox}>
				<h4>Clases programadas:</h4>
				<List component="nav" aria-label="main mailbox folders">
					{props.clases.nextClases.length > 0
						? props.clases.nextClases.map(clase => {
								return (
									<div key={clase.id}>
										<ListItem button>
											<ListItemText
												primary={clase.nombre}
												secondary={`${clase.fecha} ${clase.hora_inicio}`}
											/>
										</ListItem>
										<Divider />
									</div>
								);
						  })
						: "no hay clases "}
				</List>

				<Divider />
			</div>
			<div className={classes.prox}>
				<h4>Clases Atendidas:</h4>

				{props.clases.previousClases.length > 0
					? props.clases.previousClases.map((clase, i) => {
							return (
								<div key={clase.id}>
									<Box>
										<ListItemText
											primary={clase.nombre}
											secondary={`${clase.fecha} ${clase.hora_inicio} con ${clase.profesor}`}
										/>
									</Box>
									<Box component="fieldset" mb={12} borderColor="transparent" className="m-0">
										<Typography component="legend">Califica al profesor:</Typography>
										{i == 0 ? (
											<Rating
												name="simple-controlled"
												value={clase.profesor.valoracion}
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
																id: clase.profesor.valoracion
															});
														}
													});
												}}
											/>
										) : (
											<Rating name="read-only" value={clase.profesor.valoracion} readOnly />
										)}
									</Box>
									<Divider />
								</div>
							);
					  })
					: "no hay clases "}
			</div>
		</div>
	);
}

Clases_List.propTypes = {
	clases: PropTypes.array
};
