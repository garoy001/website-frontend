import React from 'react';
import avatar from '../../assets/images/avatar.png';
import '../../styling/main.scss';
function Intro(props) {
	return (
		<div className="intro-div">
			<div>
				<div>
					<div className="text-white">
						<h1>Hi! I'm Gabe</h1>
						<h2>
							I'm a full stack web developer with a focus on always improving.
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Intro;
