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
    const [difficulty, setDifficulty] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setDifficulty(event.target.value);
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
                    Select the Difficulty
      </Button>
            </span>

            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Difficulty</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={difficulty}
                    onChange={handleChange}
                >
                    <MenuItem value="easy">Easy</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="hard">Hard</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
