import React, { useState, forwardRef } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BookmarksIcon from "@material-ui/icons/Bookmarks";

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
	calendarInput: {
		width: "100%"
	}
}));

export const BotonMentoria = () => {
	const classes = useStyles();
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
				<Typography variant="body1" gutterBottom>
					Ingrese los datos para el nuevo evento.
				</Typography>
				<br />

				<div className="form-row">
					<div className="form-group col-6">
						<InputLabel className={classes.styleTextField}>Hora inicial</InputLabel>
						{InitialHour}
					</div>
					<div className="form-group col-6">
						<InputLabel className={classes.styleTextField}>Hora final</InputLabel>
						{FinalHour}
					</div>
				</div>
				<div className="form-row">
					<div className="form-group col-6">
						<InputLabel className={classes.styleTextField}>Fecha</InputLabel>
						{calendarioInput}
					</div>
					<div className="form-group col-6">
						<Button
							variant="contained"
							color="secondary"
							// className={classes.button}
							startIcon={<BookmarksIcon />}>
							Agendar
						</Button>
					</div>
				</div>
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
