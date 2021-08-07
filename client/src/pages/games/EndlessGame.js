import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles((theme) => ({
    // root: {
    //     display: 'flex',
    //     flexWrap: 'wrap',
    //     '& > *': {
    //         margin: theme.spacing(1),
    //         width: theme.spacing(16),
    //         height: theme.spacing(16),
    //     },
    // },
    root: {
        flexGrow: 1,
    },
    // extendedIcon: {
    //     marginRight: theme.spacing(1),
    // },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    red: {
        color: red[700],
        padding: theme.spacing(2),
    },
}
));

export default function EndlessGame() {
    const classes = useStyles();
    // const [question, setQuestion] = useState([]);
    // const [loaded, setLoaded] = useState(false);
    // // const [qIndex, setQIndex] = useState(0);

    // const url = 'https://opentdb.com/api.php?amount=1&type=multiple';

    // const loadQuestions = async () => {
    //     let response = fetch(url).then(response => response.json()).then(data => {
    //         setQuestion(data.results)
    //         setLoaded(true)
    //     })
    // }
    // console.log(question);

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="m">
                <div className={classes.root}>
                    <Paper elevation={3}>
                        <div className={classes.root}>
                            <Grid container spacing={4}>
                                {/*Question Header  */}
                                <Grid item xs={4}>
                                    <Paper elevation={0} className={classes.paper}>Category={}</Paper>
                                </Grid>
                                <Grid item xs={4}>
                                    <Paper elevation={0} className={classes.paper}>Score={ }</Paper>
                                </Grid>
                                <Grid item xs={4}>
                                    <Paper elevation={0} className={classes.paper}>Difficulty={ }</Paper>
                                </Grid>
                                {/* Question content */}
                                <Grid item xs={12}>
                                    <Paper elevation={0} className={classes.paper}>Question: {}</Paper>
                                </Grid>
                                {/* Question Answers */}
                                <Grid item xs={3}>
                                    <Paper className={classes.paper}>Button 1</Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={classes.paper}>Button 2</Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={classes.paper}>Button 3</Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={classes.paper}>Button 4</Paper>
                                </Grid>
                                 {/* Question Navigation */}
                                <Grid item xs={4}>
                                    <Fab variant="extended" className={classes.red} >
                                        <HighlightOffIcon className={classes.extendedIcon} />
                                         End Game
                                    </Fab>
                                </Grid>
                                <Grid item xs={4}>

                                </Grid>
                                <Grid item xs={4}>
                                    <Fab variant="extended" color="secondary">
                                        <NavigateNextIcon className={classes.extendedIcon} />
                                         Next Question
                                    </Fab>
                                </Grid>
                            </Grid>
                        </div>
                    </Paper>
                </div>
            </Container>
        </React.Fragment>
    );
}