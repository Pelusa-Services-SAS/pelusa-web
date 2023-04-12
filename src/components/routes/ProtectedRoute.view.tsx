// Libraries
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Redux
import type { RootState } from '@redux/configureStore';

// Index
import { type IProtectedRoute } from '.';

export const ProtectedRoute: React.FC<IProtectedRoute> = ({
	children,
	redirectTo = '/',
}) => {
	const { authentication } = useSelector((state: RootState) => state);
	const navigate = useNavigate();

	useEffect(() => {
		if (!authentication.isAuthenticated) {
			navigate(redirectTo);
		}
	}, [authentication]);

	return children ?? <Outlet />;
};
