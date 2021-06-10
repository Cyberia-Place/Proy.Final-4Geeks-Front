import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

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

export default function Clases_List() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<h4>Clases programadas:</h4>
			<List component="nav" aria-label="main mailbox folders">
				<ListItem button>
					<ListItemText primary="Literatura" secondary="Jan 1, 10:00hrs" />
				</ListItem>
				<Divider />
				<ListItem button>
					<ListItemText primary="Ciencia" secondary="Jan 4, 14:00hrs" />
				</ListItem>
			</List>
			<Divider />
			<List component="nav" aria-label="secondary mailbox folders">
				<ListItem button>
					<ListItemText primary="Programación OOP" secondary="Jan 5, 12:00hrs" />
				</ListItem>
				<Divider />
				<ListItemLink href="#simple-list">
					<ListItemText primary="Dibujo" secondary="Jan 8, 20:00hrs" />
				</ListItemLink>
			</List>
			<Divider />
			<List component="nav" aria-label="secondary mailbox folders">
				<ListItem button>
					<ListItemText primary="Programación OOP" secondary="Jan 9, 08:30hrs" />
				</ListItem>
				<Divider />
				<ListItemLink href="#simple-list">
					<ListItemText primary="Dibujo" secondary="Jan 14, 10:00hrs" />
				</ListItemLink>
			</List>
			<Divider />
			<List component="nav" aria-label="secondary mailbox folders">
				<ListItem button>
					<ListItemText primary="Programación OOP" secondary="Jan 15, 15:00hrs" />
				</ListItem>
				<Divider />
				<ListItemLink href="#simple-list">
					<ListItemText primary="Dibujo" secondary="Jan 19, 18:00hrs" />
				</ListItemLink>
			</List>
			<Divider />
		</div>
	);
}
