import { projectObj } from '../assets/data/projectList';
import Project from '../components/project';
function Projects(props) {
	return (
		<div className="projectsContainer">
			{projectObj.map((projectInfo, index) => {
				const newInfo = Object.values(projectInfo)[0];
				return <Project info={newInfo} key={index} />;
			})}
		</div>
	);
}

export default Projects;
