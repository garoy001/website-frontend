// Import Swiper styles

import '../App.css';
import React, { useEffect } from 'react';
import { OpenTag, CloseTag } from '../components/tags';
import NavBar from '../components/navbar';
import { Footer } from '../components/footer';
import $ from 'jquery';
const TagCloud = require('TagCloud');

const Cloud = () => {
	const myTags = [
		'JavaScript',
		'CSS',
		'HTML',
		'C#',
		'Bash',
		'React',
		'Python',
		'Trello',
		'Bootstrap',
		'Sass',
		'Figma',
		'Express',
		'Mongoose',
		'Git',
		'Django',
		'Node.js',

		'MySQL',
		'jQuery',
	];
	var tagCloud = new TagCloud('.cloud-content', myTags, {
		// radius in px
		radius: 500,

		// animation speed
		// slow, normal, fast
		maxSpeed: 'slow',
		initSpeed: 'slow',

		// 0 = top
		// 90 = left
		// 135 = right-bottom
		direction: 135,

		// interact with cursor move on mouse out
		keep: true,
	});
};

export const Main = () => {
	useEffect(() => {
		// Update the document title using the browser API

		Cloud();

		$('.cloud-content').find('.tagcloud:not(:eq(0))').remove();
	}, []);

	return (
		<div>
			<NavBar />
			<section id="home">
				<div className="container-fluid">
					<div className="row">
						<div className="col-6">
							<OpenTag
								tag="h3"
								innertext="body"
								classes="txt  my-4 body-open-tag"
							/>
							<OpenTag tag="h3" innertext="section" classes="mb-4 layer-1" />
							<div className="txt-container">
								<OpenTag tag="h3" innertext="h1" classes="txt layer-2" />

								<h2 className="txt display-txt display-main-txt layer-2-5">
									Hi, <br></br> I'm <span className="span-3">Gabe</span>
								</h2>
								<CloseTag tag="h3" innertext="h1" classes="txt layer-2" />

								<OpenTag tag="h3" innertext="h2" classes="txt layer-2 my-4" />
								<h2 className="txt display-txt display-sub-txt layer-2-5">
									A Fullstack <span className="span-3">Web Developer</span> that
									<span className="span-3"> builds </span>effective
									<span className="span-3"> solutions</span> with elegant{' '}
									<span className="span-3">designs</span>
								</h2>
								<CloseTag tag="h3" innertext="h2" classes="txt  layer-2 my-4" />
							</div>
							<CloseTag tag="h3" innertext="section" classes="layer-1 pt-5" />
						</div>
						<div className="col-6">
							<div className="cloud-content"></div>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<OpenTag
								tag="h3"
								innertext='section id="about"'
								classes="layer-1"
							/>
							<div className="row">
								<div className="col-6">
									<div className="about-text-container ">
										<OpenTag tag="h3" innertext="p" classes="txt layer-2" />
										<p className="txt display-txt display-sub-txt layer-2-5">
											In 2020 I began my journey into programming with Python
											and found that it made great use of my love of computers
											and my knack for <span>problem-solving</span>. Since then
											I've gone on to learn C#, Javascript, and many more
											frameworks and libraries. My long-term goal is to continue
											<span> learning</span> and <span>mastering</span> both the
											technologies I know and those I'll come to know to find
											new innovative ways to provide software-based solutions.
											My immediate goal is to learn new ways to design and
											integrate full-stack applications to build my skills in
											full-stack software engineering. My current focus is
											building <span>intuitive</span> websites with elegant
											<span> responsiveness</span> using the most current
											frameworks and technologies. Outside of my coding
											fanaticism I'm a huge reader and gamer.
										</p>
										<CloseTag tag="h3" innertext="p" classes="txt layer-2" />
									</div>
								</div>
								<div className="col-6 "></div>
							</div>

							<CloseTag
								tag="h3"
								innertext='section id="about"'
								classes="layer-1"
							/>
						</div>
					</div>
				</div>
			</section>
			<section id="about"></section>
			<section id="skills"></section>
			<section id="resume"></section>
			<section id="contact"></section>
			<div className="body-close-tag-div">
				<CloseTag
					tag="h3"
					innertext="body"
					classes="txt layer-1 body-close-tag"
				/>
			</div>

			<section id="footer">
				<Footer />
			</section>
		</div>
	);
};
