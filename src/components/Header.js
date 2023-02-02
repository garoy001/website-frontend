import { Link } from 'react-router-dom';
import '../styling/header.scss';
import {BsLinkedin} from 'react-icons/bs';
function Header(props) {
	return (
		<nav className="header">
			<Link to="/">
				<h1>dev.gabrielroyce.com</h1>
			</Link>
			<div className="right-side-header">
				<Link>
					<h2>About</h2>
				</Link>
				<Link>
					<h2>Projects</h2>
				</Link>
			</div>
		</nav>
	);
}

export default Header;
