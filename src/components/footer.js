export const Footer = () => {
	return (
		<div class="container-fluid">
			<footer class="py-3 " style={{ backgroundColor: 'black' }}>
				<ul class="nav justify-content-center border-bottom pb-3 mb-3">
					<li className="nav-item">
						<a
							className="nav-link px-2 text-muted"
							aria-current="page"
							href="#about"
						>
							About
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link px-2 text-muted"
							aria-current="page"
							href="#expertise"
						>
							Projects
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link px-2 text-muted"
							aria-current="page"
							href="#team"
						>
							Skills
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link px-2 text-muted"
							aria-current="page"
							href="#partners"
						>
							Resume
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link px-2 text-muted"
							aria-current="page"
							href="#insights"
						>
							Contact
						</a>
					</li>
				</ul>
				<p class="text-center text-muted">&copy; 2023 dev.gabrielroyce.com</p>
			</footer>
		</div>
	);
};
