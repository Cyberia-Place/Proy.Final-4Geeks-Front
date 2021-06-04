import React from "react";
import CardProf from "../component/card_prof";
import SelectorHora from "../component/selector_hora";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { NavbarSesion } from "../component/navbar_sesion";

export const Inicio = () => (
	<div>
		<NavbarSesion />
		<Container maxWidth="lg">
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Box m={4} ml={0}>
						<Typography variant="h1">Clases disponibles</Typography>
					</Box>
				</Grid>
				<Grid item lg={12} direction="row" alignItems="center">
					<Box display="flex" flexDirection="row" alignItems="center">
						<ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
							<Button>LUN</Button>
							<Button>MAR</Button>
							<Button>MIE</Button>
							<Button>JUE</Button>
							<Button>VIE</Button>
							<Button>SAB</Button>
						</ButtonGroup>
						<Box ml="auto" display="flex" flexDirection="row" alignItems="center">
							<SelectorHora />
							<Button variant="contained" color="primary" size="small">
								Filtrar
							</Button>
						</Box>
					</Box>
				</Grid>
				<Grid item lg={6}>
					<CardProf />
				</Grid>
				<Grid item lg={6}>
					<CardProf />
				</Grid>
			</Grid>
		</Container>
	</div>
);
