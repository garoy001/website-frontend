import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import App from './App';
import Index from './pages/subpages/intro';
import { Main } from './pages/main';
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="" element={<Main />} />
		</Route>
	)
);

export default router;
