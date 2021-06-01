import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Container from "@material-ui/core/Container";
import CardProf from "./card_prof";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2)
	}
}));

export const Inicio = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const classes = useStyles();
	return (
		<div className="container">
			<div className="row">
				<ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
					<Button>LUN</Button>
					<Button>MAR</Button>
					<Button>MIE</Button>
					<Button>JUE</Button>
					<Button>VIE</Button>
					<Button>SAB</Button>
				</ButtonGroup>
			</div>
			<div className="row m-3">
				<div className="col-sm">
					<CardProf />
				</div>
				<div className="col-sm">
					<CardProf />
				</div>
			</div>
		</div>
	);
};
