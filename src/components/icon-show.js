import * as icons from '../assets/data/icons.json';
import Marquee from 'react-fast-marquee';
export const IconShow = () => {
	return (
		<div className="icon-wrapper">
			<Marquee speed="60" gradientColor={[0, 0, 0]} gradientWidth={600}>
				{Object.values(icons).map((e) => {
					if (e != '[object Object]') {
						return <img src={e} className="icon-ico mx-5" />;
					}
				})}
			</Marquee>
		</div>
	);
};
