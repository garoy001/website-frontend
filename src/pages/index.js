import React from 'react';
import '../styling/homePage.scss';
import "../styling/projects.scss"
import Projects from '../components/projects';
function Index(props) {
	return (
		<div>
<div className="homeBody fade-in">
			<div className="homeText">
				<h1>Hi! I'm Gabe</h1>
				<h2>
					I'm a full stack web developer with a focus on always improving.
				</h2>
			</div>
			<div className="arrow bounce">
				<p className="fa fa-arrow-down fa-2x" href="#"></p>
			</div>
			<div className='dividingLine'></div>
			
		</div>
		<div className="projects">
		<h1 className='projectsTitle'>Featured Projects</h1>
				<Projects />
			</div>
		</div>
		
	);
}

export default Index;
