import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Input from "@material-ui/core/Input";
import { Context } from "../store/appContext";
import validator from "validator";
import { BotonGoogle } from "./boton_google";

const useStyles = makeStyles(theme => ({
	mainFeaturedPost: {
		position: "relative",
		backgroundColor: theme.palette.grey[800],
		color: theme.palette.common.white,
		marginBottom: theme.spacing(4),
		backgroundImage: "url(https://source.unsplash.com/random)",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		height: "600px",
		width: "100%",
		justifyContent: "center",
		border: "none",
		boxShadow: "none"
	},
	overlay: {
		position: "absolute",
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: "rgba(0,0,0,.3)"
	},
	mainFeaturedPostContent: {
		position: "relative",
		padding: theme.spacing(3),
		marginTop: "150px"
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
		background: "linear-gradient(45deg, #59a80f 30%, #aef060 90%)",
		marginTop: "20px",
		marginBottom: "20px"
	},
	button: {
		background: "linear-gradient(45deg, #59a80f 30%, #aef060 90%)",
		width: "15vw",
		height: "5vh"
	}
}));

export default function MainFeaturedPost(props) {
	const classes = useStyles();

	const [inputEmail, setInputEmail] = useState("");
	const [inputPassword, setInputPassword] = useState("");
	const [inputFullName, setInputFullName] = useState("");

	const [openSignIn, setOpenSignIn] = useState(false); // Estado para el props open del modal Sign In
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

	const [values, setValues] = useState({
		amount: "",
		password: "",
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

	const abrirCerrarSignIn = () => {
		setOpenSignIn(!openSignIn);
	};

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
					labelwidth={70}
				/>
				<Button ariant="contained" className={classes.signInButton} onClick={signup} fullWidth>
					Únete
				</Button>
				<BotonGoogle />
				<br />
				{/* <Typography variant="body1" align="center" gutterBottom>
					Volver a Iniciar Sesión.
				</Typography>
				<br /> */}
				<Typography variant="caption" display="block" gutterBottom>
					Acepto los Términos de Uso y la Política de Privacidad de [nombre de la App].
				</Typography>
			</form>
		</div>
	);

	return (
		<Paper className={classes.mainFeaturedPost}>
			<div className={classes.overlay} />
			<Grid container maxwidth="lg" justify="center">
				<Grid item md={6}>
					<div className={classes.mainFeaturedPostContent}>
						<Typography justify="center" variant="h2" color="inherit" gutterBottom>
							Tu curso hacia el éxito
						</Typography>
						<Typography variant="h6" color="inherit" paragraph>
							Coordina mentorías de la materia de tu interés y alcanza la excelencia con el soporte de
							profesores en línea, o aprende enseñando como tutor.
						</Typography>

						<Grid container spacing={2} justify="center" size="large">
							<Grid item>
								<Button
									variant="contained"
									color="primary"
									className={classes.button}
									onClick={() => abrirCerrarSignIn()}>
									Únete
								</Button>
							</Grid>
						</Grid>
					</div>
				</Grid>
			</Grid>

			{/* // Este es el modal del Sign In // */}
			<Modal
				open={openSignIn}
				onClose={abrirCerrarSignIn}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description">
				{bodySignIn}
			</Modal>
		</Paper>
	);
}

MainFeaturedPost.propTypes = {
	image: PropTypes.object
};
