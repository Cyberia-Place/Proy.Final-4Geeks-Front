import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";

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
	}
}));

export const BotonMentoria = () => {
	const classes = useStyles();
	const [NewMentorship, setNewMentorship] = useState(false); // Estado para el props open del modal Sign In

	const handlerMentorshipModal = () => {
		setNewMentorship(!NewMentorship);
	};

	const MentorshipForm = () => {
		<Button className={classes.exitMentorshipModal} onClick={() => handlerMentorshipModal()}>
			<h5>X</h5>
		</Button>;
	};
	return (
		<div className={classes.modal}>
			<Button variant="contained" color="primary" />
			<Modal
				open={NewMentorship}
				onClose={handlerMentorshipModal}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description">
				{MentorshipForm}
			</Modal>
		</div>
	);
};
