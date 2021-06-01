import { IconButton, Button, Typography, Toolbar, AppBar, Hidden, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import styles from '~/styles/home';

const Home = (): JSX.Element => {
	const classes = styles();

	return (
		<>
			<main>
				<AppBar position="static">
					<Toolbar>
						<IconButton edge="start" color="inherit" aria-label="menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="h6">Next.js Material UI</Typography>
						<Link href="/page-2" passHref>
							<Button color="inherit">Go To Page 2</Button>
						</Link>
					</Toolbar>
				</AppBar>
				<Grid container spacing={3}>
					<Hidden only="xs">
						<Grid item md={6} sm={6} xs={12} className={classes.column1}></Grid>
					</Hidden>
					<Grid item md={6} sm={6} xs={12} className={classes.column2}>
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
