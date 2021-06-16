import React, { useState, forwardRef, useContext } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { green } from "@material-ui/core/colors";
import { Context } from "../store/appContext";
import { useEffect } from "react";

const useStyles = makeStyles(theme => ({
	modal: {
		backgroundColor: "#FFFFFF",
		width: 550,
		position: "absolute",
		border: " 1px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(4, 6, 4, 6),
		left: "50%",
		top: "50%",
		transform: "translate(-50%, -50%)"
	},
	exitMentorshipModal: {
		position: "absolute",
		right: "0px"
	},
	styleTextField: {
		marginTop: "15px"
	},
	checkboxPlacement: {
		marginBottom: "-10px"
	},
	buttonMentorship: {
		background: "linear-gradient(45deg, #59a80f 30%, #aef060 90%)",
		fontSize: "20px",
		height: "70px",
		width: "250px"
	}
}));

//// ****** APARIENCIA CHECKBOX MODAL ****** ////
const GreenCheckbox = withStyles({
	root: {
		color: green[400],
		"&$checked": {
			color: green[600]
		}
	},
	checked: {}
})(props => <Checkbox color="default" {...props} />);

export const BotonMentoria = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.darCategorias();
	}, []);

	const [nombre, setNombre] = useState("");
	const [categorias, setCategorias] = useState("");

	const classes = useStyles();

	//// ****** EMPIEZA CODIGO CALENDARIO, FECHA Y HORA ****** ////
	const [NewMentorship, setNewMentorship] = useState(false); // Estado para el props open del modal Sign In

	const handlerMentorshipModal = () => {
		setNewMentorship(!NewMentorship);
	};

	const CustomInput = forwardRef(({ value, onClick }, ref) => (
		<input className="form-control" onClick={onClick} ref={ref} value={value} />
	));

	const CalendarCustomInput = forwardRef(({ value, onClick }, ref) => (
		<input className="form-control" onClick={onClick} ref={ref} value={value} />
	));

	const [startingHour, setStartingHour] = useState(new Date());
	const InitialHour = (
		<DatePicker
			selected={startingHour}
			onChange={date => setStartingHour(date)}
			showTimeSelect
			showTimeSelectOnly
			timeIntervals={15}
			timeCaption="Time"
			dateFormat="h:mm aa"
			customInput={<CustomInput />}
		/>
	);

	const [endingHour, setEndingHour] = useState(new Date());
	const FinalHour = (
		<DatePicker
			selected={endingHour}
			onChange={date => setEndingHour(date)}
			showTimeSelect
			showTimeSelectOnly
			timeIntervals={15}
			timeCaption="Time"
			dateFormat="h:mm aa"
			customInput={<CustomInput />}
		/>
	);

	const [startDate, setStartDate] = useState(new Date());
	const calendarioInput = (
		<DatePicker selected={startDate} onChange={date => setStartDate(date)} customInput={<CalendarCustomInput />} />
	);
	//// ****** TERMINA CODIGO CALENDARIO, FECHA Y HORA ****** ////

	//// ****** CODIGO CHECKBOX ****** ////
	const [state, setState] = useState({
		checkedG: true
	});

	const handleChange = event => {
		setState({ [event.target.name]: event.target.checked });
	};

	//// ****** FUNCION AGENDAR MENTORÍA ****** ////
	const scheduleMentorship = () => {
		handlerMentorshipModal();
		let data = {
			nombre: nombre,
			fecha: startDate,
			hora_inicio: startingHour,
			hora_fin: endingHour,
			categorias: []
		};
		data.categorias.push(categorias);
		actions.agendarMentoria(data);
		setNombre("");
		setCategorias("");
	};

	const mentorshipForm = (
		<div className={classes.modal}>
			<form>
				<Button className={classes.exitMentorshipModal} onClick={handlerMentorshipModal}>
					<h5>X</h5>
				</Button>
				<Typography variant="h4" align="center" gutterBottom>
					Agendar mentoría
				</Typography>
				<br />
				<div className="px-2">
					<Typography variant="body1" gutterBottom>
						Ingrese los datos para el nuevo evento.
					</Typography>
					<br />

					<div className="input-group mb-3" style={{ width: "431px" }}>
						<select
							className="custom-select"
							id="inputGroupSelect02"
							onChange={event => setCategorias(event.target.value)}>
							<option selected>Seleccione una categoría</option>
							{store.categories ? (
								store.categories.map(category => {
									return (
										<option key={category.id} value={category.nombre}>
											{category.nombre}
										</option>
									);
								})
							) : (
								<option>No hay categorias</option>
							)}
						</select>
					</div>
					<div className="form-row">
						<div className="form-group col">
							<input
								className="form-control"
								type="text"
								id="nombre"
								value={nombre}
								onChange={event => setNombre(event.target.value)}
							/>
						</div>
					</div>
					<div className="form-row">
						<div className="form-group col-6">
							<InputLabel>Hora inicial</InputLabel>
							{InitialHour}
						</div>
						<div className="form-group col-6">
							<InputLabel>Hora final</InputLabel>
							{FinalHour}
						</div>
					</div>
					<div className="form-row">
						<div className="form-group col-6">
							<InputLabel>Fecha</InputLabel>
							{calendarioInput}
						</div>
						{/* <div className="form-group d-flex flex-row align-items-end col-6">
							<div className={classes.checkboxPlacement}>
								<FormControlLabel
									control={
										<GreenCheckbox
											checked={state.checkedG}
											onChange={handleChange}
											name="checkedG"
										/>
									}
									label="Mentoría recurrente"
								/>
							</div>
						</div> */}
					</div>
					<div className="mt-2">
						<Button
							variant="contained"
							color="secondary"
							onClick={scheduleMentorship}
							startIcon={<BookmarksIcon />}
							fullWidth>
							Agendar
						</Button>
					</div>
				</div>
			</form>
		</div>
	);

	return (
		<div>
			<Button className={classes.buttonMentorship} variant="contained" onClick={handlerMentorshipModal}>
				AGENDAR MENTORÍA
			</Button>
			<Modal
				open={NewMentorship}
				onClose={handlerMentorshipModal}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description">
				{mentorshipForm}
			</Modal>
		</div>
	);
};
