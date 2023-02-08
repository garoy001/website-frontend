import Projects from '../components/projects';
import React, { useRef, useState } from 'react';
import Intro from './subpages/intro';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../App.css';
import { EffectCoverflow, Pagination, Mousewheel } from 'swiper';

export const Main = () => {
	return (
		<Swiper
			slides-per-view={'1'}
			direction={'vertical'}
			mousewheel={true}
			speed={'600'}
			effect={'coverflow'}
			pagination={true}
			autoHeight={true}
			parallax={true}
			freeMode={true}
			data-swiper-parallax-x="20"
			coverflowEffect={{
				rotate: 0,
				stretch: -10,
				depth: 100,
				modifier: 3,
				slideShadows: false,
			}}
			modules={[EffectCoverflow, Pagination, Mousewheel]}
		>
			<SwiperSlide className="my-bg-theme gif-bg-main">
				<Intro />
			</SwiperSlide>
			<SwiperSlide className="my-bg-theme text-primary gif-bg-projects">
				Test 2
			</SwiperSlide>
			<SwiperSlide className="gif-bg-tech">Test 3</SwiperSlide>
		</Swiper>
	);
};
