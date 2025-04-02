import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export function loadPhoneModel({
  scene,
  screenImage,
  isVideo,
  onLoad,
}: {
  scene: THREE.Scene;
  screenImage: string;
  isVideo: boolean;
  onLoad: (model: THREE.Group, videoTexture: THREE.VideoTexture | null) => void;
}) {
  const loader = new GLTFLoader();
  loader.load(
    "/models/phone/scene.gltf",
    (gltf) => {
      const model = gltf.scene;
      model.scale.set(0.03, 0.03, 0.03);

      let videoTexture: THREE.VideoTexture | null = null;

      if (isVideo) {
        videoTexture = createVideoTexture(model, screenImage);
      } else {
        createImageTexture(model, screenImage);
      }

      model.rotation.set(0, Math.PI / 6, 0);
      scene.add(model);

      onLoad(model, videoTexture);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.error("An error happened", error);
    }
  );
}

function createVideoTexture(
  model: THREE.Group,
  videoSrc: string
): THREE.VideoTexture {
  const video = document.createElement("video");
  video.src = videoSrc;
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.autoplay = true;
  video.play();

  const videoTexture = new THREE.VideoTexture(video);
  videoTexture.colorSpace = THREE.SRGBColorSpace;

  model.traverse((node) => {
    if (node instanceof THREE.Mesh && node.material) {
      if (node.material.name === "Wallpaper") {
        const screenMaterial = node.material as THREE.MeshStandardMaterial;
        screenMaterial.map = videoTexture;
        screenMaterial.map.repeat.set(2, 1);
        screenMaterial.needsUpdate = true;
      }
    }
  });

  return videoTexture;
}

function createImageTexture(model: THREE.Group, imageSrc: string): void {
  const textureLoader = new THREE.TextureLoader();
  textureLoader.load(imageSrc, (texture) => {
    model.traverse((node) => {
      if (node instanceof THREE.Mesh && node.material) {
        if (node.material.name === "Wallpaper") {
          const screenMaterial = node.material as THREE.MeshStandardMaterial;
          screenMaterial.map = texture;
          screenMaterial.map.repeat.set(2, 1);
          screenMaterial.needsUpdate = true;
        }
      }
    });
  });
}
