module.exports = {
	distDir: 'build',
	trailingSlash: true,
	publicRuntimeConfig: {
		// Will be available on both server and client
		app_version: process.env.PROJECT_VERSION
	},
	env: {
		BASE_API: process.env.BASE_API
	},
	future: {
		webpack5: true
	}
};
