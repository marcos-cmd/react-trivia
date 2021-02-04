import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';


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

export default function LeaderboardCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root} key={0} >
            <CardHeader
                title='Leaderboards'
            />
            <CardContent>
                <Button variant="contained" color="primary" >
                    <EmojiEventsIcon />
                    View
                </Button>
                <Typography variant="body2" color="textSecondary" component="p">
                    Brag to your friends how knowledgable you are!
                </Typography>
            </CardContent>
        </ Card>
    );
}
