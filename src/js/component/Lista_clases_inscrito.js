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

export default function Clases_List() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	return (
		<div className={classes.root}>
			<div className={classes.prox}>
				<h4>Próximas clases:</h4>
				<Box>
					<ListItemText primary="Literatura" secondary="18/06/2021 9:00 a.m con Juanito López" />
				</Box>

				<Divider />
				<Box>
					<ListItemText primary="Química" secondary="19/06/2021 10:00 a.m con Elena Hope" />
				</Box>

				<Divider />
				<Box button>
					<ListItemText primary="Biología" secondary="20/06/2021 13:00 p.m con María Rodriguez" />
				</Box>

				<Divider />
				<Box button>
					<ListItemText primary="Lógica Computacional" secondary="10/03/2020 16:00 p.m con Ramiro Paez" />
				</Box>

				<Divider />
			</div>
			<div className={classes.prox}>
				<h4>Clases Atendidas:</h4>

				<Box>
					<ListItemText primary="Literatura" secondary="el 23/05/2021 con Fulanito Perez" />
				</Box>
				<Box component="fieldset" mb={12} borderColor="transparent" className="m-0">
					<Typography component="legend">Califica al profesor:</Typography>
					<Rating
						name="simple-controlled"
						value={value}
						onChange={(event, newValue) => {
							setValue(newValue);
						}}
					/>
				</Box>
				<Divider />
				<Box button>
					<ListItemText primary="TypeScript" secondary="el 17/04/2021 con José Rodriguez" />
				</Box>
				<Box component="fieldset" mb={12} borderColor="transparent" className="m-0">
					<Typography component="legend">Calificación:</Typography>
					<Rating name="read-only" value={4} readOnly />
				</Box>
				<Divider />
				<Box button>
					<ListItemText primary="Matemática I" secondary="el 10/03/2021 con Juanita Fernandez" />
				</Box>
				<Box component="fieldset" mb={12} borderColor="transparent" className="m-0">
					<Typography component="legend">Calificación:</Typography>
					<Rating name="read-only" value={5} readOnly />
				</Box>
				<Divider />
			</div>
		</div>
	);
}
