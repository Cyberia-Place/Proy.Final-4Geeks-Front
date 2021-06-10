import React from "react";
import PropTypes from "prop-types";
import { Chip, Typography, Grid } from "@material-ui/core";

export default function Categories_Area(props) {
	return (
		<div>
			<Typography variant="body1" gutterBottom>
				<strong>{props.titulo}</strong>
			</Typography>
			<Grid container direction="row" justify="center" alignItems="center" spacing={2}>
				{props.categorias.map((element, index) => {
					return (
						<Grid key={index} item xs={2}>
							<Chip label={element} color="primary" />
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
}

Categories_Area.propTypes = {
	titulo: PropTypes.string,
	categorias: PropTypes.array
};
