import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TimerIcon from '@material-ui/icons/Timer';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    text: {
        paddingTop: '1 rem'
    }
}));

export default function TimedCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root} key={0} >
            <CardHeader
                title='Timed Game'
            />
            <CardContent>

                <Button variant="contained" color="primary" >
                    <TimerIcon /> Start Game
                </Button>
                <Typography variant="body2" color="textSecondary" component="p">
                    See how many questions you can answer correct against the clock!
                </Typography>
            </CardContent>
        </ Card>
    );
}
