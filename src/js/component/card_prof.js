import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import EventIcon from "@material-ui/icons/Event";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { flexbox } from "@material-ui/system";
import { positions } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		margin: "auto",
		maxWidth: 500
	},
	image: {
		height: 128
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "100%",
		maxHeight: "100%"
	}
}));

export default function CardProf() {
	const classes = useStyles();
	const [value, setValue] = React.useState(2);

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<Grid container p={0} spacing={2}>
					<Grid item p={0}>
						<ButtonBase className={classes.image}>
							<img className={classes.img} alt="complex" src="https://picsum.photos/200" />
						</ButtonBase>
					</Grid>
					<Grid item xs={12} sm container>
						<Grid item xs container direction="column" spacing={1}>
							<Grid item xs spacing={2}>
								<Box>
									<p className="titulocard">Tecnologo </p>
								</Box>
								<Typography variant="body2">nombreprof</Typography>
								<Box component="fieldset" borderColor="transparent">
									<Rating
										name="simple-controlled"
										value={value}
										onChange={(event, newValue) => {
											setValue(newValue);
										}}
									/>
								</Box>
								<Box display="flex" flexDirection="row" alignItems="center">
									<Typography variant="body2">
										<EventIcon fontSize="small" /> 22/07 <AccessTimeIcon fontSize="small" /> 22:00
									</Typography>
									<Box ml="auto">
										<Button variant="outlined" size="small" color="primary">
											Reservar
										</Button>
									</Box>
								</Box>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
}
