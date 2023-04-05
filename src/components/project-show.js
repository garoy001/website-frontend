import { projectObj } from '../assets/data/projectList.js';

export const ProjectShow = () => {
	return (
		<div className="project-wrapper">
			{projectObj.map((e) => {
				return (
					<div className="project-box">
						<div
							className="project-img-box"
							style={{ backgroundImage: `url(${e.img})` }}
						></div>
						<div className="project-info-box">
							<h1 className="project-info-name">{e.name}</h1>
							<ul className="project-info-dependencies-list">
								{e.dependencies.map((i) => {
									return (
										<li className="project-info-dependencies-list-item txt">
											{i}
										</li>
									);
								})}
							</ul>
							<h2 className="project-info-description-short txt">
								{e.description.short}
							</h2>
							<p className="project-info-description-long txt">
								{e.description.long}
							</p>
							<ul className="link-list">
								<li className="link-list-item">
									<a href={e.links.github.frontEnd}>Github</a>
								</li>
								<li className="link-list-item">
									<a href={e.links.deployed}>Live Site</a>
								</li>
							</ul>
						</div>
					</div>
				);
			})}
		</div>
	);
};
