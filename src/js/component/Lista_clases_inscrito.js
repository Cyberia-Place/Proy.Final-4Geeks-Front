import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper
	}
}));

function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}

export default function Clases_List(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<h4>Clases programadas:</h4>
			<List component="nav" aria-label="main mailbox folders">
				{props.clases.length > 0
					? props.clases.map(clase => {
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
		</div>
	);
}

Clases_List.propTypes = {
	clases: PropTypes.array
};
