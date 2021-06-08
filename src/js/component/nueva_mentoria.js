import React, { useState, forwardRef } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import DatePicker from "react-datepicker";

const useStyles = makeStyles(theme => ({
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
	exitMentorshipModal: {
		position: "absolute",
		right: "0px"
	},
	styleTextField: {
		marginTop: "15px"
	}
}));

export const BotonMentoria = () => {
	const classes = useStyles();
	const [NewMentorship, setNewMentorship] = useState(false); // Estado para el props open del modal Sign In

	const handlerMentorshipModal = () => {
		setNewMentorship(!NewMentorship);
	};

	const [startDate, setStartDate] = useState(new Date());
	const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
		<TextField id="standard-basic" label="Standard" />
	));
	const calendarioInput = (
		<DatePicker selected={startDate} onChange={date => setStartDate(date)} customInput={<ExampleCustomInput />} />
	);

	const mentorshipForm = (
		<div className={classes.modal}>
			<form>
				<Button className={classes.exitMentorshipModal} onClick={handlerMentorshipModal}>
					<h5>X</h5>
				</Button>
				<Typography variant="h4" align="center" gutterBottom>
					Inicio de sesión
				</Typography>
				<Typography variant="body1" gutterBottom>
					Ingrese su correo electrónico y contraseña para iniciar sesión.
				</Typography>

				<InputLabel className={classes.styleTextField}>Seleccionar fecha</InputLabel>
				{calendarioInput}
			</form>
		</div>
	);

	return (
		<div>
			<Button variant="contained" color="primary" onClick={handlerMentorshipModal}>
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
