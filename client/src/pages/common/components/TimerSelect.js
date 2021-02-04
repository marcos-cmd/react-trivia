import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 175,
    },
}));

export default function ControlledOpenSelect() {
    const classes = useStyles();
    const [timer, setTimer] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setTimer(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <span>
                <Button className={classes.button} onClick={handleOpen} color={'secondary'}>
                    Select time per question
      </Button>
            </span>

            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Timer</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={timer}
                    onChange={handleChange}
                >
                    <MenuItem value="30">30 Seconds</MenuItem>
                    <MenuItem value="20">20 Seconds</MenuItem>
                    <MenuItem value="10">10 Seconds</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
