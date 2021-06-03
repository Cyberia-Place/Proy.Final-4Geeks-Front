import React from "react";
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
import Link from "@material-ui/core/Link";

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

export default function CardProf() {
	const classes = useStyles();
	const [value, setValue] = React.useState(2);
	const preventDefault = event => event.preventDefault();

	return (
		<div>
			<Paper>
				<Box display="flex" flexDirection="row" p={1}>
					<Box className={classes.image} mr={2}>
						<img alt="..." width="160" height="160" src="https://picsum.photos/200" />
					</Box>
					<Box>
						<Box>
							<p className="titulocard">Tecnologo asdasd as asdsads asdsadas asdasd asd asdda a</p>
						</Box>
						<Typography variant="body1">
							<EventIcon /> 22/07 <AccessTimeIcon /> 22:00 -{" "}
							<Link href="#" onClick={preventDefault}>
								nombreprof
							</Link>
						</Typography>
						<Box component="fieldset" borderColor="transparent">
							<Rating name="read-only" value={value} readOnly size="large" />
						</Box>
						<Box display="flex" flexDirection="row" alignItems="center">
							<Button variant="outlined" color="primary">
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
