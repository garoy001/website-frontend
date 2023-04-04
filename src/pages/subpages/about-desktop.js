import pic from '../../assets/images/imgimgimg.jpg';
export const AboutDesktop = (props) => {
	return (
		<div
			className="row about-me-desktop"
			style={{
				opacity: props.isTextHidden,
				transition: `opacity ${props.transitionText}s ease-in`,
			}}
		>
			<div className="col-2 spacer"></div>
			<div className="col-lg-3 photo-col">
				<div className="pic-container">
					<img className="pic" src={pic} />
				</div>
			</div>
			<div className="col-lg-5 col-8 about-me-box fade-in-text">
				<h1 className="about-me-title">Hello!</h1>
				<p className="about-me-text about-me-text-1">
					My name is Gabe Royce. Ever since the first time I touched a computer,
					I've been fascinated and infatuated with the technology behind them.
					In 2020 I began my journey into programming with Python and found that
					it made great use of my love of computers and my knack for{' '}
					<span>problem-solving</span>.
				</p>
				<p className="about-me-text about-me-text-2">
					Since then I've gone on to learn C#, Javascript, and so many more
					frameworks and libraries. My long-term goal is to continue
					<span> learning</span> and <span>mastering</span> both the
					technologies I know and those I'll come to know to find new innovative
					ways to provide software-based solutions. My immediate goal is to
					learn new ways to design and integrate full-stack applications to
					build my skills in full-stack software engineering.
				</p>
				<p className="about-me-text about-me-text-3">
					My current focus is building <span>intuitive</span> websites with
					elegant
					<span> responsiveness</span> using the most current frameworks and
					technologies. Outside of my coding fanaticism I'm a huge reader and
					gamer.
				</p>
			</div>
			<div className="col-lg-1 col-2"></div>
		</div>
	);
};