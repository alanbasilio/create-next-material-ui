import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale';

const theme = createMuiTheme(
	{
		palette: {
			primary: {
				light: '#42aeef',
				main: '#134875',
				dark: '#0e395e'
			},
			secondary: { light: '#f6f7f9', main: '#ffffff', dark: '#666' },
			background: {
				paper: '#FFFFFF',
				default: '#f6f7f9'
			},
			error: red
		},
		status: {
			danger: 'orange'
		},
		typography: {
			fontSize: 14,
			h1: {
				fontSize: 42,
				fontWeight: 700
			},
			h2: {
				fontSize: 36,
				fontWeight: 700
			},
			h3: {
				fontSize: 30,
				fontWeight: 700
			},
			h4: {
				fontSize: 24,
				fontWeight: 700
			},
			h5: {
				fontSize: 18,
				fontWeight: 300
			},
			h6: {
				fontSize: 12,
				fontWeight: 300
			}
		},
		overrides: {
			MuiLinearProgress: {
				root: {
					borderRadius: 4,
					height: 7
				},
				bar1Determinate: {
					borderRadius: 4
				},
				colorPrimary: {
					backgroundColor: '#ccc'
				}
			},
			MuiCircularProgress: {
				circle: {
					strokeLinecap: 'round',
					strokeWidth: 2.8
				}
			}
		}
	},
	ptBR
);

export default theme;
