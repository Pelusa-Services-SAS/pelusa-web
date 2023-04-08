import { render, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', function () {
	test('should render the component', function () {
		const { getByText } = render(<App />);
		expect(getByText('Vite + React')).toBeDefined();
	});

	test('should increment the count when the button is clicked', () => {
		const { getByText, debug } = render(<App />);
		const button = getByText(/count is 0/i);
		fireEvent.click(button);
		expect(getByText(/count is 1/i)).toBeDefined();
	});
});
