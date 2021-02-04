import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FlashOnIcon from '@material-ui/icons/FlashOn';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    text: {
        paddingTop: ''
    }
}));

export default function EndlessCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root} key={0} >
            <CardHeader title='Endless Game'>
            </CardHeader>

            <CardContent>
                <Button variant="contained" color="primary" >
                    <FlashOnIcon /> Start Game
                </Button>
                <Typography id="text" variant="body2" color="textSecondary" component="p">
                    The more questions you answer correctly, the more points you earn!
                </Typography>
            </CardContent>
        </ Card >
    );
}
