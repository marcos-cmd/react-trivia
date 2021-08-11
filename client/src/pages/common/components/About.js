import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import name from '../assets/name.svg';

const useStyles = makeStyles(theme => ({
    title: {
        color: '#000000',
    },
    container: {
        backgroundColor: theme.palette.primary,
    },
}))

export default function About() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container className={classes.container} maxWidth="sm" >
                <Typography component="div"> Marcos J. Garcia </Typography>
                <object type="image/svg+xml" data={name}>svg-animation</object>
            </Container>
        </React.Fragment>
    );
}