import { projectObj } from '../projects/projectList';
import Project from '../components/project';
function Projects(props) {
	return (
		<div className="projectsContainer">
			{projectObj.map((projectInfo) => {
				const newInfo = Object.values(projectInfo)[0];
				return <Project info={newInfo} />;
			})}
		</div>
	);
}

export default Projects;
