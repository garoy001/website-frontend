import '../styling/navigation.scss';
import { useSwiper } from 'swiper/react';
function NavigationComp(props) {
	const swiper = useSwiper();
	return (
		<nav className="nav-personal-outline">
			<div
				className="home-top-button "
				style={{
					opacity: props.isTopHidden,
					transition: `opacity ${props.transitionTop}s `,
				}}
				onClick={() => swiper.slidePrev()}
			>
				<i className="arrow-icon arrow-up"></i>
				<h1>{props.topText ? props.topText : 'Home'}</h1>
			</div>
			<div className="home-right-button">
				<h1>projects</h1>
				<i className="arrow-icon arrow-right"></i>
			</div>
			<div
				className="home-bottom-button"
				style={{
					opacity: props.isBottomHidden,
					transition: `opacity ${props.transitionBottom}s ease-in`,
				}}
				onClick={() => swiper.slideNext()}
			>
				<h1>{props.bottomText ? props.bottomText : 'About Me'}</h1>
				<i className="arrow-icon arrow-down"></i>
			</div>
		</nav>
	);
}

export default NavigationComp;
