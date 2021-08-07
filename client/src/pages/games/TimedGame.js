import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}
));



export default function TimedGame() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <div className={classes.root}>
                    <Paper elevation={3}>
                        <div className={classes.root}>
                            <Grid container spacing={3}>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper}>Category={ }</Paper>
                                </Grid>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper}>Difficulty={}</Paper>
                                </Grid>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper}>Score={}</Paper>
                                </Grid>
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>Question: {}</Paper>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <Paper className={classes.paper}>Button 1</Paper>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <Paper className={classes.paper}>Button 2</Paper>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <Paper className={classes.paper}>Button 3</Paper>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <Paper className={classes.paper}>Button 4</Paper>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Paper className={classes.paper}>Next Question</Paper>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Paper className={classes.paper}>End Game</Paper>
                                </Grid>
                            </Grid>
                        </div>
                    </Paper>
                </div>
            </Container>
        </React.Fragment>
    );
}