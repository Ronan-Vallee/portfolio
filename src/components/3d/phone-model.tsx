"use client";

import { cn } from "@/lib/utils";
import { RefObject, useEffect, useRef } from "react";
import * as THREE from "three";
import { useThreeScene } from "./hooks/useThreeScene";
import { loadPhoneModel } from "./utils/phone-model-utils";

interface PhoneModelProps {
	screenImage: string;
	isVideo?: boolean;
	className?: string;
}

export default function PhoneModel({
	screenImage,
	isVideo = false,
	className,
}: PhoneModelProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const videoTextureRef = useRef<THREE.VideoTexture | null>(null);
	const modelRef = useRef<THREE.Group | null>(null);

	// Initialize Three.js scene and related objects
	const { sceneRef, cameraRef, rendererRef, controlsRef, frameIdRef } =
		useThreeScene({
			containerRef: containerRef as RefObject<HTMLDivElement>,
		});

	// Load phone model and handle screen content
	useEffect(() => {
		if (!sceneRef.current) return;

		loadPhoneModel({
			scene: sceneRef.current,
			screenImage,
			isVideo,
			onLoad: (model, videoTexture) => {
				modelRef.current = model;
				videoTextureRef.current = videoTexture;

				// Start animation after model is loaded
				animate();
			},
		});

		// Animation function
		const animate = () => {
			if (!sceneRef.current || !cameraRef.current || !rendererRef.current)
				return;

			frameIdRef.current = requestAnimationFrame(animate);

			// Update video texture if needed
			if (
				videoTextureRef.current &&
				videoTextureRef.current.image.readyState ===
					videoTextureRef.current.image.HAVE_ENOUGH_DATA
			) {
				videoTextureRef.current.needsUpdate = true;
			}

			// Update controls if available
			if (controlsRef.current) {
				controlsRef.current.update();
			}

			rendererRef.current.render(sceneRef.current, cameraRef.current);
		};

		return () => {
			// Cleanup video if it exists
			if (videoTextureRef.current) {
				const videoElement = videoTextureRef.current.image;
				videoElement.pause();
				videoElement.src = "";
				videoElement.load();
			}
		};
	}, [
		screenImage,
		isVideo,
		sceneRef,
		cameraRef,
		rendererRef,
		frameIdRef,
		controlsRef,
	]);

	return <div ref={containerRef} className={cn(`relative`, className)}></div>;
}
