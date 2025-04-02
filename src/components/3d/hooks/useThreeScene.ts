import { RefObject, useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

interface UseThreeSceneProps {
	containerRef: RefObject<HTMLDivElement>;
}

export function useThreeScene({ containerRef }: UseThreeSceneProps) {
	const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
	const sceneRef = useRef<THREE.Scene | null>(null);
	const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
	const controlsRef = useRef<OrbitControls | null>(null);
	const frameIdRef = useRef<number>(0);

	useEffect(() => {
		console.log("Initializing Three.js scene...");
		if (!containerRef.current) return;
    const currentContainerRef = containerRef.current;
    const currentFrameIdRef = frameIdRef.current;

		const scene = new THREE.Scene();
		sceneRef.current = scene;

		const camera = new THREE.PerspectiveCamera(
			45,
			containerRef.current.clientWidth / containerRef.current.clientHeight,
			0.1,
			1000
		);
		cameraRef.current = camera;
		camera.position.set(0.2, 0, 0.2);

		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true,
		});
		rendererRef.current = renderer;
		renderer.setSize(
			containerRef.current.clientWidth,
			containerRef.current.clientHeight
		);
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.outputColorSpace = THREE.SRGBColorSpace;
		containerRef.current.appendChild(renderer.domElement);

		setupLighting(scene);

		const controls = new OrbitControls(camera as THREE.Camera, renderer.domElement);
		controlsRef.current = controls;
		controls.enableDamping = true;
		controls.dampingFactor = 0.05;
		controls.rotateSpeed = 0.5;
		controls.enableZoom = false;
		controls.enablePan = false;
		controls.minPolarAngle = Math.PI / 3;
		controls.maxPolarAngle = Math.PI / 1.5;

		const handleResize = () => {
			if (!containerRef.current || !cameraRef.current || !rendererRef.current)
				return;

			const width = containerRef.current.clientWidth;
			const height = containerRef.current.clientHeight;

			cameraRef.current.aspect = width / height;
			cameraRef.current.updateProjectionMatrix();
			rendererRef.current.setSize(width, height);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			if (currentFrameIdRef) {
				cancelAnimationFrame(currentFrameIdRef);
			}
			if (rendererRef.current && currentContainerRef) {
				currentContainerRef.removeChild(rendererRef.current.domElement);
			}
			if (controlsRef.current) {
				controlsRef.current.dispose();
			}
		};
	}, [containerRef]);

	return {
		sceneRef,
		cameraRef,
		rendererRef,
		controlsRef,
		frameIdRef,
	};
}

function setupLighting(scene: THREE.Scene) {
	const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
	scene.add(ambientLight);

	const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
	directionalLight.position.set(5, 10, 7.5);
	scene.add(directionalLight);

	const secondaryLight = new THREE.DirectionalLight(0xffffff, 1);
	secondaryLight.position.set(-5, -10, -7.5);
	scene.add(secondaryLight);
}
