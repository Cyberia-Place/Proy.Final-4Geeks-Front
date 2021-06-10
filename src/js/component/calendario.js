import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import lightFormat from "date-fns/lightFormat";

import "react-datepicker/dist/react-datepicker.css";

export const Calendario = () => {
	const [fecha, setFecha] = useState(new Date());
	const [fechas_resaltadas, setFechasResaltadas] = useState([]);
	registerLocale("es", es);
	const resaltarFecha = fecha => {
		setFechasResaltadas(fechas_resaltadas => [...fechas_resaltadas, fecha]);
	};
	const mostrarFecha = fecha => {
		return lightFormat(fecha, "dd-MM-yyyy");
	};

	return (
		<div>
			<DatePicker
				selected={fecha}
				onChange={fecha => setFecha(fecha)}
				highlightDates={fechas_resaltadas}
				locale="es"
				dateFormat="dd-MM-yyyy"
				placeholderText="This highlights a week ago and a week from today"
				inline
			/>
			<p>{mostrarFecha(fecha)}</p>
			<button type="button" onClick={() => resaltarFecha(fecha)}>
				Resaltar Fecha
			</button>
		</div>
	);
};