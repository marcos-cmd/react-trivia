import { createMuiTheme } from '@material-ui/core/styles';
import 'fontsource-roboto';


const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#ffff5a',
            main: '#ffff00',
            dark: '#c7cc00',
            contrastText: '#000000',
        },
        

    },
    typography: {
        fontFamily: [
            'Cardo',
            'Oswald',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        body1: {
            fontFamily: "'Cardo', serif",
        },
        h1: {
            fontFamily: "'Oswald', sans-serif",
            textTransform: 'uppercase',
        }
    },
});

export default theme;
