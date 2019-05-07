import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const Theme = createMuiTheme({
	palette: {
		primary: blue,
		secondary: pink
	},
	typography: {
		useNextVariants: true
	}
});

export default Theme;
