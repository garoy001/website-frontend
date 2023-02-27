import Icons from '../../assets/data/plainIcons.json';
import pic from '../../assets/images/imgimgimg.jpg';
import { AboutDesktop } from './about-desktop';
import { AboutMobile } from './about-mobile';
const icoList = Object.values(Icons);

export const About = (props) => {
	return (
		<div className="container-fluid page-cover fade-in-text">
			<div className="row ">
				<div className="col overflow">
					<AboutDesktop
						transitionText={props.transitionText}
						isTextHidden={props.isTextHidden}
					/>
					<AboutMobile
						transitionText={props.transitionText}
						isTextHidden={props.isTextHidden}
					/>
					<div
						className="row tech-stacks"
						style={{
							opacity: props.isTextHidden,
							transition: `opacity ${props.transitionText}s ease-in .5s`,
						}}
					>
						<div className="col-2 spacer"></div>
						<div className="col tech-box ">
							<h1>The Tools I Use</h1>
							<div className="tech-container">
								{icoList.map((e, index) => {
									return (
										<div
											className="techDisplay"
											style={{
												display: 'flex',
												opacity: props.isTextHidden,
												transition: `opacity ${
													props.transitionText
												}s ease-in ${1}.${index}s`,
											}}
											key={index + 1}
										>
											<i className={`${e} tech-icon`} />
										</div>
									);
								})}
							</div>
						</div>
						<div className="col-2 spacer"></div>
					</div>
					<div className="row" style={{ height: '10%' }}></div>
				</div>
			</div>
		</div>
	);
};
