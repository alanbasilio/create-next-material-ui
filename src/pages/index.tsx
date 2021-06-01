import { IconButton, Button, Typography, Toolbar, AppBar, Hidden, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Home = (): JSX.Element => {
	return (
		<>
			<main>
				<AppBar position="static">
					<Toolbar>
						<IconButton edge="start" color="inherit" aria-label="menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="h6">Next.js Material UI</Typography>
						<Button color="inherit">Login</Button>
					</Toolbar>
				</AppBar>
				<Grid container spacing={3}>
					<Hidden only="xs">
						<Grid item md={6} sm={6} xs={12}></Grid>
					</Hidden>
					<Grid item md={6} sm={6} xs={12}>
						<p>Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. </p>
						<Typography>
							Pinnace holystone mizzenmast quarter crows nest nipperkin grog yardarm hempen halter furl.
							Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.{' '}
						</Typography>
					</Grid>
				</Grid>
			</main>
		</>
	);
};

export default Home;
