import Icons from '../assets/data/icons.json';

const IconScroller = (props) => {
	const icoList = Object.values(Icons);
	let prev = 0;
	const getRanNum = () => {
		return Math.round(Math.random() * 2);
	};
	const returnPosition = () => {
		let num = getRanNum();
		while (prev == num) {
			num = getRanNum();
		}
		prev = num;
		switch (num) {
			case 0:
				return 'flex-start-class anim-1';
			case 1:
				return 'flex-end-class anim-2';
			case 2:
				return 'flex-center-class anim-3';
		}
	};
	if (props.type === 'desktop') {
		return (
			<div className="scrolling-container-desktop">
				<div className="scrolling-track-desktop">
					{icoList.map((e, index) => {
						return (
							<div
								className={returnPosition()}
								style={{ display: 'flex' }}
								key={index}
							>
								<img src={e} className="scrolling-icon-desktop" />
							</div>
						);
					})}
				</div>
			</div>
		);
	} else if (props.type === 'mobile') {
		return (
			<div className="scrolling-container-mobile">
				<div className="scrolling-track-mobile">
					{icoList.map((e, index) => {
						return (
							<div
								className={returnPosition()}
								style={{ display: 'flex' }}
								key={index}
							>
								<img src={e} className="scrolling-icon-mobile" />
							</div>
						);
					})}
				</div>
			</div>
		);
	}
};
export default IconScroller;
