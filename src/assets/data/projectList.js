import portfolioImg from '../images/portfolioimg.PNG';
export const jsIco =
	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
export const cssIco =
	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg';
export const figmaIco =
	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg';
export const expIco =
	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg';
export const htmlIco =
	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg';
export const mongoIco =
	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg';
export const nodeIco =
	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg';
export const linkedinIco =
	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg';
export const pythonIco =
	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg';
export const reactIco =
	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg';
export const trelloIco =
	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg';
export const githubIco =
	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg';
export const sassIco =
	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg';
export const axiosIco =
	'https://www.vectorlogo.zone/logos/axios/axios-icon.svg';
export const jqueryIco =
	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg';

export const projectObj = [
	{
		name: 'My Portfolio',
		img: '"https://i.ibb.co/8mwS5Z3/portfolioimg.png',
		links: {
			github: {
				frontEnd: 'https://github.com/garoy001/website-frontend',
				backEnd: '',
			},
			deployed: 'https://dev.gabrielroyce.com',
		},

		dependencies: [
			'jQuery',
			'react',
			'react-router-dom',
			'bootstrap',
			'sass',
			'react-reveal',
		],
		description: {
			short: 'A website to showcase myself as a developer',
			long: '',
		},
	},
	{
		name: 'Pantheon Financial',
		img: 'https://i.ibb.co/5krHNLt/panthpreview.png',
		links: {
			github: {
				frontEnd: 'https://github.com/garoy001/pantheonfinancial',
				backEnd: '',
			},
			deployed: '',
		},

		dependencies: [
			'jQuery',
			'react',
			'react-router-dom',
			'bootstrap',
			'sass',
			'react-reveal',
		],
		description: {
			short: 'Landing page for a digital asset investment firm',
			long: '',
		},
	},
	{
		name: 'Stocks Api App',
		img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
		links: {
			github: {
				frontEnd: 'https://github.com/garoy001/router_lab',
				backEnd: '',
			},
			deployed: '',
		},
		tech: [jsIco, cssIco, htmlIco, reactIco],
		dependencies: ['react', 'react-router-dom'],
		description: {
			short: 'A stock tracking app',
			long: '',
		},
	},
	{
		name: 'Wandering King ',
		img: 'https://i.ibb.co/g6NC6PK/wkpreview.png',
		links: {
			github: {
				frontEnd: 'https://github.com/garoy001/wkfrontend',
				backEnd: '',
			},
			deployed: 'https://wanderingkingstudios.com',
		},
		tech: [jsIco, cssIco, expIco, htmlIco, axiosIco, mongoIco],
		dependencies: [
			'jQuery',
			'react',
			'react-router-dom',
			'bootstrap',
			'sass',
			'react-reveal',
		],
		description: {
			short: 'Landing page for a web2.5 game development studio',
			long: '',
		},
	},
	{
		name: 'Magic 8 Ball',
		img: 'https://www.etftrends.com/wp-content/uploads/2019/08/A-Magic-8-Ball-Market.jpg',
		links: {
			github: {
				frontEnd: 'https://github.com/garoy001/express-lab-2',
				backEnd: '',
			},
			deployed: '',
		},
		tech: [jsIco, cssIco, expIco, htmlIco],
		dependencies: ['express', 'dotenv'],
		description: {
			short: 'A magic 8 ball app',
			long: '',
		},
	},
	{
		name: 'Tavern Menu',
		img: 'https://images.unsplash.com/photo-1555658636-6e4a36218be7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
		links: {
			github: {
				frontEnd: 'https://github.com/garoy001/Git-Pub',
				backEnd: '',
			},
			deployed: '',
		},
		tech: [jsIco, cssIco, expIco, htmlIco],
		dependencies: ['dotenv', 'ejs', 'express'],
		description: {
			short: 'An editable menu for a Tavern',
			long: '',
		},
	},
];
