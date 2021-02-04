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
    const [category, setCategory] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setCategory(event.target.value);
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
                    Select the Category
      </Button>
            </span>

            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={category}
                    onChange={handleChange}
                >

                    <MenuItem value="9">General Knowledge</MenuItem>
                    <MenuItem value="10">Books</MenuItem>
                    <MenuItem value="11">Film</MenuItem>
                    <MenuItem value="12">Music</MenuItem>
                    <MenuItem value="13">Musicals & Theatres</MenuItem>
                    <MenuItem value="14">Television</MenuItem>
                    <MenuItem value="15">Video Games</MenuItem>
                    <MenuItem value="16">Board Games</MenuItem>
                    <MenuItem value="17">Science & Nature</MenuItem>
                    <MenuItem value="18">Computers</MenuItem>
                    <MenuItem value="19">Mathematics</MenuItem>
                    <MenuItem value="20">Mythology</MenuItem>
                    <MenuItem value="21">Sports</MenuItem>
                    <MenuItem value="22">Geography</MenuItem>
                    <MenuItem value="23">History</MenuItem>
                    <MenuItem value="24">Politics</MenuItem>
                    <MenuItem value="25">Art</MenuItem>
                    <MenuItem value="26">Celebrities</MenuItem>
                    <MenuItem value="27">Animals</MenuItem>
                    <MenuItem value="28">Vehicles</MenuItem>
                    <MenuItem value="29">Comics</MenuItem>
                    <MenuItem value="30">Gadgets</MenuItem>
                    <MenuItem value="31">Japanese Anime & Manga</MenuItem>
                    <MenuItem value="32">Cartoon & Animations</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
