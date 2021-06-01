import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { DefaultSeo } from 'next-seo';
import { store, persistor } from '~/store';
import theme from '~/config/theme';

const MyApp = (props): JSX.Element => {
	const { Component, pageProps } = props;

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Head>
					<title>NEXT MATERIAL STARTER</title>
					<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
				</Head>
				<ThemeProvider theme={theme}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<DefaultSeo
						openGraph={{
							type: 'website',
							locale: 'en_IE',
							url: 'https://www.url.ie/',
							site_name: 'SiteName'
						}}
						twitter={{
							handle: '@handle',
							site: '@site',
							cardType: 'summary_large_image'
						}}
					/>
					<Component {...pageProps} />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
};

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired
};

export default MyApp;
