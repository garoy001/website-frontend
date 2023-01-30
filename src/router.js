import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import App from './App';
import Index from './pages/index';
import Dashboard from './pages/dashboard';
// import Signup from './pages/signup';
// import Login from './pages/login';
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="" element={<Index />} />
			<Route path="dashboard" element={<Dashboard />} />
		</Route>
	)
);

export default router;
