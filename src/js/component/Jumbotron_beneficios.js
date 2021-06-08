import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ComputerIcon from "@material-ui/icons/Computer";
import ExtensionIcon from "@material-ui/icons/Extension";
import SchoolIcon from "@material-ui/icons/School";
import { spacing } from "@material-ui/system";
import Box from "@material-ui/core/Box";

const theme = createMuiTheme({
	spacing: [0, 4, 8, 16, 32, 64],
	height: 500
});

const useStyles = makeStyles(theme => ({
	mainFeaturedPost: {
		position: "relative",
		backgroundColor: theme.palette.grey[300],
		color: theme.palette.common.black,
		padding: "50px",
		height: "500px",
		width: "100%",
		marginTop: "50px"
	}
}));

export default function Jumbotron_beneficios() {
	const classes = useStyles();

	return (
		<Paper className={classes.mainFeaturedPost}>
			<Grid container maxwidth="lg">
				<Grid item md={12}>
					<Typography component="h1" variant="h2" color="inherit" justify="center" gutterBottom>
						Beneficios
					</Typography>
				</Grid>

				<Grid item md={3} className="pr-3 pt-5 h-3">
					<CalendarTodayIcon color="disabled" fontSize="large" />
					<Typography color="inherit" paragraph>
						Something short and leading about the collection below—its contents, the creator, etc. Make it
						short and sweet, but not too short so folks don&apos;t simply skip over it entirely.
					</Typography>
				</Grid>
				<Grid item md={3} className="pr-3 pl-3 pt-5">
					<ComputerIcon color="disabled" fontSize="large" />
					<Typography color="inherit" paragraph>
						Something short and leading about the collection below—its contents, the creator, etc. Make it
						short and sweet, but not too short so folks don&apos;t simply skip over it entirely.
					</Typography>
				</Grid>
				<Grid item md={3} className="pr-3 pl-3 pt-5">
					<ExtensionIcon color="disabled" fontSize="large" />
					<Typography color="inherit" paragraph>
						Something short and leading about the collection below—its contents, the creator, etc. Make it
						short and sweet, but not too short so folks don&apos;t simply skip over it entirely.
					</Typography>
				</Grid>
				<Grid item md={3} className=" pl-3 pt-5">
					<SchoolIcon color="disabled" fontSize="large" />
					<Typography color="inherit" paragraph>
						Something short and leading about the collection below—its contents, the creator, etc. Make it
						short and sweet, but not too short so folks don&apos;t simply skip over it entirely.
					</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
}
