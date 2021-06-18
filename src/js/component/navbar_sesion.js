import React, { useState, useContext } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Logo from "./logo.png";
import { GoogleLogout } from "react-google-login";

import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import { useEffect } from "react";

const useStyles = makeStyles(theme => ({
	navButton: {
		marginRight: theme.spacing(2),
		height: "30px"
	},
	navBar: {
		background: "linear-gradient(45deg, #59a80f 30%, #aef060 90%)"
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
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex"
		}
	},
	sectionMobile: {
		display: "flex",
		[theme.breakpoints.up("md")]: {
			display: "none"
		}
	},
	tokens: {
		marginBottom: "-5px"
	}
}));

export const NavbarSesion = () => {
	const { store, actions } = useContext(Context);
	const classes = useStyles();

	useEffect(() => {
		actions.getCredits();
	}, []);

	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	// Handlers para la vista de escritorio
	const handleProfileMenuOpen = event => {
		setAnchorEl(event.currentTarget);
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	// Handlers para la vista de celular
	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};
	const handleMobileMenuOpen = event => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	// Menu de la vista de escritorio
	const menuId = "primary-search-account-menu";
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMenuOpen}
			onClose={handleMenuClose}>
			<MenuItem onClick={handleMenuClose}>
				<Link to="/profile">Perfil</Link>
			</MenuItem>
			<MenuItem onClick={handleMenuClose}>
				<Link to="/ajustes/perfil">Ajustes</Link>
			</MenuItem>
			<MenuItem onClick={handleMenuClose}>
				<Link to="/inicio/compra">Creditos</Link>
			</MenuItem>
			<MenuItem>
				{store.googleLoged ? (
					<GoogleLogout
						clientId="893541568420-jkdmsfhuacmuj67r6k4t6sefj8qukmt8.apps.googleusercontent.com"
						buttonText="Logout"
						onLogoutSuccess={() => {
							handleMenuClose();
							actions.logout();
						}}
					/>
				) : (
					<div
						onClick={() => {
							handleMenuClose();
							actions.logout();
						}}>
						Cerrar sesión
					</div>
				)}
			</MenuItem>
		</Menu>
	);

	// Menu de la vista de celular
	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}>
			<MenuItem>
				<Link to="/inicio/alumno">
					<Button variant="contained" className={classes.navButton} color="secondary">
						Alumno
					</Button>
				</Link>
			</MenuItem>
			<MenuItem>
				<Link to="/inicio/profesor">
					<Button variant="contained" className={classes.navButton} color="secondary">
						Alumno
					</Button>
				</Link>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit">
					<AccountCircle />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);

	return (
		<div>
			<AppBar position="static" className={classes.navBar}>
				<Toolbar>
					<img src={Logo} width="170" height="37" />
					<div className={classes.searchDiv} />
					<Box display="flex" alignItems="center">
						<Link to="/inicio/alumno">
							<Button variant="contained" className={classes.navButton} color="secondary">
								Alumno
							</Button>
						</Link>
						<Link to="/inicio/profesor">
							<Button variant="contained" className={classes.navButton} color="secondary">
								Profesor
							</Button>
						</Link>
						<MonetizationOnIcon fontSize="default" />
						<Typography classes={classes.tokens} variant="h6">
							{store.creditos ? store.creditos : "0"}
						</Typography>
						<Typography variant="h6" gutterBottom>
							{/* {store.usuario.nombre} */}
						</Typography>
						<IconButton
							edge="end"
							aria-label="account of current user"
							aria-controls={menuId}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit">
							<AccountCircle />
						</IconButton>
					</Box>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit">
							<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</div>
	);
};
