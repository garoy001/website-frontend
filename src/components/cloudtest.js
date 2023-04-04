import React, { useEffect, useState } from 'react';
import $ from 'jquery';
const TagCloud = require('TagCloud');
let windowSize = $(window).width();
export const CloudTest = () => {
	const Cloud = () => {
		windowSize = $(window).width();
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
			radius: Math.min(windowSize / 2.5 / 2, 400),
			// animation speed
			// slow, normal, fast
			maxSpeed: 'normal',
			initSpeed: 'normal',

			// 0 = top
			// 90 = left
			// 135 = right-bottom
			direction: 135,

			// interact with cursor move on mouse out
			keep: true,
		});
	};
	$(window).resize(function () {
		$('.cloud-content').find('.tagcloud').remove();
		// Update the document title using the browser API
		Cloud();
		//resize just happened, pixels changed
	});

	useEffect(() => {
		$('.cloud-content').find('.tagcloud').remove();
		// Update the document title using the browser API
		Cloud();

		$('.cloud-content').find('.tagcloud:not(:eq(0))').remove();
		$('.tagcloud').attr('id', 'cloudOverride');
	}, [$(window).width()]);

	return <div className="cloud-content"></div>;
};
