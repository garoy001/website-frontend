import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-personal navbar-selector  d-flex">
			<a href="#home">
				<div className="ml-4 brand-box">
					<h1 className="navbar-brand-text font-montserrat">
						dev.gabrielroyce.com
					</h1>
				</div>
			</a>
			<div className="container-fluid nav-link-box">
				<button
					className="navbar-toggler nav-collapse-button"
					type="button"
					data-toggle="collapse"
					data-target="#navbarPF"
					aria-controls="navbarPF"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse justify-content-md-end"
					id="navbarPF"
				>
					<ul className="navbar-nav">
						<li className="nav-item">
							<a
								className="nav-link active nav-link-text"
								aria-current="page"
								href="#about"
							>
								About
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active nav-link-text"
								aria-current="page"
								href="#expertise"
							>
								Projects
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active nav-link-text"
								aria-current="page"
								href="#team"
							>
								Skills
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active nav-link-text"
								aria-current="page"
								href="#partners"
							>
								Resume
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active nav-link-text"
								aria-current="page"
								href="#insights"
							>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
export default NavBar;
