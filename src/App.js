import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div className="App" style={{ backgroundColor: 'black' }}>
			<Outlet />
		</div>
	);
}

export default App;
