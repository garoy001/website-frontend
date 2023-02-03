const checkLinks = (linksObj) => {
	if (linksObj.github.backEnd && linksObj.deployed) {
		return [
			{
				gitFront: {
					link: linksObj.github.frontEnd,
					text: 'Front End',
				},
			},
			{
				gitBack: {
					link: linksObj.github.backEnd,
					text: 'Back End',
				},
			},
			{ deployed: { link: linksObj.deployed, text: 'Deployed Site' } },
		];
	} else if (linksObj.github.backEnd) {
		return [
			{
				gitFront: {
					link: linksObj.github.frontEnd,
					text: 'Front End',
				},
			},
			{
				gitBack: {
					link: linksObj.github.backEnd,
					text: 'Back End',
				},
			},
		];
	} else {
		return [
			{
				gitFront: {
					link: linksObj.github.frontEnd,
					text: 'Front End',
				},
			},
		];
	}
	return;
};

function Project(props) {
	const links = checkLinks(props.info.links);
	return (
		<div className="projectBox">
			<div className="imageBox">
				<img className="projectImg" src={props.info.img} />
			</div>
			<div className="aboutProject">
				<h2 className="projectName">{props.info.name}</h2>
				<div className="techUsed">
					{
					props.info.tech.map((x) => {
						console.log(x + " <<<<<")
						return <img src={x} className="techIcon"/>;
					})}
				</div>
				<div className="projectLinks">
					{links.map((linkObj) => {
						{
							linkObj = Object.values(linkObj)[0];
						}
						return (
							<a href={linkObj.link} className="projectLink">
								{linkObj.text}
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Project;
