import React from 'react';
import '../../styling/intro.scss';
import '../../styling/main.scss';
import Icons from '../../assets/data/icons.json';
const icoList = Object.values(Icons);
let prev = 0;
const getRanNum = () => {
	return Math.round(Math.random() * 2);
};
const returnPosition = () => {
	let num = getRanNum();
	while (prev == num) {
		num = getRanNum();
	}
	prev = num;
	switch (num) {
		case 0:
			return 'flex-start-class anim-1';
		case 1:
			return 'flex-end-class anim-2';
		case 2:
			return 'flex-center-class anim-3';
	}
};
function Intro(props) {
	return (
		<div
			className="container-fluid  h-100 fade-in-text"
			style={{
				opacity: props.isTextHidden,
				transition: `opacity ${props.transitionText}s ease-in`,
			}}
		>
			<div className="row align-items-center h-100">
				<div className="col-lg-2 col-1"></div>
				<div className="col-lg-4 col-md-5 col-10" id="intro-info-box">
					<h1 className="intro-text-1 intro-text" id="intro-info-title">
						Hello there,<br></br>I'm{' '}
						<span id="intro-info-title-name">Gabe Royce</span>
					</h1>
					<p className="intro-text intro-text-paragraph">
						I'm a Florida based Software Engineer who loves to provide{' '}
						<span className="intro-text-emphasis">effective</span> solutions
						with a focus on{' '}
						<span className="intro-text-emphasis">scalability</span> and{' '}
						<span className="intro-text-emphasis">dry</span> code
					</p>
				</div>
				<div className="col-lg-4 col-md-5 col-0 h-100" id="intro-scroll-icons">
					<div className=" row scrolling-container">
						<div className="col scrolling-track">
							{icoList.map((e, index) => {
								return (
									<div
										className={returnPosition()}
										style={{ display: 'flex' }}
										key={index}
									>
										<img src={e} className="scrolling-icon" />
									</div>
								);
							})}
							{/* {icoList.map((e, index) => {
								return (
									<div
										className={returnPosition()}
										style={{ display: 'flex' }}
										key={index + 1}
									>
										<img src={e} className="scrolling-icon" />
									</div>
								);
							})} */}
						</div>
					</div>
				</div>
				<div className="col-lg-2 col-1"></div>
			</div>
		</div>
	);
}

export default Intro;
