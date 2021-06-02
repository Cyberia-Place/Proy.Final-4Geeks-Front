import React from "react";
import { Toolbar, AppBar, Typography, Button, InputBase } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { flexbox } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
	navButton: {
		marginRight: theme.spacing(2)
	},
	navBar: {
		background: "linear-gradient(45deg, #4caf50 30%, #64ffda 90%)"
	},
	// Estilos del search bar que pegue
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch"
		},
		inputRoot: {
			color: "inherit"
		}
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(3),
			width: "auto"
		}
	},
	searchDiv: {
		flexGrow: 1
	}
}));

export const Navbar = () => {
	const classes = useStyles();

	return (
		<AppBar position="static" className={classes.navBar}>
			<Toolbar>
				<Typography variant="h6" noWrap>
					[ICONO]
				</Typography>

				<div className={classes.search}>
					<div className={classes.searchIcon}>
						<SearchIcon />
					</div>
					<InputBase
						placeholder="Search…"
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput
						}}
						inputProps={{ "aria-label": "search" }}
					/>
				</div>
				<div className={classes.searchDiv} />
				<Button variant="outlined" className={classes.navButton}>
					Iniciar Sesion
				</Button>
				<Button variant="outlined" className={classes.navButton}>
					Registrarse
				</Button>
			</Toolbar>
		</AppBar>
	);
};
