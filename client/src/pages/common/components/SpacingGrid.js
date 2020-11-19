import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from './Card';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(6),
    },
}));

export default function SpacingGrid() {
    // const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    // const handleChange = (event) => {
    //     setSpacing(Number(event.target.value));
    // };

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid container justify="center" spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Card />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card />
                </Grid>
            </Grid>
        </Grid>
    );
}
