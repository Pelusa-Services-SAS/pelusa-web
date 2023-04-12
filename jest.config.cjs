module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: {
		'^.+\\.svg$': 'jest-svg-transformer',
		'\\.(css|less|scss)$': 'identity-obj-proxy',
		'^@assets/(.*)$': '<rootDir>/src/assets/$1',
		'^@components/(.*)$': '<rootDir>/src/components/$1',
		'^@constants/(.*)$': '<rootDir>/src/constants/$1',
		'^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
		'^@models/(.*)$': '<rootDir>/src/models/$1',
		'^@pages/(.*)$': '<rootDir>/src/pages/$1',
		'^@redux/(.*)$': '<rootDir>/src/redux/$1',
		'^@sass/(.*)$': '<rootDir>/src/sass/$1',
		'^@services/(.*)$': '<rootDir>/src/services/$1',
		'^@utils/(.*)$': '<rootDir>/src/utils/$1',
	},
};
