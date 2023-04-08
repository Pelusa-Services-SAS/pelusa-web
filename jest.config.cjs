module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: {
		'^.+\\.svg$': 'jest-svg-transformer',
		'\\.(css|less|scss)$': 'identity-obj-proxy',
	},
};
