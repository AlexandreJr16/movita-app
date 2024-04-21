import { ExpoWebGLRenderingContext, GLView } from "expo-gl";
import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import * as THREE from "three";

export default function ModelViewer() {
  const [gl, setGl] = useState<ExpoWebGLRenderingContext | null>(null);
  const scene = useRef<THREE.Scene | null>(null);
  const camera = useRef<THREE.PerspectiveCamera | null>(null);
  const renderer = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!gl) return;

    // Initialize scene, camera, and renderer
    scene.current = new THREE.Scene();
    camera.current = new THREE.PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      0.1,
      1000
    );
    renderer.current = new THREE.WebGLRenderer({ gl });
    renderer.current.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    // Create cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: "blue" });
    const cube = new THREE.Mesh(geometry, material);
    scene.current.add(cube);

    // Set camera position
    camera.current.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.current.render(scene.current, camera.current);
      gl.endFrameEXP();
    };

    animate();

    // Clean up
    return () => {
      scene.current = null;
      camera.current = null;
      renderer.current = null;
    };
  }, [gl]);

  const onContextCreate = async ({ gl }: { gl: ExpoWebGLRenderingContext }) => {
    setGl(gl);
  };

  return (
    <View style={styles.container}>
      <GLView
        style={styles.glView}
        onContextCreate={onContextCreate}
        msaaSamples={4}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  glView: {
    width: 300,
    height: 300,
  },
});
