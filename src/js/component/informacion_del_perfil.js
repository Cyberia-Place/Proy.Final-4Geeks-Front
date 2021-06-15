import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { useState } from "react";
import { Context } from "../store/appContext";

const useStyles = makeStyles(theme => ({
	textarea: {
		resize: "both"
	}
}));

export default function Informacion_form(props) {
	const classes = useStyles();
	const { store, actions } = useContext(Context);

	const [nombre, setNombre] = useState(props.nombre ? props.nombre : "");
	const [descripcion, setDescripcion] = useState(props.descripcion ? props.descripcion : "");
	const [email, setEmail] = useState(props.email ? props.email : "");
	const [ocupacion, setOcupacion] = useState(props.ocupacion ? props.ocupacion : "");
	const [pais, setPais] = useState(props.pais ? props.pais : "");
	const [language, setLanguage] = useState(props.language ? props.language : "");
	const [edad, setEdad] = useState(props.edad ? props.edad : "");

	const updateProfile = () => {
		actions.updateProfile({ nombre, descripcion, edad, ocupacion, idioma: language, pais });
	};

	return (
		<React.Fragment>
			<Typography variant="h6" aling="left" className="mt-3" gutterBottom>
				Información del perfil
			</Typography>
			<Grid container spacing={3} md={6} justify="center" className="m-auto">
				<Grid item xs={12} sm={6} md={6}>
					<TextField
						required
						id="firstName"
						name="firstName"
						label="Nombre completo:"
						fullWidth
						autoComplete="given-name"
						value={nombre}
						onChange={event => {
							setNombre(event.target.value);
						}}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={6}>
					<TextField
						required
						id="age"
						name="age"
						label="Edad:"
						fullWidth
						autoComplete="age"
						value={edad}
						onChange={event => {
							setEdad(event.target.value);
						}}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={6}>
					<TextField
						id="email"
						name="email"
						label="Correo electronico:"
						fullWidth
						autoComplete="email"
						value={email}
						InputProps={{
							readOnly: true
						}}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={6}>
					<TextField
						required
						id="language"
						name="language"
						label="idioma:"
						fullWidth
						autoComplete="language"
						value={language}
						onChange={event => {
							setLanguage(event.target.value);
						}}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={6}>
					<TextField
						required
						id="city"
						name="city"
						label="País"
						fullWidth
						autoComplete="address"
						value={pais}
						onChange={event => {
							setPais(event.target.value);
						}}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={6}>
					<TextField
						required
						id="ocupacion"
						name="ocupacion"
						label="Ocupacion:"
						fullWidth
						value={ocupacion}
						onChange={event => {
							setOcupacion(event.target.value);
						}}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={6}>
					<TextField
						id="outlined-textarea"
						label="Descripcion:"
						placeholder="Descripcion:"
						multiline
						fullWidth
						rows={6}
						variant="outlined"
						inputProps={{ className: classes.textarea }}
						value={descripcion}
						onChange={event => {
							setDescripcion(event.target.value);
						}}
					/>
				</Grid>
			</Grid>

			<Button className="m-5" onClick={updateProfile}>
				Guardar
			</Button>
			<Divider variant="middle" />
		</React.Fragment>
	);
}

Informacion_form.propTypes = {
	descripcion: PropTypes.string,
	nombre: PropTypes.string,
	email: PropTypes.string,
	ocupacion: PropTypes.string,
	pais: PropTypes.string,
	language: PropTypes.string,
	edad: PropTypes.string
};
