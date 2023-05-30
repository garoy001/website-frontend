// Import Swiper styles

import '../App.css';
import React, { useEffect, useState } from 'react';
import { OpenTag, CloseTag } from '../components/tags';
import NavBar from '../components/navbar';
import { Footer } from '../components/footer';
import $ from 'jquery';
import { CloudTest } from '../components/cloudtest';
import { IconShow } from '../components/icon-show';
import {
	AiOutlineStar,
	AiOutlineLinkedin,
	AiOutlineGithub,
} from 'react-icons/ai';
import { Canvas, useFrame } from '@react-three/fiber';
import { Controls } from './controls';
import {
	Html,
	Center,
	OrbitControls,
	PresentationControls,
	Stage,
	Environment,
	Float,
} from '@react-three/drei';
import { AiFillStar } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { ProjectShow } from '../components/project-show';
import { Fog } from 'three';
const TagCloud = require('TagCloud');

export const Main = () => {
	const mySkills = [
		['JavaScript', 4],
		['CSS', 4],
		['HTML', 4],
		['C#', 2],
		['Bash', 3],
		['React', 3],
		['Python', 3],
		['Trello', 3],
		['Bootstrap', 3],
		['Sass', 4],
		['Figma', 3],
		['Express', 3],
		['Mongoose', 3],
		['Git', 3],
		['Django', 3],
		['Node.js', 4],
		['MongoDB', 3],
		['MySQL', 3],
		['jQuery', 4],
		['R&D', 4],
		['Data Analysis', 3],
		['ThreeJS'],
		['R3F'],
	];

	return (
		<div>
			<NavBar />
			<section id="home">
				<div className="container-fluid">
					<div className="row" style={{ height: '100%', paddingTop: '5%' }}>
						<div className="col-md-6 col-12 top-level-column top-down-center-col">
							<OpenTag
								tag="h3"
								innertext="body"
								classes="txt  my-4 body-open-tag"
							/>
							<OpenTag tag="h3" innertext="section" classes="mb-4 layer-1" />
							<Canvas
								camera={{ fov: 90, near: 0.1, far: 100, position: [1, 2, 10] }}
							>
								<Controls></Controls>
								<Environment preset="city" />
								<Stage />
								<fog attach="fog" args={['#202025', 0, 80]} />
								<Center>
									<ambientLight intensity={2} />
									<rectAreaLight position={[1, 2, 10]} intensity={20} />
									<Float>
										{' '}
										<Html wrapperClass="canvas-html" fullscreen transform>
											<div className="txt-container">
												<OpenTag
													tag="h3"
													innertext="h1"
													classes="txt layer-2"
												/>

												<h2 className="txt display-txt display-main-txt layer-2-5">
													Hi, <br></br> I'm <span className="span-3">Gabe</span>
												</h2>
												<CloseTag
													tag="h3"
													innertext="h1"
													classes="txt layer-2"
												/>

												<OpenTag
													tag="h3"
													innertext="h2"
													classes="txt layer-2 my-4"
												/>
												<h2 className="txt display-txt display-sub-txt layer-2-5">
													A Fullstack{' '}
													<span className="span-3">Web Developer</span> that
													<span className="span-3"> builds </span>effective
													<span className="span-3"> solutions</span> with
													elegant <span className="span-3">designs</span>
												</h2>
												<CloseTag
													tag="h3"
													innertext="h2"
													classes="txt  layer-2 my-4"
												/>
											</div>
										</Html>
									</Float>
								</Center>
							</Canvas>
							<CloseTag tag="h3" innertext="section" classes="layer-1 pt-5" />
						</div>
						<div className="col-md-6 col-0 top-down-center-col">
							<CloudTest />
						</div>
					</div>
				</div>
			</section>
			<section id="about">
				<div className="container-fluid">
					<div
						className="row-fluid"
						style={{
							height: '100%',
							paddingTop: '30%',
							flexDirection: 'column',
						}}
					>
						<div className="col-md-10 col-12 top-level-column top-down-center-col ">
							<OpenTag
								tag="h3"
								innertext='section id="about"'
								classes="layer-1"
							/>
							<div className="about-text-container ">
								<OpenTag tag="h3" innertext="p" classes="txt layer-2" />
								<p className="txt display-txt display-sub-txt layer-2-5">
									In 2020 I began my journey into programming with Python and
									found that it made great use of my love of computers and my
									knack for <span>problem-solving</span>. Since then I've gone
									on to learn C#, Javascript, and many more frameworks and
									libraries.
									<br />
									<br /> My long-term goal is to continue
									<span> learning</span> and <span>mastering</span> both the
									technologies I know and those I'll come to know to find new
									innovative ways to provide software-based solutions. My
									immediate goal is to learn new ways to <span>design</span> and
									integrate full-stack applications to build my skills in
									full-stack software engineering. <br />
									<br />
									My current focus is building <span>intuitive</span> websites
									with elegant
									<span> responsiveness</span> using the most current frameworks
									and technologies. Outside of my coding fanaticism I'm a huge
									reader and gamer.
								</p>
								<CloseTag tag="h3" innertext="p" classes="txt layer-2" />
							</div>
						</div>

						<CloseTag
							tag="h3"
							innertext='section id="about"'
							classes="layer-1"
						/>
					</div>
				</div>
			</section>
			<section
				id="projects"
				style={{
					height: '100%',
					paddingTop: '10%',
				}}
			>
				<div className="container-fluid">
					<div
						className="row-fluid"
						style={{
							height: '100%',

							flexDirection: 'column',
						}}
					>
						<div className="col-md-12 col-12 top-level-column top-down-center-col ">
							<OpenTag
								tag="h3"
								innertext='section id="projects"'
								classes="layer-1"
							/>
							<div className="project-section-wrapper my-5">
								<ProjectShow />
							</div>
						</div>

						<CloseTag
							tag="h3"
							innertext='section id="projects"'
							classes="layer-1"
						/>
					</div>
				</div>
			</section>
			<section
				id="skills"
				style={{
					height: '100%',
					paddingTop: '10%',
				}}
			>
				<div className="container-fluid">
					<div
						className="row-fluid"
						style={{
							height: '100%',

							flexDirection: 'column',
						}}
					>
						<div className="col-md-12 col-12 top-level-column top-down-center-col ">
							<OpenTag
								tag="h3"
								innertext='section id="skills"'
								classes="layer-1"
							/>
							<div className="skill-section-wrapper my-5">
								<IconShow />
								<div className="skill-list-box">
									<ul className="skill-list py-5">
										{mySkills.map((e) => {
											let stars = [];
											for (let i = 0; i < e[1]; i++) {
												if (i == 0) {
												} else {
												}
											}
											return (
												<li className="skill-list-item txt py-3">
													{e[0]}
													&nbsp;
													<div className="stars-container">
														{stars.map((x) => {
															return x;
														})}
													</div>
												</li>
											);
										})}
									</ul>
								</div>
							</div>
						</div>
						<div id="resume">
							<h1>View My Resume</h1>
							<button className="btn btn-secondary txt ">
								<a
									target="_blank"
									href="https://docs.google.com/document/d/1QPFeK8lu-S-2OeCSOCjLhYgDW-NK5Ban/edit?usp=sharing&ouid=105037832923618926974&rtpof=true&sd=true"
								>
									resume
								</a>
							</button>
						</div>
						<CloseTag
							tag="h3"
							innertext='section id="skills"'
							classes="layer-1"
						/>
					</div>
				</div>
			</section>

			<div className="body-close-tag-div">
				<CloseTag
					tag="h3"
					innertext="body"
					classes="txt body-close-tag body-open-tag"
				/>
			</div>

			<section id="contact">
				<OpenTag tag="h3" innertext="footer" classes="txt py-5" />
				<div className="py-5">
					<OpenTag
						tag="h3"
						innertext='section id="contact"'
						classes="txt layer-1"
					/>
					<div className="footerHead py-5 my-5">
						<div
							style={{
								width: '119.59px',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<HiOutlineMail
								style={{
									marginRight: '1rem',
									fontSize: '2rem',
									color: 'white',
								}}
							/>
							<a
								style={{ textAlign: 'start' }}
								rel="noopener noreferrer"
								target={'_blank'}
								href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=garoy005@gmail.com&hl=en"
							>
								Email Me
							</a>
						</div>
						<div
							style={{
								width: '119.59px',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<AiOutlineLinkedin
								style={{
									marginRight: '1rem',
									fontSize: '2rem',
									color: 'white',
								}}
							/>
							<a
								style={{ textAlign: 'start' }}
								rel="noopener noreferrer"
								target={'_blank'}
								href="https://www.linkedin.com/in/gaberoyce/"
							>
								LinkedIn
							</a>
						</div>
						<div
							style={{
								width: '119.59px',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<AiOutlineGithub
								style={{
									marginRight: '1rem',
									fontSize: '2rem',
									color: 'white',
								}}
							/>
							<a
								style={{ textAlign: 'start' }}
								rel="noopener noreferrer"
								target={'_blank'}
								href="https://github.com/garoy001"
							>
								Github
							</a>
						</div>
					</div>

					<CloseTag
						tag="h3"
						innertext='section id="contact"'
						classes="txt layer-1"
					/>
				</div>
				<Footer />

				<CloseTag tag="h3" innertext="footer" classes="txt pb-5" />
			</section>
		</div>
	);
};
