export const OpenTag = (props) => {
	return (
		<>
			{
				<props.tag className={props.classes + ' deco-text'}>
					&lt; &nbsp;<span className="span-2">&nbsp;{props.innertext}</span>
					&nbsp; &gt;
				</props.tag>
			}
		</>
	);
};
export const CloseTag = (props) => {
	return (
		<>
			{
				<props.tag className={props.classes + ' deco-text'}>
					&lt;&nbsp;<span className="span-1">/ </span>
					<span className="span-2"> {props.innertext} </span>&nbsp; &gt;
				</props.tag>
			}
		</>
	);
};
