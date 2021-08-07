import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },

}));

export default function Navbar() {
    const classes = useStyles();
    const theme = useTheme();

    // const toggleDrawer = () => {
    //     if (open === true) {
    //         setOpen(false);
    //     }
    //     else {
    //         setOpen(true)
    //     }
    // }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar)}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        to="/" 
                        component={Link}
                        edge="start"
                        className={clsx(classes.menuButton)}
                    >
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        
                    </Typography>
                </Toolbar>
            </AppBar>
            
            <main
                className={clsx(classes.content)}
            >
                <div className={classes.drawerHeader} />

                <Typography paragraph>
                </Typography>

            </main>
        </div>
    );
}
