import { useRef } from "react";

import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function Level() {
	const { nodes }: any = useGLTF("/level-react-draco.glb");

	return (
		<mesh
			geometry={nodes.Level.geometry}
			material={nodes.Level.material}
			position={[-0.38, 0.69, 0.62]}
			rotation={[Math.PI / 2, -Math.PI / 9, 0]}
		/>
	);
}

function Rig() {
	const { camera, mouse } = useThree();
	const vec = new THREE.Vector3();

	return useFrame(() => {
		camera.lookAt(0, 0, 0);
		camera.position.lerp(vec.set(12 + mouse.x * 1.5, 12 + mouse.y * 1, 12), 0.02);
	});
}

export default function Background3D() {
	return (
		<Canvas dpr={[1, 2]} camera={{ fov: 12, position: [12, 12, 12] }} style={{ position: "fixed", zIndex: -1 }}>
			<color attach="background" args={["#e0b7ff"]} />
			<ambientLight />
			<group dispose={null}>
				<Level />

				<Rig />
			</group>
		</Canvas>
	);
}
