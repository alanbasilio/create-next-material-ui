import { ThemeProvider, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { DefaultSeo } from 'next-seo';
import { store, persistor } from '~/store';

const MyApp = (props): JSX.Element => {
	const { Component, pageProps } = props;
	const theme = useTheme();

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
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

export default MyApp;
