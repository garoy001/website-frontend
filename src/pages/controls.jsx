import { useFrame, useThree } from '@react-three/fiber';
import { useEffect } from 'react';

export const Controls = () => {
	let camPos = [0, 0, 0];
	useEffect(() => {}, []);
	useThree((state) => {
		camPos = state.camera.position;
	});
	useFrame((state) => {
		state.camera.position.set(camPos);
		console.log(state.camera.position);
	});
	return <></>;
};
