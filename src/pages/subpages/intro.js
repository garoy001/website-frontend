import React from 'react';

import IconScroller from '../../components/iconscroller.js';

function Intro(props) {
	return (
		<div
			className="container-fluid  h-100 fade-in-text"
			style={{
				opacity: props.isTextHidden,
				transition: `opacity ${props.transitionText}s ease-in`,
			}}
		>
			<div className="row intro-row">
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
				<div
					className="col-lg-4 col-md-5 col-0 h-100 desktop-scroller"
					id="intro-scroll-icons"
				>
					<IconScroller type="desktop" />
				</div>

				<div className="col-lg-2 col-1"></div>
			</div>
			<div className="row mobile-scroller">
				<IconScroller type="mobile" />
			</div>
			<div className="row bottom-row-spacer"></div>
		</div>
	);
}

export default Intro;
