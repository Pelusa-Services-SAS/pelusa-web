// Libraries
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Redux
import { setAuthenticated } from '@redux/authentication/authentication.slice';

// Index
import { type ILayout } from '.';

// Styles
import './Layout.style.scss';

export const Layout: React.FC<ILayout> = ({ children }) => {
	const dispatch = useDispatch();

	const handleLogout = (): void => {
		dispatch(
			setAuthenticated({ isAuthenticated: false, user: null, token: '' })
		);
	};

	return (
		<div>
			<h1>Aquí irá el layout</h1>
			{children ?? <Outlet />}
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
};
