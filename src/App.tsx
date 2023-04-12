// Libraries
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import Login from '@pages/login/Login.view';
import Users from '@pages/users/Users.view';
import NotFound from '@pages/not-found/NotFound.view';

// Components
import { ProtectedRoute } from '@components/routes';
import { Layout } from '@components/layout/Layout.view';

// Styles
import './App.scss';

const App = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Login />} />
				<Route path='/login' element={<Login />} />
				<Route element={<ProtectedRoute />}>
					<Route element={<Layout />} path='/users'>
						<Route path='/users' element={<Users />} />
					</Route>
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
