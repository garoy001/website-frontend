import { useFrame } from '@react-three/fiber';

export const Controls = () => {
	useFrame((state) => {
		console.log(state);
	});
	return <></>;
};
