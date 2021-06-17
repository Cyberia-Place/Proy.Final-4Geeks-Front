import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
	hundirCalendario: {
		zIndex: "-1",
		margin: "auto"
	}
});

export const Calendario = props => {
	const classes = useStyles();
	const [fechas_resaltadas, setFechasResaltadas] = useState(props.fechas);
	registerLocale("es", es);

	const resaltarFecha = fecha => {
		setFechasResaltadas(fechas_resaltadas => [...fechas_resaltadas, fecha]);
	};

	return (
		<div className={classes.hundirCalendario}>
			<DatePicker
				highlightDates={fechas_resaltadas}
				locale="es"
				dateFormat="dd-MM-yyyy"
				placeholderText="This highlights a week ago and a week from today"
				inline
				disabled
			/>
		</div>
	);
};

Calendario.propTypes = {
	fechas: PropTypes.array
};
