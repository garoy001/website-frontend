import Icons from '../../assets/data/plainIcons.json';
import '../../styling/about.scss';
const icoList = Object.values(Icons);

export const About = () => {
	return (
		<div className="container-fluid">
			<div className="row tech-stacks">
				<div className="col-2"></div>
				<div className="col-8">
					{icoList.map((e, index) => {
						return (
							<div
								className="techDisplay"
								style={{ display: 'flex' }}
								key={index + 1}
							>
								<i className={`${e} tech-icon`} />
							</div>
						);
					})}
				</div>
			</div>
			<div className="row about-me"></div>
		</div>
	);
};
