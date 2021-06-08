import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import EventIcon from "@material-ui/icons/Event";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

export default function CardCompra() {
    const classes = useStyles();
    const [value, setValue] = React.useState(2);
    const preventDefault = event => event.preventDefault();

    return (
        <div>
            <Container maxWidth="sm">
                
            </Container>
        </div>
    );
}