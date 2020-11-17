import { createMuiTheme } from '@material-ui/core/styles';
import 'fontsource-roboto';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#e0f2f1',
        },
        secondary: {
            main: '#009688',
        },

    },
    typography: {
        font: 'roboto',
    },
});

export default theme;
