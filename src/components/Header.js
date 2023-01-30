import { Link } from 'react-router-dom';
import '../styling/header.scss';
function Header(props) {
	return (
		<nav className="header">
			<Link to="/">
				<h1>dev.gabrielroyce.com</h1>
			</Link>
		</nav>
	);
}

export default Header;
