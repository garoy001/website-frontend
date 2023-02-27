import React, { useRef, useState } from 'react';
import Intro from './subpages/intro';
import { About } from './subpages/about';
import NavBar from '../components/navbar';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import NavigationComp from '../components/navigation';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../App.css';
import {
	EffectCoverflow,
	Pagination,
	Mousewheel,
	Navigation,
	Scrollbar,
} from 'swiper';

export const Main = () => {
	return (
		<Swiper
			slides-per-view={'1'}
			direction={'vertical'}
			speed={'600'}
			effect={'coverflow'}
			autoHeight={true}
			parallax={true}
			followFinger={false}
			navigation={{
				prevEl: '.home-top-button',
				nextEl: '.home-bottom-button',
			}}
			pagination={true}
			mousewheel={{
				releaseOnEdges: true,
			}}
			data-swiper-parallax-x="20"
			// scrollbar={{
			// 	dragClass: 'overflow',
			// 	draggable: true,
			// 	el: '.overflow',
			// }}
			coverflowEffect={{
				rotate: 20,
				stretch: -20,
				depth: 1000,
				modifier: 1,
				slideShadows: false,
			}}
			modules={[EffectCoverflow, Pagination, Mousewheel, Navigation, Scrollbar]}
		>
			<SwiperSlide className="my-bg-theme ">
				{({ isActive }) => (
					<div className="h-100">
						<NavBar />
						<NavigationComp
							isTopHidden={isActive ? 0 : 1}
							isBottomHidden={isActive ? 1 : 0}
							isLineHidden={isActive ? 1 : 0}
							transitionTop={isActive ? 0 : 1.5}
							transitionBottom={isActive ? 1.5 : 0}
							transitionLine={isActive ? 1.5 : 0}
						/>
						<Intro
							transitionText={isActive ? 1 : 0}
							isTextHidden={isActive ? 1 : 0}
						/>
					</div>
				)}
			</SwiperSlide>
			<SwiperSlide className="my-bg-theme text-primary">
				{({ isActive }) => (
					<div className="h-100">
						<NavBar />
						<NavigationComp
							isTopHidden={isActive ? 1 : 0}
							isBottomHidden={isActive ? 0 : 1}
							isLineHidden={isActive ? 1 : 0}
							transitionTop={isActive ? 1.5 : 0}
							transitionBottom={isActive ? 0 : 1.5}
							transitionLine={isActive ? 1.5 : 0}
						/>
						<About
							transitionText={isActive ? 1 : 0}
							isTextHidden={isActive ? 1 : 0}
						/>
					</div>
				)}
			</SwiperSlide>
		</Swiper>
	);
};
