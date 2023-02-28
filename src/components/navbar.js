import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

const NavBar = () => {
	return (
		<nav
			className="navbar navbar-expand-lg navbar-light bg-light bg-personal"
			style={{ zIndex: 9999 }}
		>
			<a
				rel="noopener noreferrer"
				className="navbar-brand"
				href="https://dev.gabrielroyce.com"
				style={{ display: 'flex', alignItems: 'center' }}
			>
				<div
					className="back-arrow"
					style={{ fontSize: '2rem', display: 'flex', alignItems: 'center' }}
				>
					<BsFillArrowLeftSquareFill />
				</div>
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li
						className="nav-item dropdown active"
						style={{ marginLeft: '10vw' }}
					>
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Projects <span className="sr-only">(current)</span>
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<a className="dropdown-item" href="#">
								CETAMD
							</a>
							<a className="dropdown-item" href="#">
								Food-App
							</a>
							<div className="dropdown-divider"></div>
							<a
								className="dropdown-item"
								href="app.gabrielroyce.com"
								rel="noopener noreferrer"
							>
								All Projects
							</a>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default NavBar;
