import React, { useState, useContext } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import Modal from "@material-ui/core/Modal";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import Link from "@material-ui/core/Link";
import { Context } from "../store/appContext";
import validator from "validator";
import { BotonGoogle } from "./boton_google";

const useStyles = makeStyles(theme => ({
	navButton: {
		marginRight: theme.spacing(2),
		backgroundColor: "#252525",
		color: "white"
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
	modal: {
		backgroundColor: "#FFFFFF",
		width: 400,
		position: "absolute",
		border: " 1px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(4, 6, 4, 6),
		left: "50%",
		top: "50%",
		transform: "translate(-50%, -50%)"
	},
	styleTextField: {
		marginTop: "15px"
	},
	exitSignInButton: {
		position: "absolute",
		right: "0px"
	},
	signInButton: {
		background: "linear-gradient(45deg, #9ED54C 30%, #64ffda 90%)",
		marginTop: "20px",
		marginBottom: "20px"
	},
	textPrueba: {
		display: "flex"
	}
}));

export const Navbar = () => {
	const classes = useStyles();

	const [inputEmail, setInputEmail] = useState("");
	const [inputPassword, setInputPassword] = useState("");
	const [inputFullName, setInputFullName] = useState("");

	const [openLogIn, setOpenLogIn] = useState(false); // Estado para el props open del modal Log In
	const [openSignIn, setOpenSignIn] = useState(false); // Estado para el props open del modal Sign In
	const [openChangePassword, setOpenChangePassword] = useState(false); // Estado para el props open del modal ChangePassword
	const { store, actions } = useContext(Context);

	const signup = () => {
		let valid = true;

		if (validator.isEmpty(inputFullName)) {
			valid = false;
			actions.showMessage("Error!", "El campo nombre no puede estar vacio", "error");
		}

		if (!validator.isEmail(inputEmail)) {
			valid = false;
			actions.showMessage("Error!", "Email invalido", "error");
		}

		if (validator.isEmpty(inputPassword)) {
			valid = false;
			actions.showMessage("Error!", "El campo contraseña no puede estar vacio", "error");
		}

		if (valid) {
			actions.signUp(inputEmail, inputPassword, inputFullName);
		}
	};

	const login = () => {
		let valid = true;

		if (!validator.isEmail(inputEmail)) {
			valid = false;
			actions.showMessage("Error!", "Email invalido", "error");
		}

		if (validator.isEmpty(inputPassword)) {
			valid = false;
			actions.showMessage("Error!", "El campo contraseña no puede estar vacio", "error");
		}

		if (valid) {
			actions.logIn(inputEmail, inputPassword);
		}
	};

	const [values, setValues] = useState({
		amount: "",
		weight: "",
		weightRange: "",
		showPassword: false
	});

	const handleChange = prop => event => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = event => {
		event.preventDefault();
	};

	const abrirCerrarLogIn = () => {
		setOpenLogIn(!openLogIn);
	};

	const abrirCerrarSignIn = () => {
		setOpenSignIn(!openSignIn);
	};

	const abrirCerrarChangePassword = () => {
		setOpenChangePassword(!openChangePassword);
	};

	const bodyLogIn = (
		<div className={classes.modal}>
			<form>
				<Button className={classes.exitSignInButton} onClick={() => abrirCerrarLogIn()}>
					<h5>X</h5>
				</Button>
				<Typography variant="h4" align="center" gutterBottom>
					Inicio de sesión
				</Typography>
				<Typography variant="body1" gutterBottom>
					Ingrese su correo electrónico y contraseña para iniciar sesión.
				</Typography>

				{/* // Input de email // */}
				<InputLabel className={classes.styleTextField}>Correo electrónico</InputLabel>
				<Input
					onChange={event => setInputEmail(event.target.value)}
					variant="outlined"
					size="small"
					fullWidth
				/>

				{/* // Input de contraseña // */}
				<InputLabel className={classes.styleTextField}>Password</InputLabel>
				<Input
					fullWidth
					id="outlined-adornment-password"
					type={values.showPassword ? "text" : "password"}
					onChange={event => {
						handleChange("password");
						setInputPassword(event.target.value);
					}}
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
								edge="end">
								{values.showPassword ? <Visibility /> : <VisibilityOff />}
							</IconButton>
						</InputAdornment>
					}
					labelWidth={70}
				/>
				<Button variant="contained" className={classes.signInButton} onClick={login} fullWidth>
					Iniciar sesión
				</Button>
				<Typography variant="body1" gutterBottom>
					<Link
						href="#"
						onClick={() => {
							abrirCerrarChangePassword();
							abrirCerrarLogIn();
						}}>
						¿Olvidaste tu contraseña?
					</Link>
				</Typography>
			</form>
		</div>
	);

	const bodySignIn = (
		<div className={classes.modal}>
			<form>
				<Button className={classes.exitSignInButton} onClick={() => abrirCerrarSignIn()}>
					<h5>X</h5>
				</Button>
				<Typography variant="h4" align="center" gutterBottom>
					Registrate
				</Typography>
				<Typography variant="body1" gutterBottom>
					Rellena los campos a continuación con tus datos.
				</Typography>
				<InputLabel className={classes.styleTextField}>Nombre completo</InputLabel>
				<Input
					onChange={event => setInputFullName(event.target.value)}
					variant="outlined"
					size="small"
					fullWidth
				/>
				<InputLabel className={classes.styleTextField}>Correo electrónico</InputLabel>
				<Input
					onChange={event => setInputEmail(event.target.value)}
					variant="outlined"
					size="small"
					fullWidth
				/>

				<InputLabel className={classes.styleTextField}>Password</InputLabel>
				<Input
					fullWidth
					id="outlined-adornment-password"
					type={values.showPassword ? "text" : "password"}
					onChange={event => {
						handleChange("password");
						setInputPassword(event.target.value);
					}}
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
								edge="end">
								{values.showPassword ? <Visibility /> : <VisibilityOff />}
							</IconButton>
						</InputAdornment>
					}
					labelWidth={70}
				/>
				<Button ariant="contained" className={classes.signInButton} onClick={signup} fullWidth>
					Únete
				</Button>
				<BotonGoogle />
				<Typography variant="body1" align="center" gutterBottom>
					Volver a Iniciar Sesión.
				</Typography>
				<br />
				<Typography variant="caption" display="block" gutterBottom>
					Acepto los Términos de Uso y la Política de Privacidad de [nombre de la App].
				</Typography>
			</form>
		</div>
	);

	const bodyChangePassword = (
		<div className={classes.modal}>
			<form>
				<Button className={classes.exitSignInButton} onClick={() => abrirCerrarChangePassword()}>
					<h5>X</h5>
				</Button>
				<Typography variant="h4" align="center" gutterBottom>
					¿Olvidaste tu contraseña?
				</Typography>
				<Typography variant="body1" gutterBottom>
					Introduce tu dirección de correo electrónico. Te enviaremos un enlace para restablecer su
					contraseña.
				</Typography>
				<br />
				{/* // Input de email // */}
				<InputLabel className={classes.styleTextField}>Correo electrónico</InputLabel>
				<Input variant="outlined" size="small" fullWidth />

				<Button variant="contained" className={classes.signInButton}>
					Enviar enlace
				</Button>
			</form>
		</div>
	);
	return (
		<div>
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
					<Button variant="contained" className={classes.navButton} onClick={() => abrirCerrarLogIn()}>
						Iniciar Sesion
					</Button>
					<Button variant="contained" className={classes.navButton} onClick={() => abrirCerrarSignIn()}>
						Registrarse
					</Button>
				</Toolbar>
			</AppBar>

			{/* // Este es el modal del Log In // */}
			<Modal
				open={openLogIn}
				onClose={abrirCerrarLogIn}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description">
				{bodyLogIn}
			</Modal>

			{/* // Este es el modal del Sign In // */}
			<Modal
				open={openSignIn}
				onClose={abrirCerrarSignIn}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description">
				{bodySignIn}
			</Modal>

			<Modal
				open={openChangePassword}
				onClose={abrirCerrarChangePassword}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description">
				{bodyChangePassword}
			</Modal>
		</div>
	);
};
